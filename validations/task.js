const { z, string } = require("zod");

const taskSchema = z.object({
    task_title: z.string(),
    task_description: z.string().min(10)
})

module.exports = taskSchema;


