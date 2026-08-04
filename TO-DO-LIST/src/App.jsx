import './App.css'
import Form from './components/Form'
import List from './components/List'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: ''
  })
  const [items, setItems] = useState([])

  function handleInput(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newItem = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      date: formData.date
    }

    setItems([...items, newItem])
    setFormData({ title: '', description: '', date: '' })
  }

  return (
    <div className='app-container'>
      <Form
        formData={formData}
        onInputChange={handleInput}
        onSubmit={handleSubmit}
      />
      <List items={items} />
    </div>
  )
}

export default App
