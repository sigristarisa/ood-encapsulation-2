class TaskList {

  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks.push(task)
  }

  getOverdueTasks() {
    const today = new Date()
    const overdueTasks = []
    for (const task of this.tasks) {
      if (task.dateDue && task.status === "incomplete" && today > task.dateDue) overdueTasks.push(task)
        }
        return overdueTasks
      }
    }

module.exports = TaskList