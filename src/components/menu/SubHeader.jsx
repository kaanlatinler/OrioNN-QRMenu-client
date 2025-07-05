import React from "react";

const SubHeader = ({ title }) => {
  return (
    <div className="col-lg-12 mt-3">
      <div className="card banner-sm d-block">
        <div className="card-body banner-body text-center text-uppercase text-bold">
          <span className="banner-text">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
