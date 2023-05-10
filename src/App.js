import React, { useRef, useState } from "react";
import "./form.css";
import { UpperHeading } from "./components/UpperHeading";
import { Logo } from "./components/Logo";
import { BranchAddress } from "./components/BranchAddress";
import { FormTitle } from "./components/FormTitle";
import { FormDescription } from "./components/FormDescription";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { TableForm } from "./components/TableForm";
import ReactToPrint from "react-to-print";
import { FormFooter } from "./components/FormFooter";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [busiJob, setBusiJob] = useState("");
  const [resAddress, setResAddress] = useState("");
  const [busiAddress, setBusiAddress] = useState("");
  const [marriageDate, setMarriageDate] = useState("");
  const [otherJob, setOtherJob] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [memberName, setMemberName] = useState("");
  const [memberRelation, setMemberRelation] = useState("");
  const [memberBirthDate, setMemberBirthDate] = useState("");
  const [memberBlood, setMemberBlood] = useState("");
  const [list, setList] = useState([]);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="container mt-3 mb-4 bg-white rounded shadow">
        {showForm ? (
          <>
            <ReactToPrint
              trigger={() => (
                <button className="mb-2 btn btn-success me-md-2 mt-2">
                  Print / Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <div ref={componentRef} className="conatiner p-3">
              <UpperHeading handlePrint={handlePrint} />

              <Logo />

              <BranchAddress />

              <FormTitle />

              <FormDescription />

              <Form
                name={name}
                fathername={fatherName}
                birthDate={birthDate}
                bloodGroup={bloodGroup}
                mobileNumber={mobileNumber}
                whatsAppNumber={whatsAppNumber}
                email={email}
                education={education}
                busiJob={busiJob}
                resAddress={resAddress}
                busiAddress={busiAddress}
                marriageDate={marriageDate}
                otherJob={otherJob}
                hobbies={hobbies}
              />

              <Table list={list} />

              <FormFooter name={name} />
            </div>

            <button
              onClick={() => setShowForm(false)}
              className="fw-bold btn btn-warning mb-2"
            >
              Edit Information
            </button>
          </>
        ) : (
          <>
            {/* name, address, phone no  */}

            <div className="container pt-3 pb-2 justify-content-center">
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  પૂરું નામ (Full Name)
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="form-control bg-primary text-dark bg-opacity-10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  પિતાશ્રી નું નામ (Father's Name)
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    placeholder="Enter your Father's name"
                    className="form-control bg-primary text-dark bg-opacity-10"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  જન્મ તારીખ (Date of birth)
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="birthDate"
                    id="birthDate"
                    placeholder="Date of Birth"
                    className="form-control bg-primary text-dark bg-opacity-10"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  બ્લડ ગ્રુપ પોતાનું / (Blood Group)
                </label>
                <div className="col-sm-10">
                  <select
                    name="bloodGroup"
                    id="bloodGroup"
                    className="form-select bg-primary text-dark bg-opacity-10"
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                  >
                    <option>Choose your blood group</option>
                    <option>A positive (A+)</option>
                    <option>A negative (A-)</option>
                    <option>B positive (B+)</option>
                    <option>B negative (B-)</option>
                    <option>O positive (O+)</option>
                    <option>O negative (O-)</option>
                    <option>AB positive (AB+)</option>
                    <option>AB negative (AB-)</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  મોબાઈલ નંબર (Mobile No.)
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Enter your Mobile Number"
                    className="form-control bg-primary text-dark bg-opacity-10"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  વોટ્સએપ નં. (WhatsApp No.)
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Enter your Mobile Number"
                    className="form-control bg-primary text-dark bg-opacity-10"
                    value={whatsAppNumber}
                    onChange={(e) => setWhatsAppNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="col-sm-2 col-form-label"
                >
                  ઈ-મેઈલ (Email address)
                </label>
                <div className="col-sm-10">
                  <input
                    id="emailId"
                    name="emailId"
                    placeholder="Enter your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control bg-primary text-dark bg-opacity-10"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  શૈક્ષણીક લાયકાત (Education)
                </label>
                <div className="col-sm-10">
                  <input
                    id="education"
                    name="education"
                    placeholder="Enter your education"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    type="text"
                    className="form-control bg-primary text-dark bg-opacity-10"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  લગ્ન તારીખ (Date of marriage)
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={marriageDate}
                    name="marriageDate"
                    id="marriageDate"
                    placeholder="Marriage date"
                    className="form-control bg-primary text-dark bg-opacity-10"
                    onChange={(e) => setMarriageDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  ધંધો / નોકરી (Business / Job)
                </label>
                <div className="col-sm-10">
                  <textarea
                    name="busiJob"
                    value={busiJob}
                    onChange={(e) => setBusiJob(e.target.value)}
                    className="form-control bg-primary text-dark bg-opacity-10"
                    id="busiJob"
                    rows={1}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  રહેણાંક નું પુરૂ સરનામું (Full residential address)
                </label>
                <div className="col-sm-10">
                  <textarea
                    name="rAddresse"
                    value={resAddress}
                    onChange={(e) => setResAddress(e.target.value)}
                    className="form-control bg-primary text-dark bg-opacity-10"
                    id="rAddresse"
                    rows={4}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  ધંધો / નોકરી નું સરનામું (Business / Job Address)
                </label>
                <div className="col-sm-10">
                  <textarea
                    name="bAddresse"
                    value={busiAddress}
                    onChange={(e) => setBusiAddress(e.target.value)}
                    className="form-control bg-primary text-dark bg-opacity-10"
                    id="bAddresse"
                    rows={4}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  શોખનાં વિષયો (Hobby topics)
                </label>
                <div className="col-sm-10">
                  <textarea
                    value={hobbies}
                    name="hobbies"
                    onChange={(e) => setHobbies(e.target.value)}
                    className="form-control bg-primary text-dark bg-opacity-10"
                    id="hobbies"
                    rows={2}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">
                  અન્ય સંસ્થામાં જવાબદારી (Responsibility in another
                  organization)
                </label>
                <div className="col-sm-10">
                  <textarea
                    value={otherJob}
                    name="bAddresse"
                    onChange={(e) => setOtherJob(e.target.value)}
                    className="form-control bg-primary text-dark bg-opacity-10"
                    id="bAddresse"
                    rows={4}
                  />
                </div>
              </div>

              <hr className="border border-primary border-2 opacity-50" />

              {/* This is our table form */}
              <article>
                <TableForm
                  memberName={memberName}
                  setMemberName={setMemberName}
                  memberRelation={memberRelation}
                  setMemberRelation={setMemberRelation}
                  memberBirthDate={memberBirthDate}
                  setMemberBirthDate={setMemberBirthDate}
                  memberBlood={memberBlood}
                  setMemberBlood={setMemberBlood}
                  list={list}
                  setList={setList}
                />
              </article>
              {/* This is our table form */}

              <div className="mt-2">
                <p className="fw-bold">સભ્ય બનનારનો સંકલ્પ</p>
                <p className="fw-bold">
                  <span className="ms-5">
                    હું ભારત વિકાસ પરિષદ પરિવારના સભ્યપદ ની અંદર સંસ્થાની નીતિ
                    નિયમો અને માર્યાદાઓનું પાલન કરીશ, ભારતીય સંસ્કૃતિના આદર્શમાં
                    હું અતુટ શ્રધ્ધા રાખીશ. ભારતની રાષ્ટ્રીય એકતા, સર્વધર્મ
                    સમભાવ અને વિશ્વબંધુત્વમાં મારી નિષ્ઠા છે અને હર હંમેશ રહેશે.
                    મારો સંકલ્પ છે અને સંકલ્પ કરૂ છું કે મારાથી શક્ય યથાશક્તિ
                    ભારતના સર્વાંગી વિકાસમાં હું હંમેશા તત્પર રહીશ અને ભારતીય
                    જન-જીવનના વિકાસમાં મારું યોગદાન આપવા સદૈવ તત્પર રહીશ.
                  </span>
                </p>
              </div>

              <div className="d-flex mb-3 form-check justify-content-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label ms-3"
                  htmlFor="exampleCheck1"
                >
                  હું ભારત વિકાસ પરિષદ રણછોડનગર શાખામાં રાજી-ખુશીથી જોડાઊ છું.
                </label>
              </div>

              <div className="d-grid">
                <button
                  onClick={() => setShowForm(true)}
                  className="fw-bold btn btn-primary py-3 m-2"
                >
                  Preview Form
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default App;
