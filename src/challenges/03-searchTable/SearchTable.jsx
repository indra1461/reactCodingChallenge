import React, { useState } from "react";

const users = [
  { id: 1, name: "Rahul", email: "rahul@gmail.com" },
  { id: 2, name: "Indra", email: "indra@gmail.com" },
  { id: 3, name: "Tanvish", email: "tanvish@gmail.com" },
  { id: 4, name: "Amit", email: "amit@gmail.com" },
  { id: 5, name: "Priya", email: "priya@gmail.com" },
];

const SearchTable = () => {
  const [value, setValue] = useState("");
  const filteredSearch = users.filter(
    (item) =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.email.toLowerCase().includes(value.toLowerCase()),
  );
  return (
    <div>
      <h2>Search Table </h2>
      <input
        type="text"
        placeholder="search Users by name or email..."
        style={{ width: "200px" }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <center>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredSearch.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default SearchTable;
