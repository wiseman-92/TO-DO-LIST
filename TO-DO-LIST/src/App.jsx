import './App.css'
import Form from './components/Form'
import List from './components/List'

//Implemented two components form component and list component
//Form component will collect the to-do-list item 
//List component will render the added to-do-list item

function App() {
  

  return (
    <>
      <div className='app-container'>
        <Form />
        <List />
      </div>
      
    </>
  )
}

export default App
