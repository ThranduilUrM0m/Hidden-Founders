import React from 'react';

class Plate extends React.Component {
  render() {
    return(
      <div className="card">

        <div className="card__image" id="card-1">
          <div className="image-overlay"><a href="#"><i className="ion-ios-heart-outline"></i></a>
          </div>
          <img src={this.props.img} alt="" />
        </div>

        <div className="card__description">
          <span className="line _long">{this.props.long}</span>
          <span className="line _short">{this.props.short}</span>
        </div>

      </div>
    );
  }
}
class Column4 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="col-4 no-pad">

        <div id={this.props.id} className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Plate img={this.props.img} long={this.props.long} short={this.props.short} />
            </div>
            <div className="carousel-item">
              <Plate img={this.props.img} long={this.props.long} short={this.props.short} />
            </div>
            <div className="carousel-item">
              <Plate img={this.props.img} long={this.props.long} short={this.props.short} />
            </div>
          </div>
          <a className="carousel-control-prev" href={`#${this.props.id}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href={`#${this.props.id}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
class PlatesPart extends React.Component {
  render() {
    return (
      <div className="col-7">
        <div className="row">
          <Column4 id="carouselExampleControls0" img="https://static.pexels.com/photos/8717/food-pot-kitchen-cooking.jpg" long="Asiate" short="400K likes" />
          <Column4 id="carouselExampleControls1" img="https://static.pexels.com/photos/8717/food-pot-kitchen-cooking.jpg" long="Blue Hill" short="900K likes" />
          <Column4 id="carouselExampleControls2" img="https://static.pexels.com/photos/8717/food-pot-kitchen-cooking.jpg" long="Jean-Georges" short="900K likes" />
        </div>
        <div className="row">
          <Column4 id="carouselExampleControls3" img="https://static.pexels.com/photos/8717/food-pot-kitchen-cooking.jpg" long="Petrossian" short="670K likes" />
          <Column4 id="carouselExampleControls4" img="https://static.pexels.com/photos/8717/food-pot-kitchen-cooking.jpg" long="ABC Kitchen" short="100K likes" />
          <Column4 id="carouselExampleControls5" img="https://static.pexels.com/photos/8717/food-pot-kitchen-cooking.jpg" long="OC" short="300K likes" />
        </div>
      </div>
    );
  }
}
class MapPart extends React.Component {
  render() {
    return (
      <div className="col-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11877.10460569783!2d-6.854515984762764!3d34.00358021537154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c888e949a0f%3A0x92db71d79996da60!2sHidden+Founders!5e0!3m2!1sfr!2sfr!4v1508522328032" frameBorder="0" allowFullScreen></iframe>
      </div>
    );
  }
}
class Corps extends React.Component {
  render (){
    return(
      <section className="corps">
        <div className="container-fluid">
          <div className="row">
            <PlatesPart />
            <MapPart />
          </div>
        </div>
      </section>
    );
  }
}
export default Corps;
