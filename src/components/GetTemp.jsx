const GetTemp = ({ temp }) => {
  return (
    <>
      <h3>Mumbai</h3>
      <div className="text-9xl font-bold">
        {temp}
        <span>°</span>
      </div>
    </>
  );
};

export default GetTemp;
