import React from 'react'
import {useState, useEffect} from 'react'
import { getAllEntries , deleteEntry} from '../services/entriesService'
import { useNavigate, useParams, Link } from 'react-router'

import { useAuth } from '../context/AuthContext'


function Entries() {

  const navigate = useNavigate()
  const {entryId}= useParams()
  const {user}= useAuth()

    const [allEntries , setAllEntries] = useState([])

 async function loadAllEntries(){
        const response = await getAllEntries()
        setAllEntries(response)
    }

    async function handleDeleteEntry(id){
      
    const response = await deleteEntry(id)
    navigate('/entries')
  }

     useEffect(()=>{loadAllEntries()},[])
  return (
    <div>
        <h1>All Entries</h1>
                   <ul>
      {allEntries.map((oneEntry) => (
        <li key={oneEntry._id}>
          {oneEntry.title}
          {user._id === oneEntry.owner._id ? (
            <button onClick={() => handleDeleteEntry(oneEntry._id)}>Delete</button>) : null}

          {user._id === oneEntry.owner._id ? (
            <Link to={`/entries/${oneEntry._id}/edit`}>Edit entry</Link>) : null}
        </li>
      ))}
    </ul>

    

       
        

    </div>
  )
}

export default Entries