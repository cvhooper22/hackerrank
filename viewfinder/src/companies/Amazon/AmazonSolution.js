import { useState } from 'react';
import './AmazonSolution.css';

export default function AmazonSolution () {
  const [results, setResults] = useState(['catifornia', 'catifornicatioin']);

  function renderResults () {
    if (results.length) {
      return (
        <div className="amazon-solution__results">
          <ul>
            {results.map(r => <li>{r}</li>)}
          </ul>
        </div>
      );
    }
    return null;
  }
  
  return (
    <div className="amazon-solution">
      <div className="amazon-solution__autocomplete">
        <input type="text" placeholder="Search for something" />
        { renderResults() }
      </div>
      <div className="amazon-solution__content">
        Here is some content that the results should result render over
      </div>
    </div>
  );
}