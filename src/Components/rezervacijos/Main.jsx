import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Rezervation from "../../Contexts/Rezervation";
import Create from "../rezervacijos/Create";
import List from "../rezervacijos/List";
import { authConfig } from "../../Functions/auth";
import reList from "../../Functions/reList";

function Main({useris}){
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [knygos, setKnygos] = useState(null);
  const [rezervas, setRezervas] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  //read
  useEffect(()=>{
    axios.get('http://localhost:3003/server/books', authConfig())
    .then(res=>
      setKnygos(res.data)
    )
  }, [lastUpdate])

  useEffect(()=>{
    axios.get("http://localhost:3003/home/order", authConfig())
    .then(res=>
      setRezervas(reList(res.data, 'cats'))
    )
  }, [lastUpdate])


  //create
  useEffect(()=>{
    if (createData===null) return;
    axios.post("http://localhost:3003/home/order", createData, authConfig())
    .then(res=>
      setLastUpdate(Date.now())
    )
  }, [createData])

  //delete
  useEffect(()=>{
    if(deleteData === null) return;
    axios.delete("http://localhost:3003/home/order/"+deleteData.id, authConfig())
    .then(res=>
      setLastUpdate(Date.now())
    )
  }, [deleteData])

  return(
    <Rezervation.Provider value={{
      useris,
      knygos,
      rezervas,
      setCreateData,
      setDeleteData,
      setRezervas,
      setLastUpdate
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
    </Rezervation.Provider>
  )
}

export default Main;