import React from 'react'

export const Table = ({list}) => {
  return (
    <>
    <table width="100%" className="table mb-4">
        <thead>
          <tr className="bg-warning text-dark bg-opacity-25">
            <td className="fw-bold">નામ</td>
            <td className="fw-bold">સબંધ</td>
            <td className="fw-bold">જન્મ તારીખ</td>
            <td className="fw-bold">બ્લડ ગ્રુપ</td>
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
                </tr>
              </tbody>
            </React.Fragment>
          )
        )}
      </table>
    </>
  )
}
