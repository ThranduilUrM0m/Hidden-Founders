import css from './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Corps from './Corps';
import Footer from './Footer';

class Body extends React.Component {
  render() {
    return(
      <div className="container-fluid god">
        <Header />
        <Corps />
        <Footer />
      </div>
    );
  }
}
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Body),
    document.getElementById('mount')
  );
});
