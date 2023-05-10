import React from "react";

export const Form = ({
  name,
  fathername,
  birthDate,
  bloodGroup,
  mobileNumber,
  whatsAppNumber,
  email,
  education,
  busiJob,
  resAddress,
  busiAddress,
  marriageDate,
  hobbies,
  otherJob,
}) => {
  return (
    <>
      <div className="mb-3">
        <div className="d-flex justify-content-between mb-2">
          <div>
            <label className="fw-bold text-danger">૧. પૂરું નામ :-</label>
            <label className="fw-bold ps-2">{name}</label>
          </div>
          <div>
            <label className="fw-bold text-danger">
              ૨. પિતાશ્રી નું નામ :-
            </label>
            <label className="fw-bold ps-2">{fathername}</label>
          </div>
          <div>
            <label className="fw-bold text-danger">૩. જન્મ તારીખ :-</label>
            <label className="fw-bold ps-2">{birthDate}</label>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <div>
            <label className="fw-bold text-danger">૪. ઈ-મેઈલ :-</label>
            <label className="fw-bold ps-2">{email}</label>
          </div>
          <div>
            <label className="fw-bold text-danger">
              ૫. બ્લડ ગ્રુપ (પોતાનું) :-
            </label>
            <label className="fw-bold ps-2">{bloodGroup}</label>
          </div>
          <div>
            <label className="fw-bold text-danger">૬. લગ્ન તારીખ :-</label>
            <label className="fw-bold ps-2">{marriageDate}</label>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <div>
            <label className="fw-bold text-danger">૭. મોબાઈલ નં. :-</label>
            <label className="fw-bold ps-2">{mobileNumber}</label>
          </div>
          <div>
            <label className="fw-bold text-danger">૮. વોટ્સએપ નં. :-</label>
            <label className="fw-bold ps-2">{whatsAppNumber}</label>
          </div>
          <div>
            <label className="fw-bold text-danger">૯. શોખના વિષયો :-</label>
            <label className="fw-bold ps-2">{hobbies}</label>
          </div>
        </div>

        <div className="d-flex justify-content-start mb-2">
          <div>
            <label className="fw-bold text-danger">
              ૧૦. શૈક્ષણિક લાયકાત :-
            </label>
            <label className="fw-bold ps-2">{education}</label>
          </div>
        </div>

        <div className="d-flex justify-content-start mb-2">
          <div>
            <label className="fw-bold text-danger">૧૧. ધંધો / નોકરી :-</label>
            <label className="fw-bold ps-2">{busiJob}</label>
          </div>
        </div>

        <div className="d-flex justify-content-start mb-2">
          <div>
            <label className="fw-bold text-danger">
              ૧૨. રહેણાંકનું પુરુ સરનામું :-
            </label>
          </div>
          <div>
            <label className="fw-bold ps-2">{resAddress}</label>
          </div>
        </div>

        <div className="d-flex mb-2">
          <div>
            <label className="fw-bold text-danger">
              ૧૩. ધંધો / નોકરીનું સરનામું :-
            </label>
          </div>
          <div>
            <label className="fw-bold ps-2">{busiAddress}</label>
          </div>
        </div>

        <div className="d-flex justify-content-between mb-2">
          <div>
            <label className="fw-bold text-danger">
              ૧૪. અન્ય સંસ્થામાં જવાબદારી :-
            </label>
            <label className="fw-bold ps-2">{otherJob}</label>
          </div>
        </div>
      </div>
    </>
  );
};
