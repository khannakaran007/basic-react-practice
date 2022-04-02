import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/helloMessage';
import Timer from './components/timer';
import SomeTimerComponent from './components/someTimerComponent';
import TodoApp from './components/todoApp';
import ReverseUserString from './components/reverseUserString';


import './index.css';


// ========================================

ReactDOM.render(
  // <HelloMessage name="World"/>,
  // <Timer />,
  // <SomeTimerComponent/>,
  // <TodoApp/>,
  <ReverseUserString/>,
  document.getElementById('root')
);
