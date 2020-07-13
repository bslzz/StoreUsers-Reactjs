import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './context/UserState';

const UserList = () => {
  const { users, deleteUser } = useContext(GlobalContext);
  console.log(users);

  return (
    <table className="table table-striped table-hover mx-auto shadow p-3 mb-5 rounded">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          <>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="d-flex">
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn btn-warning btn-sm mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </>
        ) : (
          <h4>No User</h4>
        )}
      </tbody>
    </table>
  );
};

export default UserList;
