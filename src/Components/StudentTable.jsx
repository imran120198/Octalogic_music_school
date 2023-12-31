import React from "react";
import { courses } from "../../db.json";

const StudentTable = ({ stdshow }) => {
  const tableHeader = [
    { title: "Reg. No" },
    { title: "F. Name" },
    { title: "L. Name" },
    { title: "# Course" },
    { title: "Total Fees" },
    { title: "Reg.Date" },
  ];

  const EntriesToShow = stdshow ? courses.length : 5;

  return (
    <div className="flex flex-col p-2 bg-white">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
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
                {courses.slice(0, EntriesToShow).map((el, i) => (
                  <tr key={i} className="border-b border-stone-300">
                    <td className="whitespace-nowrap px-6 py-4">
                      {el.Regno}
                    </td>
                    <td className="whitespace-nowrap px-6">{el.Fname}</td>
                    <td className="whitespace-nowrap px-6">{el.Lname}</td>
                    <td className="whitespace-nowrap px-6">{el.course}</td>
                    <td className="whitespace-nowrap px-6">{el.totalfee}</td>
                    <td className="whitespace-nowrap px-6">
                      {el.regdate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
