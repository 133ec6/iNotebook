
import React, { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "6427f0f4e34c3a829bdf9ea3",
      "user": "64272c1c055def2b9b1d2263",
      "title": "this is title",
      "description": "mai nhi likh rha desc",
      "tag": "meri marzi",
      "date": "2023-04-01T08:53:08.795Z",
      "__v": 0
    },
    {
      "_id": "6427f0f4e34c3a829bdf9ea3",
      "user": "64272c1c055def2b9b1d2263",
      "title": "this is title",
      "description": "mai nhi likh rha desc",
      "tag": "meri marzi",
      "date": "2023-04-01T08:53:08.795Z",
      "__v": 0
    },
    {
      "_id": "6427f0f4e34c3a829bdf9ea3",
      "user": "64272c1c055def2b9b1d2263",
      "title": "this is title",
      "description": "mai nhi likh rha desc",
      "tag": "meri marzi",
      "date": "2023-04-01T08:53:08.795Z",
      "__v": 0
    },
    {
      "_id": "6427f0f4e34c3a829bdf9ea3",
      "user": "64272c1c055def2b9b1d2263",
      "title": "this is title",
      "description": "mai nhi likh rha desc",
      "tag": "meri marzi",
      "date": "2023-04-01T08:53:08.795Z",
      "__v": 0
    },
    {
      "_id": "6427f0f4e34c3a829bdf9ea3",
      "user": "64272c1c055def2b9b1d2263",
      "title": "this is title",
      "description": "mai nhi likh rha desc",
      "tag": "meri marzi",
      "date": "2023-04-01T08:53:08.795Z",
      "__v": 0
    },
    {
      "_id": "6427f0f4e34c3a829bdf9ea3",
      "user": "64272c1c055def2b9b1d2263",
      "title": "this is title",
      "description": "mai nhi likh rha desc",
      "tag": "meri marzi",
      "date": "2023-04-01T08:53:08.795Z",
      "__v": 0
    },
    {
      "_id": "6427f0f4e34c3a829bdf9ea3",
      "user": "64272c1c055def2b9b1d2263",
      "title": "this is title",
      "description": "mai nhi likh rha desc",
      "tag": "meri marzi",
      "date": "2023-04-01T08:53:08.795Z",
      "__v": 0
    }

  ]

  const [notes, setNotes] = useState(notesInitial);
  return(
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
