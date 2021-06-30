import React, {  useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  

  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  
  

  const handleChange = (e) => {
    // obtiene el valor del input
    setTodo(e.target.value);
  };
//   console.log("props" + props);
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
      />
      <button
        className="add-btn"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            completed: false,
          })
        }
      >
        Agregar
      </button>
      <br />
       {/*
      <ul>
        {props.todos.map((item) => {
          return (
           
          );
        })}
      </ul> */}
    </div>
  );
};
// connect para conectar el componente con el store
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
