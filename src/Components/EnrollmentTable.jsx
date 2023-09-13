import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enrollments } from "../../db.json";

const EnrollmentTable = ({ showAll }) => {
  const EntriesToShow = showAll ? enrollments.length : 5;
  const tableHeader = [
    { title: "Enr.No" },
    { title: "S.Name" },
    { title: "C.Name" },
    { title: "Fees" },
    { title: "Enr.Date" },
  ];

  console.log(enrollments);
  return (
    <div>
      <div>
        <table className="min-w-full h-auto text-left text-sm font-light">
          <thead className="border-b  border-stone-300">
            <tr>
              {tableHeader.map((el, id) => (
                <th key={id} scope="col" className="px-6 py-4 table-header">
                  {el.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.slice(0, EntriesToShow).map((el, i) => (
              <tr
                key={i}
                className="border-b border-stone-300"
                style={{ fontSize: "16px" }}
              >
                <td className="whitespace-nowrap px-6">{el.Enrno}</td>
                <td className="whitespace-nowrap px-6">{el.Sname}</td>
                <td className="whitespace-nowrap px-6">{el.Cname}</td>
                <td className="whitespace-nowrap px-6">{el.fees}</td>
                <td className="whitespace-nowrap px-6">{el.Enrdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollmentTable;
