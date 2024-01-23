import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../context/ProductContextProvider";

const TodoItem = ({ todoName, todoSurname, todoPhone, todoImg, id }) => {
  const { deleteTodo } = useContext(productContext);
  return (
    <div className="edit_product_container">
      <img src={todoImg} alt="" />
      <h3>{todoName}</h3>
      <h3>{todoSurname}</h3>
      <h4>{todoPhone}</h4>
      <Button onClick={() => deleteTodo(id)} variant="contained">
        Delete
      </Button>
      <Link to={`/edit/${id}`}>
        <Button variant="contained">Edit</Button>
      </Link>
      <Link to={`/details/${id}`}>
        <Button variant="contained">Details</Button>
      </Link>
    </div>
  );
};

export default TodoItem;
