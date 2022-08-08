import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

describe("TaskList component", () => {
  test("renders a new lisr of tasks passed into it via props", () => {
    const tasks = ["task1", "Another task", "a third Task"];
    render(<TaskList tasksArray={tasks} />);
    const listOfTasks = screen.getAllByRole("heading");
    listOfTasks.forEacg((task, index) => {
      expect(task.textContent).toContain(tasks[index]);
    });
  });
});
