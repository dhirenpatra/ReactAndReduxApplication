import React from "react";

const List = (props) => (
  <ul>
    {props.tasks.map((task) => (
      <li key={task.id}>
        <span
          onClick={() => props.toggle && props.toggle(task.id)}
          style={{
            textDecoration: task.complete ? "line-through" : "none",
          }}
        >
          {" "}
          {task.name}{" "}
        </span>
        <button onClick={() => props.remove(task)}> (X) </button>
      </li>
    ))}
  </ul>
);

export default List;
