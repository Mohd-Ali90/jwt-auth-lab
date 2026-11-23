import React from 'react'
import {useState, useEffect} from 'react'
import { getMyEntries } from '../services/entriesService'

function MyEntries() {

    const [entries , setEntries] = useState([])

    async function loadEntries(){
        const response = await getMyEntries()
        setEntries(response)
    }



    useEffect(()=>{loadEntries()},[])
  return (
           <div>
                <h1>My Entries</h1>
              {entries.map((oneEntry)=><div key={oneEntry._id}>{oneEntry.title}</div>)}
            </div>
         )
}

export default MyEntries