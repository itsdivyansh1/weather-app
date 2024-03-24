const GetTemp = ({ temp }) => {
  return (
    <>
      <h3>Mumbai</h3>
      <div className="text-9xl font-bold max-md:text-5xl">
        {temp}
        <span>°</span>
      </div>
    </>
  );
};

export default GetTemp;
