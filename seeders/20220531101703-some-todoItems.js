"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          todoListId: 1,
          task: "Prepare for a meeting",
          deadline: "Monday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoListId: 2,
          task: "Clean the kitchen",
          deadline: "Sunday",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
