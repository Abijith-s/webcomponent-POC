import React from 'react';
import Todo from './todo/Todo';
import TodoList from './TodoList/TodoList';
import '../App.css';

function Home() {
  return (
    <div >
        <div className='mainHeading'>
            <Todo />
            <TodoList/>
        </div>
    </div>
  )
};

export default Home;