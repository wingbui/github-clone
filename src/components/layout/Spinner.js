import React from 'react';
import spinner from './spinner.gif';

export default function Spinner() {
  return (
    <>
      <img src={spinner} alt="loading..." style={spinnerStyle} />
    </>
  );
}

const spinnerStyle = {
  display: 'block',
  width: '200px',
  margin: 'auto',
};
