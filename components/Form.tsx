import React from 'react'

const Form = () => {
  return (
    <section>
      <h1 className='text-2xl font-bold '>Create a Prompt</h1>
      <div id='form'>
      <form  className='flex flex-col '>
        
        <label htmlFor="Prompt">Prompt</label>
        <textarea name="Prompt" id="Prompt" cols={30} rows={10} placeholder='write yourn prompt here '/>
        <label htmlFor="tags">Tags</label>
        <input type="text" name="tags" id="tags" />
        
        <button type="submit">Submit</button>
      </form>
      </div>
    </section>
  )
}

export default Form