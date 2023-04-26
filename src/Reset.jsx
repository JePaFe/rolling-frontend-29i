import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function Reset() {
  const [values, setValues] = useState({
    password: "",
    password_confirmation: "",
  });

  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = searchParams.get("token");

    axios
      .post(`http://localhost:3000/api/reset/${id}/${token}`, values)
      .then((res) => {
        console.log(res);
        alert("Contraseña modificada");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.error || "Server error");
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
      <h1>Reset</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            minLength={5}
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password_confirmation" className="form-label">
            Password confirmation
          </label>
          <input
            type="password"
            className="form-control"
            id="password_confirmation"
            name="password_confirmation"
            value={values.password_confirmation}
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

export default Reset;
