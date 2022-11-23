import { useContext } from "react";
import Rezervation from "../../Contexts/Rezervation";
import Line from "./Line";


function List(){
  const {rezervas, useris} = useContext(Rezervation);

  return(
    <div className="card m-4">
      <h5>Vartotojo <i style={{color: 'crimson'}}>{useris}</i> rezervuotos knygos</h5>
      <div className="card-body">
        <ul className="list-group">
        {
          rezervas?.map(r=> <li key={r[0]} className="list-group-item">
            <h4>{r[0]}</h4>
            <ul className="list-group">
              {r[1].map(s=> <Line key={s.id} line={s} />)}
            </ul>
          </li> )
        }
        </ul>
      </div>
    </div>
  )
}

export default List;