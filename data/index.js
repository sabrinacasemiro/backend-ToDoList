import generateId from "../modules/generateId/index.js";

const data = {
  toDoList: [],
  set: (newData) => {
    data.toDoList = [...newData]
  },

  creat: (task) => {
    const list = data.read();
    const id = generateId(40);

    data.set([...list, { _id: id, ...task }]);
  },

  read: () => {
    return [...data.toDoList]
  },

  update: (id, newData) => {
    const list = data.read();

    const newList = list.map((item) => {
      const data = { ...item, ...newData };
      if (item._id === id) return data;
      if (item._id !== id) return item;
    });

    data.set(newList);
  },

  delete: (id) => {
    const list = data.read();
    const newToDoList = list.filter((item) => item._id !== id);

    console.log('newToDoList', newToDoList)

    data.set(newToDoList);
  },
};

export default data;