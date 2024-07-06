import { Input } from "antd";
import { Button } from "antd";
import { Checkbox } from "antd";
import { Flex } from "antd";

const testTodos = [
  { id: 1, description: "Learn react", checked: true },
  { id: 2, description: "Learn redux", checked: false },
];

function TodoList() {
  return (
    <div>
      <div>
        <Flex>
          {" "}
          <Input size="middle" />
          <Button type="primary">Add</Button>
        </Flex>
        <ul>
          {testTodos.map((todo) => (
            <li style={{ listStyleType: "none" }} key={todo.id}>
              <Checkbox>
                <span
                  style={todo.checked ? { textDecoration: "line-through" } : {}}
                >
                  {todo.description}
                </span>{" "}
              </Checkbox>
            </li>
          ))}
        </ul>
      </div>
      <Button type="primary" danger>
        Delete All
      </Button>
    </div>
  );
}

export default TodoList;
