
import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);

  const getNotes =async ()=>{

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNzJjMWMwNTVkZWYyYjliMWQyMjYzIn0sImlhdCI6MTY4MDMzNzMxNn0.qgqiZTrwwU6NtNA59a0hN87qb9oVp8Ai58KC16KgOY8"
      }
    });
    
    const json = await response.json();
    console.log(json);
    
    setNotes(json);

  }


  const addNote =async (props)=>{
    
    const {title,description,tag}  = props;

    // const response = 
    await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNzJjMWMwNTVkZWYyYjliMWQyMjYzIn0sImlhdCI6MTY4MDMzNzMxNn0.qgqiZTrwwU6NtNA59a0hN87qb9oVp8Ai58KC16KgOY8"
      },
      body: JSON.stringify({title,description,tag})
    });
    
    // const json = response.json();
    const   note = {
      "_id": "6427f0f4e34c3a829bdf9ea3",
      "user": "64272c1c055def2b9b1d2263",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-04-01T08:53:08.795Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }

  const deleteNote = async(id)=>{
    
    // const response =
     await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNzJjMWMwNTVkZWYyYjliMWQyMjYzIn0sImlhdCI6MTY4MDMzNzMxNn0.qgqiZTrwwU6NtNA59a0hN87qb9oVp8Ai58KC16KgOY8"
      }
    });
    const newNotes = notes.filter((note)=>{
      return note._id!==id;
    })
    setNotes(newNotes);
  }
  const editNote = async(id,title,description,tag)=>{

    
      // const response = 
      await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyNzJjMWMwNTVkZWYyYjliMWQyMjYzIn0sImlhdCI6MTY4MDMzNzMxNn0.qgqiZTrwwU6NtNA59a0hN87qb9oVp8Ai58KC16KgOY8"
        },
        body: JSON.stringify({title,description,tag})
      });
      
      // const json = response.json();
    
    

    for(let index = 0;index<notes.length;index++)
    {
      const element = notes[index];
      if(element._id===id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }
  return(
    <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
