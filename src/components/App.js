import MyTaskList from "./components/MyTaskList";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  const newTaskList = (newtask) => {
    setTaskList([newtask, ...taskList]);
  };

  return (
    <div id="App">
      <MyTaskList newTaskList={newTaskList} />
      {taskList.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}
export default App;
