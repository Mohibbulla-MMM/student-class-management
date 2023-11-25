import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API_PK);

const Payment = ({ data }) => {
  return (
    <div>
      <SectionTitle title="You Class" subTitle="Hurray!!!" />
      <Elements stripe={stripePromise}>
        <CheckoutForm data={data} />
      </Elements>
    </div>
  );
};

export default Payment;
