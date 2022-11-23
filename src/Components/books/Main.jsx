import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Books from "../../Contexts/Books";
import Create from "./Create";
import {authConfig} from '../../Functions/auth';
import List from "./List";
import Edit from "./Edit";
import reList from "../../Functions/reList";

function Main(){

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [books, setBooks] = useState(null);
  const [cats, setCats] = useState(null);

  //read
  useEffect(()=>{
    axios.get("http://localhost:3003/server/books", authConfig())
    .then(res=>
      setBooks(reList(res.data, 'cat'))
    )
  }, [lastUpdate]);

  useEffect(()=>{
    axios.get("http://localhost:3003/server/cats", authConfig())
    .then(res=>
      setCats(res.data)
    )
  }, [lastUpdate])

 
  //delete
  useEffect(()=>{
    if(deleteData === null) return;
    axios.delete("http://localhost:3003/server/books/"+deleteData.id, authConfig())
    .then(res=>
      setLastUpdate(Date.now())
    )
  }, [deleteData]);

  //edit
  useEffect(()=>{
    if (editData === null) return;
    axios.put("http://localhost:3003/server/books/"+editData.id, editData, authConfig())
    .then(res=>
      setLastUpdate(Date.now())
    )
  }, [editData]);

  //create
  useEffect(()=>{
    if (createData === null) return;
    axios.post('http://localhost:3003/server/books', createData, authConfig())
    .then(res=>
      setLastUpdate(Date.now())
    )
  }, [createData]);

  return(
    <Books.Provider value={{
      setCreateData,
      setDeleteData,
      setEditData,
      setModalData,
      modalData,
      books,
      cats
    }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List />
          </div>
        </div>
      </div>
      <Edit />
    </Books.Provider>
  )
}

export default Main;