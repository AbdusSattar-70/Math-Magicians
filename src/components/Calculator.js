import React from 'react';
import '../index.css';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => (
  <section className="container">
    <Display />
    <Keypad />
  </section>
);

export default Calculator;
