const todoList = require('../todo');
let todos
todos=todoList();

describe("Todolist", () => {
    test("To add new todo list:", () => {
        const todoItemsCount = todos.all.length;
        todos.add(
            {
                title: "Todo Test",
                completed: false,
                dueDate: 2023-12-18
            }
        );
        expect(todos.all.length).toBe(todoItemsCount + 1);
    });
    test("marking the todo as completed", () => {
        expect(todos.all[0].completed).toBe(false);
        todos.markAsComplete(0);
        expect(todos.all[0].completed).toBe(true);
    });
    test('items overdue', () => {
    const dateToday = new Date();
    const formattedDate = (d) => d.toISOString().split('T')[0]
    const yesterday = formattedDate(new Date(dateToday.setDate(dateToday.getDate() - 1)));
    const od = {title: 'practise Coding', dueDate: yesterday,completed:false};
    const overdueic=todos.overdue().length;
    todos.add(od);
    const overdueItems=todos.overdue();
    expect(overdueItems.length).toBe(overdueic+1);
  });

  test('Items are duetoday', () => {
    const dateToday = new Date();
    const formattedDate = (d) => d.toISOString().split('T')[0];
    const today = formattedDate(dateToday);
    const todayAdd={title: 'Do clothes',dueDate: today,completed:false};
    const duetic=todos.dueToday().length;
    todos.add(todayAdd);
    const todayItems = todos.dueToday();
    expect(todayItems.length).toBe(duetic+1);
  });

  test('Items are duelater', () => {
    const dateToday = new Date();
    const formattedDate = (d) => d.toISOString().split('T')[0];
    const tomorrow = formattedDate(new Date(dateToday.setDate(dateToday.getDate() + 1)));
    const dl={title:'Read a book',dueDate:tomorrow,completed:false};
    const duelaterTodoItemsCount =todos.dueLater().length
    todos.add(dl);
    expect(todos.dueLater().length).toBe(duelaterTodoItemsCount+1);
  });
});