import React from 'react';

const style = {
  background: '#800',
  color: '#fff',
  padding: 12,
};

const shellOnclick = () => {
  console.log('clicked shell button')
}

const Button = () => <button onClick={shellOnclick} style={style}>Shell Button</button>;

export default Button;