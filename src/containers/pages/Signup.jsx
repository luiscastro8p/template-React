import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from '../../actions/auth';

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nombre: "",
  });
  const { email, password, nombre } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup(email, password, nombre);
    setAccountCreated(true);
  };

  if (isAuthenticated) {
    return <Redirect to="/"></Redirect>;
  }

  if (accountCreated) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div className="container mt-5">
      <h1>Registro de usuario</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          ></input>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
          ></input>
          <input
            className="form-control"
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={password}
            onChange={(e) => onChange(e)}
            required
          ></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Registrar
        </button>
      </form>
      <p className="mt-3">
        Iniciar sesión <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
