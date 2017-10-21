import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="loader-wrapper">
          <div className="loader">
            <div className="roller"></div>
            <div className="roller"></div>
          </div>

          <div id="loader2" className="loader">
            <div className="roller"></div>
            <div className="roller"></div>
          </div>

          <div id="loader3" className="loader">
            <div className="roller"></div>
            <div className="roller"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
