"use client"

import type React from "react"
import { useState, useEffect } from "react"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"

// Define the Task interface
export interface Task {
  id: string
  name: string
  description: string
  completed: boolean
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks")
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (name: string, description: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      description,
      completed: false,
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id: string) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id))
    }
  }

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const editTask = (id: string, name: string, description: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, name, description } : task)))
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTaskCompletion={toggleTaskCompletion}
        onEditTask={editTask}
      />
    </div>
  )
}

export default App

