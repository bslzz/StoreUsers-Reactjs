import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from './context/UserState';

const EditUser = (props) => {
  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserId = props.match.params.id;

  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
  });
  const { name, email, phone } = selectedUser;

  useEffect(() => {
    const userId = currentUserId;
    console.log(userId);
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const changeHandler = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    editUser(selectedUser);

    history.push('/');
  };

  return (
    <div className="my-5 py-4">
      <div className="text-center">
        <h1>Edit User</h1>
        <hr className="mx-auto w-25" />
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-9 col-md-6 col-lg-6 mx-auto">
            <form onSubmit={submit}>
              <div className="mb-3">
                <label forhtml="exampleText" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleText"
                  name="name"
                  value={name}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-3">
                <label forhtml="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={changeHandler}
                />
              </div>
              <div className="mb-3">
                <label forhtml="exampleText" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleNumber"
                  name="phone"
                  value={phone}
                  onChange={changeHandler}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to="/" className="btn btn-danger ml-2">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
