import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export const TableForm = ({
  memberName,
  setMemberName,
  memberRelation,
  setMemberRelation,
  memberBirthDate,
  setMemberBirthDate,
  memberBlood,
  setMemberBlood,
  list,
  setList,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !memberName ||
      !memberRelation ||
      !memberBirthDate ||
      !memberBirthDate
    ) {
      alert("Please fill in all member's information");
    } else {
      const newMember = {
        id: uuidv4(),
        memberName,
        memberRelation,
        memberBirthDate,
        memberBlood,
      };
      setMemberName("");
      setMemberRelation("");
      setMemberBirthDate("");
      setMemberBlood("");
      setList([...list, newMember]);
      setIsEditing(false);
      console.log(list);
    }
  };

  //Edit button
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setMemberName(editingRow.memberName);
    setMemberRelation(editingRow.memberRelation);
    setMemberBirthDate(editingRow.memberBirthDate);
    setMemberBlood(editingRow.memberBlood);
  };

  //Delete button
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="fw-bold fs-3 text-secondary text-decoration-underline mb-3">
          કૌટુંબિક માહિતી (Family information)
        </div>
        <div className="text-danger mb-2 fw-bold">
          " ઘરના અન્ય સભ્યોની માહિતી દર્શાવવા નીચે માંગેલ વિગતો ભરીને નીચેના બટન
          પર ક્લિક કરો. "
        </div>
        <div className="d-flex justify-content-center mb-3">
          <button className="fw-bold btn btn-outline-primary" type="submit">
            {isEditing ? "Edit member's information" : "Add Other Member"}
          </button>
        </div>

        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            સભ્યનું નામ (Name)
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="memberName"
              id="memberName"
              className="form-control bg-primary text-dark bg-opacity-10"
              placeholder="Member's Full Name"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            સબંધ (Relation)
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="memberRelation"
              id="memberRelation"
              className="form-control bg-primary text-dark bg-opacity-10"
              placeholder="Member's Relation"
              value={memberRelation}
              onChange={(e) => setMemberRelation(e.target.value)}
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
              name="memberBirthDate"
              id="memberBirthDate"
              placeholder="Member's Birth Date"
              className="form-control bg-primary text-dark bg-opacity-10"
              value={memberBirthDate}
              onChange={(e) => setMemberBirthDate(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">
            બ્લડ ગ્રુપ પોતાનું / (Blood Group)
          </label>
          <div className="col-sm-10">
            <select
              name="memberBlood"
              id="memberBlood"
              className="form-select bg-primary text-dark bg-opacity-10"
              value={memberBlood}
              onChange={(e) => setMemberBlood(e.target.value)}
            >
              <option>Choose member's blood group</option>
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
      </form>

      {/* Table new members */}
      <div className="table-responsive">
        <table width="100%" className="table mb-4">
          <thead>
            <tr className="bg-warning text-dark bg-opacity-25">
              <td className="fw-bold">પૂરું નામ</td>
              <td className="fw-bold">સબંધ</td>
              <td className="fw-bold">જન્મ તારીખ</td>
              <td className="fw-bold">બ્લડ ગ્રુપ</td>
              <td className="fw-bold">Edit / Delete</td>
            </tr>
          </thead>
          {list.map(
            ({
              id,
              memberName,
              memberRelation,
              memberBirthDate,
              memberBlood,
            }) => (
              <React.Fragment key={id}>
                <tbody>
                  <tr>
                    <td>{memberName}</td>
                    <td>{memberRelation}</td>
                    <td>{memberBirthDate}</td>
                    <td>{memberBlood}</td>
                    <td>
                      <button
                        onClick={() => editRow(id)}
                        className="m-2 btn btn-outline-success"
                      >
                        <AiOutlineEdit className="fs-5" />
                      </button>

                      <button
                        className="m-2 btn btn-outline-danger"
                        onClick={() => deleteRow(id)}
                      >
                        <AiOutlineDelete className="fs-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            )
          )}
        </table>
      </div>
    </>
  );
};
