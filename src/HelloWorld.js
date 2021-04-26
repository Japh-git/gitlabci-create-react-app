import React from 'react';
import './App.css';

const HelloWorld = () => {
  
  function sayHello() {
    alert('Hello, DevOps Team !');
  }
  
  return (
    <h1><button onClick={sayHello}><h1>Click me!</h1></button></h1>
  );
};

export default HelloWorld;
