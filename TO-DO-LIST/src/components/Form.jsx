import { useState } from "react";
function Form () {
    const [formData, setFormData ] = useState({
    title: '',
    description: '',
    date: ''
  })
  function handleInput(evt){
    setFormData({...formData, [evt.target.name]: evt.target.value})

  }
  function handleSubmit(event){
    event.preventDefault();
    console.log('submitted', formData)    
  }
    
  
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text"
            name="title"
            onChange={handleInput}
            value={formData.title}
             /><br/>
            <label>Description</label>
             <input
            type="text"
            name="description"
            onChange={handleInput}
              value={formData.description}
            />
            <label>Date</label>
            <input
            type="date"
            name="date"
            onChange={handleInput}
             value={formData.date}
            />
            <button type="submit" >Submit</button>
        

        </form>
        
        </>
        
    )
}
  


export default Form
