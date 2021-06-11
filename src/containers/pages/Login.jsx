import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated,history }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    history.push('/admin/home');
  /*   login(email, password); */
  };

  if (isAuthenticated) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <div className='container mt-5'>
      <h1>Inicio de sesión</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            className='form-control'
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          ></input>
          <input
            className='form-control'
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            required
          ></input>
        </div>
        <button
          className='btn btn-primary'
          type='submit'
         
        >
          Iniciar
        </button>
      </form>
      <p className='mt-3'>
        No tienes cuenta? <Link to='/signup'>Registrarse</Link>
      </p>
      <p className='mt-3'>
        Olvidaste tu contraseña?{' '}
        <Link to='/reset-password'>Recuperar contraseña</Link>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
