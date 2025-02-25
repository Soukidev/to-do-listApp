"use client"

import type React from "react"
import { useState } from "react"
import type { Task } from "../App"

interface TaskItemProps {
  task: Task
  onDeleteTask: (id: string) => void
  onToggleTaskCompletion: (id: string) => void
  onEditTask: (id: string, name: string, description: string) => void
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDeleteTask, onToggleTaskCompletion, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(task.name)
  const [editedDescription, setEditedDescription] = useState(task.description)

  const handleEdit = () => {
    if (editedName.trim() && editedDescription.trim()) {
      onEditTask(task.id, editedName, editedDescription)
      setIsEditing(false)
    }
  }

  return (
    <div className={`border p-4 mb-2 rounded ${task.completed ? "bg-gray-100" : ""}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <h3 className={`text-xl font-semibold ${task.completed ? "line-through" : ""}`}>{task.name}</h3>
          <p className={task.completed ? "line-through" : ""}>{task.description}</p>
          <div className="mt-2">
            <button
              onClick={() => onToggleTaskCompletion(task.id)}
              className={`mr-2 px-3 py-1 rounded ${task.completed ? "bg-yellow-500" : "bg-green-500"} text-white`}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => setIsEditing(true)} className="mr-2 bg-blue-500 text-white px-3 py-1 rounded">
              Edit
            </button>
            <button onClick={() => onDeleteTask(task.id)} className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskItem

