import React, { useState } from 'react';

import Display from '../components/Display';
import Keypad from '../components/Keypad';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [displyValue, setDisplayValue] = useState(0);
  const handleCalculation = (event) => {
    setDisplayValue((displyValue) => calculate(displyValue, event.target.innerText));
  };

  return (
    <section className="container">
      <Display displyValue={displyValue.next || displyValue.total || '0'} />
      <Keypad eventListener={handleCalculation} />
    </section>
  );
};

export default Calculator;
