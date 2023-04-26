import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Forgot() {
  const [values, setValues] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/forgot", values)
      .then((res) => {
        console.log(res);
        alert("Se envio un correo con el link");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h1>Forgot</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forgot;
