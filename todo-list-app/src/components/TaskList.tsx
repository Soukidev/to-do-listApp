import type React from "react"
import TaskItem from "./TaskItem"
import type { Task } from "../App"

interface TaskListProps {
  tasks: Task[]
  onDeleteTask: (id: string) => void
  onToggleTaskCompletion: (id: string) => void
  onEditTask: (id: string, name: string, description: string) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onToggleTaskCompletion, onEditTask }) => {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTaskCompletion={onToggleTaskCompletion}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  )
}

export default TaskList

