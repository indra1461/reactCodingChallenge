import React, { useState } from "react";
const Employees = [
  { id: 1, name: "indrajeet", email: "indrajeet@gmail.com" },
  { id: 2, name: "amarjeet", email: "amar@gmail.com" },
  { id: 3, name: "chanrajet", email: "chandrajeet@gmail.com" },
  { id: 4, name: "pooja", email: "pooja@gmail.com" },
  { id: 5, name: "tanvish", email: "tanvish@gmail.com" },
];

const TableSorting = () => {
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };
  const sortedEmployees = [...Employees].sort((a, b) =>
    sortOrder === "asc"
      ? a[sortField].localeCompare(b[sortField])
      : b[sortField].localeCompare(a[sortField]),
  );

  return (
    <div>
      <h2>Challenge 10 - Table Sorting</h2>
      <center>
        <table>
          <thead>
            <tr>
              <td onClick={() => handleSort("name")}>
                Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
              </td>
              <td onClick={() => handleSort("email")}>
                Email{" "}
                {sortField === "email" && (sortOrder === "asc" ? "↑" : "↓")}
              </td>
            </tr>
          </thead>
          <tbody>
            {sortedEmployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default TableSorting;
