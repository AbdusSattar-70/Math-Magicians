import React from 'react';
import PropTypes from 'prop-types';

const Keypad = (props) => {
  const { eventListener } = props;
  return (
    <div className="keypad">
      <button type="button" onClick={eventListener}>AC</button>
      <button type="button" onClick={eventListener}>+/-</button>
      <button type="button" onClick={eventListener}>%</button>
      <button type="button" onClick={eventListener} className="deepOrange">&divide;</button>
      <button type="button" onClick={eventListener}>7</button>
      <button type="button" onClick={eventListener}>8</button>
      <button type="button" onClick={eventListener}>9</button>
      <button type="button" onClick={eventListener} className="deepOrange">x</button>
      <button type="button" onClick={eventListener}>4</button>
      <button type="button" onClick={eventListener}>5</button>
      <button type="button" onClick={eventListener}>6</button>
      <button type="button" onClick={eventListener} className="deepOrange">-</button>
      <button type="button" onClick={eventListener}>1</button>
      <button type="button" onClick={eventListener}>2</button>
      <button type="button" onClick={eventListener}>3</button>
      <button type="button" onClick={eventListener} className="deepOrange">+</button>
      <button type="button" onClick={eventListener} className="zero">0</button>
      <button type="button" onClick={eventListener}>.</button>
      <button type="button" onClick={eventListener} className="deepOrange">=</button>
    </div>
  );
};

Keypad.propTypes = {
  eventListener: PropTypes.func.isRequired,
};

export default Keypad;
