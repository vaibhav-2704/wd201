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
        const currentDate = new Date();
        return all.filter((item) => new Date(item.dueDate) < currentDate);
    };

    const dueToday = () => {
        return all.filter(
            (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
        );
    };
    
    const dueLater = () => {
        const currentDate = new Date().toDateString();
        return all.filter((item) => new Date(item.dueDate).toDateString() > currentDate);
    };

    const toDisplayableList = (list) => {
        const today = new Date().toDateString();
        const dsl = [];

        list.forEach((element) => {
            const status = element.completed ? "[x]" : "[ ]";
            const formattedDate = element.dueDate === today ? "" : ` ${element.dueDate}`;
            const displayableItem = `${status} ${element.title}${formattedDate}`;
            dsl.push(displayableItem);
        });

        return dsl.join('\n');
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

module.exports = todoList;
