import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="header">
        <div className="container-fluid">
          <div className="row">

						<div className="collapse navbar-collapse" id="navbarSupportedContentMobile">
								<ul className="navbar-nav">
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Browse
										</a>
										<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
											<a className="dropdown-item" href="#">Action</a>
											<a className="dropdown-item" href="#">Another action</a>
											<div className="dropdown-divider"></div>
											<a className="dropdown-item" href="#">Something else here</a>
										</div>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle profile" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<div className="img-circle-profile"></div>
										</a>
										<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
											<a className="dropdown-item" href="#">Action</a>
											<a className="dropdown-item" href="#">Another action</a>
											<div className="dropdown-divider"></div>
											<a className="dropdown-item" href="#">Something else here</a>
										</div>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											POPULAIR
										</a>
										<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown2">
											<a className="dropdown-item" href="#">Action</a>
											<a className="dropdown-item" href="#">Another action</a>
											<div className="dropdown-divider"></div>
											<a className="dropdown-item" href="#">Something else here</a>
										</div>
									</li>
									<li className="nav-item active">
										<a className="nav-link" href="#">Affordable <span className="sr-only">(current)</span></a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Fancy</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Tips</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#">Community</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#"><i className="ion-ios-bell"></i></a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#"><i className="ion-heart"></i></a>
									</li>
								</ul>
							</div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
              <a className="navbar-brand col-2" href="#"><img src="https://image.ibb.co/bL2vD6/font.png" alt="BRAND"/></a>
							<button className="navbar-toggler menu" type="button" data-toggle="collapse" data-target="#navbarSupportedContentMobile" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="navbar-toggler-icon"></span>
						  </button>
              <div className="collapse navbar-collapse col-10" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Browse
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="ion-ios-bell"></i></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><i className="ion-heart"></i></a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle profile" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<div className="img-circle-profile"></div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>

						</nav>

            <nav className="navbar middle">
							<div className="row middle-header">
	              <div className="col-3">
	                <div className="img-circle"></div>
	              </div>
	              <div className="col-7">
	                <h1>Date Night Restaurants</h1>
	                <p className="mb-0">Best places for a date night in New York City</p>
	                <p>6 M Followers</p>
	              </div>
	              <div className="col-2 social">
									<div className="content">
										<button type="button" className="btn btn-danger">Follow</button>
										<button type="button" className="btn btn-outline-light"><i className="ion-ios-gear-outline"></i></button>
									</div>
	              </div>
	            </div>
						</nav>

            <nav className="navbar navbar-expand-lg navbar-light bg-light bottom">

              <div className="collapse navbar-collapse row" id="navbarSupportedContent1">
                <ul className="navbar-nav col-2">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      POPULAIR
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav mr-auto col-10">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Affordable <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Fancy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Tips</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Community</a>
                  </li>
                </ul>
              </div>
            </nav>

					</div>
        </div>
      </section>
    );
  }
}
export default Header;
