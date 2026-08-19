import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiFetchRetry = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Challenge 13 - Api Fetch Users Retry</h2>

      {loading && <p>Loading...</p>}
      {error && (
        <>
          <p>Something went wrong</p>
          <button onClick={fetchUsers}>Retry</button>
        </>
      )}

      {!loading && !error && users.length === 0 && <p>No users found</p>}
      <center>
        <table>
          <thead>
            <th>Full Name </th>
            <th>Email</th>
            <th>Phone</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default ApiFetchRetry;
