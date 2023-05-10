import React from "react";

export const FormFooter = ({ name }) => {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <p className="mb-0 fw-bold fs-3 text-primary text-decoration-underline">
            -:: સભ્ય બનનારનો સંકલ્પ ::-
          </p>
        </div>
        <div className="fs-6">
          <div className="fw-bold lh-base">
            <div className="ms-5">
              <span>હું</span>
              <span className="fs-4 text-danger mx-4 text-decoration-underline">
                {name}
              </span>
              ભારત વિકાસ પરિષદ પરિવારના સભ્યપદ ની અંદર સંસ્થાની નીતિ નિયમો અને
              માર્યાદાઓનું પાલન કરીશ, ભારતીય સંસ્કૃતિના આદર્શમાં હું અતુટ
              શ્રધ્ધા રાખીશ. ભારતની રાષ્ટ્રીય એકતા, સર્વધર્મ સમભાવ અને
              વિશ્વબંધુત્વમાં મારી નિષ્ઠા છે અને હર હંમેશ રહેશે.
              <br />
              <span className="ms-5">
                મારો સંકલ્પ છે અને સંકલ્પ કરૂ છું કે મારાથી શક્ય યથાશક્તિ ભારતના
                સર્વાંગી વિકાસમાં હું હંમેશા તત્પર રહીશ અને ભારતીય જન-જીવનના
                વિકાસમાં મારું યોગદાન આપવા સદૈવ તત્પર રહીશ.
              </span>
            </div>
          </div>

          <div className="d-flex mb-3 form-check justify-content-center">
            <p
              className="fw-bold form-check-label ms-3"
              htmlFor="exampleCheck1"
            >
              <span>હું</span>
              <span className="fs-4 text-danger mx-4 text-decoration-underline fw-bold">
                {name}
              </span>
              ભારત વિકાસ પરિષદ રણછોડનગર શાખામાં રાજી-ખુશીથી જોડાઊ છું.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
