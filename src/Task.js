import { useState } from "react";

export const Task = (props) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedTask = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <>
      <div style={viewMode} className="task">
        <h1>{props.taskName}</h1>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
        <button onClick={handleEditing}>Edit task</button>
      </div>

      <input
        style={editMode}
        value={props.taskName}
        onChange={(e) => {
          props.editTask(e.target.value, props.id);
        }}
        onKeyDown={handleUpdatedTask}
      />
    </>
  );
};
