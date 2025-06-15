import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const display = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <form>
        <input type="text" value={input} readOnly />
        <span onClick={() => setInput('')}>C</span>
        <span onClick={() => display('/')}>/</span>
        <span onClick={() => display('*')}>*</span>
        <span onClick={() => display('-')}>-</span>
        <span onClick={() => display('7')}>7</span>
        <span onClick={() => display('8')}>8</span>
        <span onClick={() => display('9')}>9</span>
        <span onClick={() => display('+')}>+</span>
        <span onClick={() => display('4')}>4</span>
        <span onClick={() => display('5')}>5</span>
        <span onClick={() => display('6')}>6</span>
        <span onClick={() => display('1')}>1</span>
        <span onClick={() => display('2')}>2</span>
        <span onClick={() => display('3')}>3</span>
        <span onClick={() => display('0')}>0</span>
        <span onClick={() => display('00')}>00</span>
        <span onClick={() => display('.')}>.</span>
        <span onClick={calculate}>=</span>
      </form>
    </div>
  );
};

export default Calculator;
