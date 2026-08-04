function Form({ formData, onInputChange, onSubmit }) {
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label className="labelText">Title</label>
      <input
        type='text'
        name='title'
        className="inputField"
        onChange={onInputChange}
        value={formData.title}
        required
      />

      <label className="labelText">Description</label>
      <input
        type='text'
        name='description'
        className="inputField"
        onChange={onInputChange}
        value={formData.description}
        required
      />
      <label className="labelText">Date</label>
      <input
        type='date'
        name='date'
        className="inputField"
        onChange={onInputChange}
        value={formData.date}
        required
      />
      <button className="button" type='submit'>Submit</button>
    </form>
  )
}

export default Form
