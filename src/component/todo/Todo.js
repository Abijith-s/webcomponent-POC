import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodo } from "../../apiManager/services/todoServices";

function Todo() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.user.todo);
  const [todo, setTodo] = useState("");
  const handleSubmit = () => {
    dispatch(addTodo({ todo: todo },(err,data)=>{
      dispatch(getTodo());
    }));
  };

  return (
    <div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i className="fas fa-plus" onClick={handleSubmit}></i>
      </div>
    </div>
  );
}

export default Todo;
