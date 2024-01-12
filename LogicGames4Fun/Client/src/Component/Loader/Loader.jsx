import React from "react";

export const Loader = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="spinner-border" role="status">
        <span className="fs-1 sr-only"/>
      </div>
    </div>
  );
};
