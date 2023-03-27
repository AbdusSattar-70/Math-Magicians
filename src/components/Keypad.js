const Keypad = () => (
  <div className="keypad">
    <button type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button type="button" className="deepOrange">&divide;</button>
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button type="button" className="deepOrange">&times;</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button type="button" className="deepOrange">-</button>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button" className="deepOrange">+</button>
    <button type="button" className="zero">0</button>
    <button type="button">.</button>
    <button type="button" className="deepOrange">=</button>
  </div>
);

export default Keypad;