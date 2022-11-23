import axios from "axios";
import { useContext } from "react";
import Rezervation from "../../Contexts/Rezervation";
import { authConfig } from "../../Functions/auth";
import formatDate from "../../Functions/formatDate";

function Line({line}){
  const {setDeleteData, setLastUpdate} = useContext(Rezervation);


  const cont = (id, diena) =>{
   const dienos = parseInt(diena);
      axios.put("http://localhost:3003/home/order/"+id, dienos, authConfig())
      .then(res=>
          setLastUpdate(Date.now())
        )
  }

  return(
    <li className="list-group-item">
      <div className="card w-100">
      <div className="card-header d-md-flex justify-content-between">
          <p>Rezervacijos data</p>
          <span>{formatDate(line.create_time)}</span>
        </div>
        </div>
      <div className="line">
        <div className="line__content align-items-center justify-content-between w-100">
          <div className="line__content__info">
            {line.image ? <div className='img-bin'>
            <img src={line.image} alt={line.title}></img>
              </div> : <span className="red-image">No image</span>}
          </div>
          <div>
          <div className="line__content__info">
          <b>Autorius</b> {line.author}
          </div>
          <div className="line__content__info">
          <b>Pavadinimas</b> {line.title}
          </div>
          <div className="line__content__info">
            <small>Išleidimo metai: {line.year}</small>
          </div>
          <div className="line__content__info">
            <b>Kategorija</b> {line.cats}
          </div>          
          <div className="line__content__info">
            <b>Rezervuota</b> {line.dienos} d.
          </div>
          <div className="line__content__info">
           {line.pratesimas < 2 ? <button type="button" className="btn btn-outline-success" onClick={()=> cont(line.id)}>Pratęsti</button> : null }
          </div>
          </div>
          <div className="line__buttons">
            <button type="button" className="btn btn-outline-danger" onClick={()=> setDeleteData(line)}>Trinti</button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Line;