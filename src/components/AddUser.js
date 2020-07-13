import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from './context/UserState';
import uuid from 'react-uuid';

const AddUser = () => {
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const { name, email, phone } = user;

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
    };
    addUser({ ...user, ...newUser });
    console.log(newUser);
    history.push('/');
  };

  return (
    <div className="my-5 py-4">
      <div className="text-center">
        <h1>Add User</h1>
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

export default AddUser;
