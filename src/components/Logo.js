import React from "react";

export const Logo = () => {
  return (
    <>
      <div className="logo">
        <ul className="d-flex justify-content-around list-inline list-unstyled align-items-center mb-0">
          <li className="fs-5 fw-bold text-danger">ભારત વિકાસ પરિષદ</li>
          <img className="img" src="./images/logo1.png" alt="" />
          <li className="fs-5 fw-bold text-danger">Bharat Vikas Parishad</li>
        </ul>
      </div>
      <hr className="border border-secondary border-2 opacity-50 my-2" />
    </>
  );
};
