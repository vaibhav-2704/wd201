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
        const currentDate = new Date();
        return all.filter((item) => new Date(item.dueDate).toDateString() === currentDate.toDateString());
    };

    const dueLater = () => {
        const currentDate = new Date();
        return all.filter((item) => new Date(item.dueDate) > currentDate);
    };

    const toDisplayableList = (list) => {
        const dsl = [];
        list.forEach((element) => {
            const dueDate = new Date(element.dueDate).toLocaleDateString("en-CA");

            if (dueDate === today) {
                // your existing logic
            } else {
                // your existing logic
            }
        });

        // your existing loop logic

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

module.exports = todoList;
