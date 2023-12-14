/* eslint-disable no-undef */
const todoList = () => {
    const all = [];
    const add = (todoItem) => {
        all.push(todoItem);
    };
    const markAsComplete = (index) => {
        if (index >= 0 && index < all.length) {
            all[index].completed = true;
        } else {
            throw new Error('Invalid index');
        }
    };

    const overdue = () => {
        return all.filter(
            (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
        );
    };

    const dueToday = () => {
        return all.filter(
            (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
        );
    };

    const dueLater = () => {
        return all.filter(
            (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
        );
    };

    const toDisplayableList = (list) => {
        const dsl = [];
        list.forEach((element) => {
            if (element.dueDate === today) {
                if (element.completed === true) {
                    const a = "[x] " + element.title;
                    dsl.push(a);
                } else {
                    const a = "[ ] " + element.title;
                    dsl.push(a);
                }
            } else {
                if (element.completed === true) {
                    const a = "[x] " + element.title + " " + element.dueDate;
                    dsl.push(a);
                } else {
                    const a = "[ ] " + element.title + " " + element.dueDate;
                    dsl.push(a);
                }
            }
        });
        let g = "";
        for (let i = 0; i < dsl.length; i++) {
            // eslint-disable-next-line no-undef
            obj = dsl[i];
            if (i === 0) {
                // eslint-disable-next-line no-undef
                g = g + obj;
            } else {
                // eslint-disable-next-line no-undef
                g = g + "\n" + obj;
            }
        }
        return g;
    };

    return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
        toDisplayableList,
    };
};

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")