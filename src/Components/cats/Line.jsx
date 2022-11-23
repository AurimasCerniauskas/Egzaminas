import { useContext } from "react";
import Cats from "../../Contexts/Cats";

function Line({line}){
  const {setDeleteData, setModalData}  = useContext(Cats);
  return(
    <li className="list-group-item">
      <div className="line">
        <div className="line__content justify-content-between align-items-center w-100">
          <div className="line__content__info">
            {line.kategorija}
          </div>
          <div className="line__buttons">
            <button type="button" className="btn btn-outline-danger" onClick={()=> setDeleteData(line)}>Trinti</button>
            <button type="button" className="btn btn-outline-success" onClick={()=> setModalData(line)}>Redaguoti</button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Line;