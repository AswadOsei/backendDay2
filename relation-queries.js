const { user, todoItem, todoList } = require("./models");

// async function listsWithUsers() {
//   const lists = await todoList.findAll({
//     include: [{ model: user, attributes: ["name"] }],
//   });
//   return lists.map((list) => list.toJSON());
// }

// listsWithUsers().then((lists) => console.log(lists));

// async function getUsers() {
//   const allUsers = await user.findAll({
//     include: [{ model: todoList, attributes: ["name"] }],
//   });
//   return allUsers.map((user) => user.toJSON());
// }

// getUsers().then((users) => console.log(users));

// async function getUserWithList(id) {
//   const result = await user.findByPk(id, { include: [todoList] });
//   return result.get({ plain: true });
// }

// getUserWithList(1).then((user) => console.log("user by id with lists", user));

//   return dependencies.db.models.user.findByPk(userId, {
//     include: [
//         {
//             model: dependencies.db.models.userGroup,
//             required: false,
//             where: {
//                 Time: null,
//             },

// async function imporantTodos() {
//     const todos = await todoItem.findAll({
//       where: { important: true },
//       include: { model: todoList, attributes: ["name"] }
//     });
//     return todos.map(item => item.get({ plain: true }));
//   }

//   imporantTodos().then(items => console.log("important todoItems", items));

async function fullUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] },
      },
    ],
  });
  return result.get({ plain: true });
}

fullUserById(1).then((user) => console.log("User with tasks", user));

// async function itemsWithTags() {
//     const items = await todoItem.findAll({ include: [tag] });
//     return items.map(item => item.get({ plain: true }));
//   }

//   // itemsWithTags().then(items => console.log("items with tags", items));
