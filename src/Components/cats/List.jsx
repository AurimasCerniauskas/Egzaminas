import { useContext } from "react";
import Cats from "../../Contexts/Cats";
import Line from "./Line";

function List(){
  const {cats} = useContext(Cats);
  return(
    <div className="card m-4">
      <h5 className="card-header">Kategorijos</h5>
      <div className="card-body">
        <ul className="list-group">
          {cats?.map(c=> <Line key={c.id} line={c} />)}
        </ul>
      </div>
    </div>
  )
}

export default List;