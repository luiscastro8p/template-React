import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from '../../actions/auth';

const ResetPasswordConfirm = ({ reset_password_confirm, match }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;
    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <div className="container mt-5">
      <h1>Recuperación de contraseña</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Nueva Contraseña"
            name="new_password"
            value={new_password}
            onChange={(e) => onChange(e)}
            required
          ></input>

          <input
            className="form-control"
            type="password"
            placeholder="Confirmar Nueva Contraseña"
            name="re_new_password"
            value={re_new_password}
            onChange={(e) => onChange(e)}
            required
          ></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Cambiar contraseña
        </button>
      </form>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
