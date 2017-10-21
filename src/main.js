import css from './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Corps from './Corps';
import Footer from './Footer';
import Loader from './Loader';

class Inside extends React.Component {
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
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }
  componentDidMount() {
    setTimeout(function() { this.setState({loading: false}); }.bind(this), 1000);
  }
  render() {
    return(
      this.state.loading ? <Loader /> : <Inside />
    );
  }
}
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Body),
    document.getElementById('mount')
  );
});
