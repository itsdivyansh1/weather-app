import Loader from "./Loader";

const GetTemp = ({ temp }) => {
  return (
    <>
      <h3>Mumbai</h3>
      <div className="text-9xl font-bold max-md:text-5xl">
        {temp ? temp + "°" : <Loader />}
      </div>
    </>
  );
};

export default GetTemp;
