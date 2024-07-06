import { Tabs } from "antd";

import TodoList from "./components/TodoList";

function TodoTrackerApp() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <h1>Todo Tracker</h1>
      <Tabs
        onChange={onChange}
        type="card"
        items={new Array(2).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
          };
        })}
      />
      <TodoList />
    </div>
  );
}

export default TodoTrackerApp;
