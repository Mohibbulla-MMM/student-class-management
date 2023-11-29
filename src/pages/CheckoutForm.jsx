import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";

// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ data }) => {
  const [date] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const [err, setErr] = useState("");
  const [trasectionId, setTransectionId] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  //   const navigate = useNavigate();

  const totalPrice = data.price;
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalPrice]);
  //   console.log(clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }

      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log(error);
        setErr(error.message);
      } else {
        console.log("Payment Maythods", paymentMethod);
        setErr("");
      }
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "anonymouse@gmail.com",
              name: user?.displayName,
            },
          },
        });
      if (confirmError) {
        console.log("Payment Confirm Error", confirmError);
      } else {
        console.log("Payment Intent", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          setTransectionId(paymentIntent.id);
        }
      }
      ///////////////////////////////////////////////////////
      const payment = {
        email: user?.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        purchaseDate: `${date.getDate()}:${
          date.getMonth() + 1
        }:${date.getFullYear()}`,
        classId: data._id,
        status: "pending",
      };
      const res = await axiosSecure.post("/payments", payment);
      if (res.data.insertedId) {
        toast.success("Payment success");
        setLoading(false);

        // navigate('/dashbord/payment_history');
      }
      await axiosSecure.patch("/classes", data);
      navigate('/dashbord/my-enroll-class')
      // console.log("payment save", res);
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Payment not success");
    }
  };
  // console.log(cart);
  return (
    <div className="max-w-md mx-auto p-5 bg-purple-50">
      {/* <h2 className="text-xl font-bold mb-3">Totla price: {totalPrice}</h2> */}
      {trasectionId && (
        <p className="text-green-600 font-semibold mb-4">
          Your Payment Successfull
        </p>
      )}
      <p className="text-red-600 mb-4">{err && err}</p>
      {data?.price === 0 && (
        <p className="text-green-600 font-semibold mb-4">This class is free</p>
      )}

      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="btn btn-block   text-lg btn-ghost hover:bg-purple-800 bg-purple-400 hover:text-white mt-4 rounded "
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          {loading ? (
            <span className="animate-spin">
              <ImSpinner9 />
            </span>
          ) : (
            `Total $${data && data?.price}`
          )}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
