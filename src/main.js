import css from './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Header),
    document.getElementById('mount')
  );
});
