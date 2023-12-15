const todoList = require("../todo"); // Replace this with the actual path to your todo module

describe("TodoList Test Suite", () => {
  let todo;

  beforeEach(() => {
    todo = todoList();
    todo.add({ title: "Clean room", dueDate: "2023-12-13" });
  });

  test("Creating a new todo", () => {
    todo.add({ title: "Buy groceries", dueDate: "2023-12-15" });
    expect(todo.all.length).toBe(2);
    expect(todo.all[0]).toEqual({ title: "Buy groceries", dueDate: "2023-12-15" });
  });

  test("Marking a todo as completed", () => {
    todo.add({ title: "Finish report", dueDate: "2023-12-14", completed: false });
    todo.markAsComplete(1);
    expect(todo.all[1].completed).toBe(true);
  });

  test("Retrieval of overdue items", () => {
    todo.add({ title: "Pay bills", dueDate: "2023-12-12", completed: false });
    const overdueItems = todo.overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0]).toEqual({ title: "Pay bills", dueDate: "2023-12-12", completed: false });
  });

  test("Retrieval of due today items", () => {
    const dueTodayItems = todo.dueToday();

    // Commented out original approach for checking item presence
    // expect(dueTodayItems).toContainEqual({ title: "Clean room", dueDate: "2023-12-13", completed: false });

    // Uncommented alternate approach for validating length and individual properties
    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].title).toBe("Clean room");
    expect(dueTodayItems[0].dueDate).toBe("2023-12-13");
    expect(dueTodayItems[0].completed).toBe(false);
  });

  test("Retrieval of due later items", () => {
    todo.add({ title: "Call dentist", dueDate: "2023-12-14", completed: false });
    const dueLaterItems = todo.dueLater();
    expect(dueLaterItems.length).toBe(2);
    expect(dueLaterItems[0]).toEqual({ title: "Call dentist", dueDate: "2023-12-14", completed: false });
  });
});
