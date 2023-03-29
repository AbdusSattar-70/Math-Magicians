import React, { useState } from 'react';

import '../index.css';
import Display from './Display';
import Keypad from './Keypad';
import calculate from '../logic/calculate';
import Quotes from './Quotes';

const Calculator = () => {
  const [displyValue, setDisplayValue] = useState(0);

  const handleCalculation = (event) => {
    setDisplayValue((displyValue) => calculate(displyValue, event.target.innerText));
  };

  return (
    <section className="mainContainer">
      <Quotes />
      <section className="container">
        <Display displyValue={displyValue.next || displyValue.total || '0'} />
        <Keypad eventListener={handleCalculation} />
      </section>
    </section>

  );
};

export default Calculator;
