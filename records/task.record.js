// const {v4: uuid} = require('uuid');
// const {pool} = require('../utils/db');

// class TaskRecord {
//   constructor(obj) {
//     // if (!obj.todo || obj.todo.length < 3 || obj.todo.length > 50) {
//     //   throw new Error(
//     //     'Todo must have at least 3 characters and less than 50 characters'
//     //   );
//     // }

//     this.id = obj.id;
//     this.todo = obj.todo;
//   }

//   static async listAll() {
//     const [results] = await pool.execute('SELECT * FROM `tasks`');
//     return results.map((obj) => new TaskRecord(obj));
//   }

//   static async getOne(id) {
//     const [results] = await pool.execute(
//       'SELECT * FROM `tasks` WHERE `id` = :id',
//       {
//         id,
//       }
//     );
//     return results.length === 0 ? null : new TaskRecord(results[0]);
//   }

//   async insert() {
//     if (!this.id) {
//       this.id = uuid();
//     }

//     await pool.execute('INSERT INTO `tasks`(`task_id`,`task_title`, `task_description`) VALUES(:id, :title, :description)', {
//       id: this.id,
//       todo: this.todo,
//     });

//     return this.id;
//   }

//   async update(id, todo) {
//     await pool.execute('UPDATE `todos` SET `todo` = :todo WHERE `id` = :id', {
//       id,
//       todo,
//     });
//   }

//   async delete() {
//     await pool.execute('DELETE FROM `todos` WHERE `id` = :id', {
//       id: this.id,
//     });
//   }
// }

// module.exports = {
//   TaskRecord,
// };