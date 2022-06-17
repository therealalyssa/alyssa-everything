import { useState } from "react";
import TaskList from "./TaskList";
function TaskField() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  //   const [content, setContent] = useState();
  //   if (taskArray.length > 0) {
  //     setContent(`You have ${taskArray.length} task to do.⭐`);
  //   } else {
  //     setContent(`Please enter a task😁`);
  //   }
  const handleChange = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };
  const handleClick = () => {
    taskArray.push(task);
    console.log(taskArray);
    setTaskArray([...taskArray]);
    // console.log(task);
    // setTaskArray(taskArray.concat([task]));
    // setTaskArray([...taskArray, task]);
  };
  // { condition ? (if condition is true) : (if condition is false) }
  const deleteTaskArray = (index) => {
    console.log(index);
    taskArray.splice(index, 1);
    setTaskArray([...taskArray]);
  };
  return (
    <div className="task-field">
      {taskArray.length > 0 ? (
        <h2>You have {taskArray.length} task to do.⭐</h2>
      ) : (
        <h2>Please enter a task😁</h2>
      )}
      {/* <h2>{content}</h2> */}
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Save your task</button>
      <TaskList showTasks={taskArray} deleteTask={deleteTaskArray} />
    </div>
  );
}
export default TaskField;
