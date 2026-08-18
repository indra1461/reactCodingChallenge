import React, { useState } from "react";

const UserForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = (e) => {
    e.preventDefault();
    if (!form.name) {
      setError("Name is required");
      return;
    }
    if (!form.email) {
      setError("Email is required");
      return;
    }
    if (!form.phone) {
      setError("Phone is required");
      return;
    }
    const newUser = { id: Date.now(), ...form };
    setUsers((prev) => [...prev, newUser]);
    setForm({ name: "", email: "", phone: "" });
    setError("");
  };
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };
  return (
    <div>
      <h2>Challenge 09 - User Form</h2>

      <form onSubmit={addUser}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <br />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <br />
        <label htmlFor="Phone">Phone</label>
        <input
          type="text"
          placeholder="Enter Phone number"
          maxLength={10}
          value={form.phone}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, phone: e.target.value }))
          }
        />
        <br />
        <button type="submit">Submit</button>
        {error && <p>{error}</p>}
      </form>
      <center>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default UserForm;
