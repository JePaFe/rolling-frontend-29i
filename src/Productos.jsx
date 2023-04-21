import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Productos() {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/productos", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err, err.response.data.error);
        navigate("/");
      });
  }, []);

  return (
    <>
      <h1>Productos</h1>
    </>
  );
}

export default Productos;
