import useAuth from "../../../hooks/useAuth";

const AnaliticsHeader = () => {
  const { user } = useAuth();
  return (
    <div className="p-4 flex justify-between items-center gap-3">
      <h1 className="text-xl font-semibold uppercase">
        Welcome {user && user?.displayName}
      </h1>

      <figure className="relative">
        <img
          src={user?.photoURL}
          alt=""
          className="w-12 h-12 shadow-xl border rounded-full object-cover scale-95 cursor-pointer"
        />
        {/* active dot */}
        <div className="w-3 h-3 rounded-full bg-green-500 absolute top-2 right-0 border-2"></div>
      </figure>
    </div>
  );
};

export default AnaliticsHeader;
