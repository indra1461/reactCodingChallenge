import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const previous = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const next = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Challenge 11 - Pagination</h2>
      <center>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={previous} disabled={currentPage === 1}>
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button key={page} onClick={() => setCurrentPage(page)}>
                {page}
              </button>
            ),
          )}

          <button onClick={next} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </center>
    </div>
  );
};

export default Pagination;
