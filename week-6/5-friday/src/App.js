import "./App.css";
import Header from "./components/Header";
import TaskField from "./components/TaskField";
// import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container">
      <Header />
      <TaskField />
      {/* <TaskList/> */}
    </div>
  );
}

export default App;
