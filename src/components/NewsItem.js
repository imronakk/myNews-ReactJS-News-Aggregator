import React, { Component } from "react";

export default class extends Component {

  render() {
      let {title,description,urlImage,infourl,author,publishedDate,source} = this.props;
    return (
      <>
        <div className="card my-3 " style={{ width: "20rem" }}>
          <img src={urlImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
              {source}
            </span>
</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(publishedDate).toGMTString()}</small></p>
            <a href={infourl} target="__blank" className="btn btn-primary">
              Check This
            </a>
          </div>
        </div>
      </>
    );
  }
}
