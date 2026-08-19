import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";

const DebounceSearch = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //debounce logic
  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounce(search);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  //fetch users
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

  const filteredUser = users.filter(
    (item) =>
      item.firstName.toLowerCase().includes(debounce.toLowerCase()) ||
      item.email.toLowerCase().includes(debounce.toLowerCase()),
  );
  return (
    <div>
      <h2>Challenge 12 - Debounce Search</h2>

      <input
        type="text"
        placeholder="search Name and email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <center>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredUser.map((user) => (
              <tr key={user.id}>
                <td> {user.firstName} </td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
      {}
    </div>
  );
};

export default DebounceSearch;
