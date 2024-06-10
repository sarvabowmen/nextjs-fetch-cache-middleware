import { WithData } from "../../component/withData"; 
const ProviderB = ({ result1, result2, result3, result4 }) => {
  return (
    <div>
      <h1>Provider B</h1>
      <div>{JSON.stringify(result1)}</div>
        <div>{JSON.stringify(result2)}</div>
        <div>{JSON.stringify(result3)}</div>
        <div>{JSON.stringify(result4)}</div>
    </div>
  );
};

export default await WithData(ProviderB);