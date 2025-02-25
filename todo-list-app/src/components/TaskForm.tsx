"use client"

import type React from "react"
import { useState } from "react"

interface TaskFormProps {
  onAddTask: (name: string, description: string) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && description.trim()) {
      onAddTask(name, description)
      setName("")
      setDescription("")
      setError("")
    } else {
      setError("Please fill in both name and description.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task name"
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
        className="w-full mb-2 p-2 border rounded"
      />
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm

