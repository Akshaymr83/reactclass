import React, { useState, useMemo, useEffect } from 'react';

function Multiply() {
  const [number, setNumber] = useState('');
  const [dark, setDark] = useState(false);
  const [first, update] = useState(2);
  const [delayedNumber, setDelayedNumber] = useState('');

  const style = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  const cnum = useMemo(() => calculation(delayedNumber), [delayedNumber]);

  function calculation(n) {
    console.log('loop');
    return n;
  }

  const click = () => {
    update(first * 2);
  };

  const four = () => {
    update(first * 4);
  };

  const six = () => {
    update(first * 6);
  };

  const toggleDarkMode = () => {
    setDark((prevDark) => !prevDark);
  };

  const buttonStyle = {
    padding: '10px 10px 10px 10px',
    marginLeft: '10px',
    color: 'white',
    fontWeight: '500',
    background: '#42bff5',
    border: 'none',
    borderRadius: '5px',
  };

  useEffect(() => {
    // Delay the update of delayedNumber by 2 seconds
    const timer = setTimeout(() => {
      setDelayedNumber(number);
    }, 3000);

    return () => clearTimeout(timer);
  }, [number]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1 style={style}>{first}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
        style={{ margin: '10px' }}
      />
      <div>
        <p>NUMBER: {cnum}</p>
      </div>
      <button onClick={click} style={buttonStyle}>
        Multiply 2
      </button>
      <button onClick={four} style={buttonStyle}>
        Multiply 4
      </button>
      <button onClick={six} style={buttonStyle}>
        Multiply 6
      </button>
      <button onClick={toggleDarkMode} style={buttonStyle}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default Multiply;
