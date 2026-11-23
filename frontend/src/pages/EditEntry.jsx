import {useState, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router'
import { updateEntry } from '../services/entriesService'

function EditEntry() {

    const [formData, setFormData] = useState({
    title:'',
    entryBody: '',
    isPublic: false
  })

  const {entryId} = useParams()

  async function loadEntry(){
    const response = await axios.get(`${import.meta.env.VITE_BACK_END_SERVER_URL}/entries/${entryId}`)
    setFormData(response.data)
  }

    useEffect(()=>{
    loadEntry()
  },[])

  const navigate = useNavigate()

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
     const updatedEntry = await updateEntry (entryId,formData)
    navigate('/entries')
 }

  return (
    <div>
        <h1>Edit Entry Details</h1>

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

export default EditEntry