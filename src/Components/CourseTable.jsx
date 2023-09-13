import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../Redux/AppReducer/action";

const tableHeader = [
  { title: "Name" },
  { title: "Description" },
  { title: "Instructor" },
  { title: "Instrument" },
  { title: "Day of Week" },
  { title: "# of Students" },
  { title: "Price" },
  { title: "Status" },
  { title: "Actions" },
];

export const CourseTable = () => {

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full h-auto text-left text-sm font-light" style={{marginLeft:"26px"}}>
              <thead className="border-b  border-stone-300">
                <tr>
                  {tableHeader.map((el, id) => (
                    <th key={id} scope="col" className="px-6 py-4 table-header">
                      {el.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
