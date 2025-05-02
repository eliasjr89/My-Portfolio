import React from "react";

const Card = ({ logo, position, location, duration, description, url, style }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-lg rounded-5 bg-tertiary text-white" style={style}>
        <div className="card-body d-flex flex-column">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt={position}
              className="company-logo img-fluid mb-3"
              style={{
                cursor: "pointer",
                maxHeight: "100px",
                objectFit: "contain",
              }}
            />
          </a>

          <h5 className="card-title text-success">{position}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{location}</h6>
          <p className="card-text">{duration}</p>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
