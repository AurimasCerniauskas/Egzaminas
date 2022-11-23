import { useContext } from "react";
import Books from "../../Contexts/Books";
import Line from "./Line";

function List(){
  const {books} = useContext(Books);
  return(
    <div className="card m-4">
      <h5 className="card-header">Knygų sąrašas</h5>
      <div className="card-body">
        <ul className="list-group">
          {books?.map(b=> <li key={b[0]} className="list-group-item" >
            <h4>{b[0]}</h4>
            <ul className="list-group">
              {
                b[1].map(s=> <Line key={s.id} line={s} />)
              }
            </ul>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default List;