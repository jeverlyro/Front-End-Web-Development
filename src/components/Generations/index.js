import Gen1 from "../Gen 1";
import Gen2 from "../Gen 2";
import Gen3 from "../Gen 3";
import Gen4 from "../Gen 4";
const Generations = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
      <Gen1 text="Gen1 using props" />
      <Gen2 text="Gen2 using props" />
      <Gen3 text="Gen3 using props" />
      <Gen4 text="Gen4 using props" />
    </>
  );
};

export default Generations;
