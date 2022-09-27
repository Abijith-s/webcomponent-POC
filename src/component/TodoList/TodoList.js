import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, getTodo } from "../../apiManager/services/todoServices";
import "../../App.css";

function TodoList() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.user.todo);
  const handleEdit = ()=>{
    dispatch(editTodo(todo));
  };
  const handleDelete = (Id) =>{
    dispatch(deleteTodo({Id:Id}))
  }
  useEffect(()=>{
    dispatch(getTodo());
  },[dispatch]);
  return (
    <div className="todos">
      {todo?.map((e) => {
        return(
            <div className="todo">
            <div className="left">
              <input type="checkbox" name="" id="" />
              <p>{e.todo}</p>
            </div>
            <div className="right">
              <i className="fas fa-edit" onClick={handleEdit}></i>
              <i className="fas fa-times" onClick={()=>handleDelete(e._id)}></i>

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
