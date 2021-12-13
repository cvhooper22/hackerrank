import { useState } from 'react';
import './ProblemView.css';

export default function ProblemView ({companyName, description, solution}) {
  const [view, setView] = useState('description');

  function onButtonClick (tabKey) {
    console.log('outside the meat of tthe curried function', tabKey);
    console.log('\t current tab is: ', view);
    return () => {
      setView(tabKey);
    }
  }

  function tabClassName (tabKey) {
    const classes = [`problem-view__${tabKey}`];
    if (view !== tabKey) {
      classes.push('problem-view--invisible');
    }
    return classes.join(' ');
  }

  return (
    <div className="problem-view">
      <header>
        <h1>{companyName}</h1>
        <div className="problem-view__tabs">
          <button className="problem-view__tab" onClick={onButtonClick('description')}>Description</button>
          <button className="problem-view__tab" onClick={onButtonClick('solution')}>Solution</button>
        </div>
      </header>
      <div className={tabClassName('description')}>
        { description }
      </div>
      <div className={tabClassName('solution')}>
        { solution }
      </div>
    </div>
  );
}