import React from 'react'
import { createNewEntry } from '../services/entriesService'
import { useNavigate } from 'react-router'
import {useState } from 'react'

function Create() {

     const navigate=useNavigate()

  const [formData, setFormData] = useState({
    title:'',
    entryBody: '',
    isPublic:false
  })

  function handleChange(event) {
  const { name, type, value, checked } = event.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
}

 async function handleSubmit(event){
    event.preventDefault()
    console.log('Form Submitted')
     const createdEntry = await createNewEntry (formData)
    navigate('/entries')
 }

  return (
    <div>
        <h1>Create A New Entry</h1>
<form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
        type="text"
        name="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
        />

         <label htmlFor="entryBody">Entry Text:</label>
        <input 
        type="text"
        name="entryBody"
        id="entryBody"
        value={formData.entryBody}
        onChange={handleChange}
        />

        <label htmlFor="isPublic">Check for post to be made public</label>
        <input 
        type="checkbox"
        name="isPublic"
        id="isPublic"
        value={formData.isPublic}
        onChange={handleChange}
        />

    
        <button> Create Entry</button>
      </form>

    </div>
  )
}

export default Create