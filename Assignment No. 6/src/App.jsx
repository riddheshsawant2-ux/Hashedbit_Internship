import React, { useState, useEffect, useRef } from 'react'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('tasks') || '[]')
    } catch (e) {
      return []
    }
  })
  const [text, setText] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    const val = text.trim()
    if (!val) return
    const newTask = { id: Date.now(), text: val }
    const newTasks = [...tasks, newTask].sort((a, b) => a.text.localeCompare(b.text))
    setTasks(newTasks)
    setText('')
    inputRef.current?.focus()
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
    inputRef.current?.focus()
  }

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <h1>Todo List</h1>

      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Add a task"
          aria-label="New task"
          style={{ flex: 1, padding: '8px 10px' }}
        />
        <button onClick={addTask} style={{ padding: '8px 12px' }}>
          Add
        </button>
      </div>

      <div style={{ marginBottom: 12, color: '#555' }}>{tasks.length} task(s)</div>

      <ul style={{ paddingLeft: 20 }}>
        {tasks.map((t) => (
          <li key={t.id} style={{ marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{t.text}</span>
            <button onClick={() => deleteTask(t.id)} aria-label={`Delete ${t.text}`} style={{ marginLeft: 12 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
