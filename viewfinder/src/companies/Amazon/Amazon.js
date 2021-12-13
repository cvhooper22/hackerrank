import ProblemView from "../../components/ProblemView";
import AmazonSolution from './AmazonSolution';

export default function Amazon() {
  const desc = (
    <div>
      Implement an autocomplete that looks like the one Amazon uses.
      <ul>
        <li>input box with search icon on right</li>
        <li>Dropdown underneath with results</li>
        <li>Can assume you call an api for results</li>
        <li>Zebra Striping</li>
      </ul>
    </div>
  );

  return (
    <ProblemView
      companyName="Amazon"
      description={desc}
      solution={<AmazonSolution />}
    />
  )
}