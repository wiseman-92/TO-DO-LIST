function Form({ formData, onInputChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>Title</label>
      <input
        type='text'
        name='title'
        onChange={onInputChange}
        value={formData.title}
      />

      <label>Description</label>
      <input
        type='text'
        name='description'
        onChange={onInputChange}
        value={formData.description}
      />
      <label>Date</label>
      <input
        type='date'
        name='date'
        onChange={onInputChange}
        value={formData.date}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
