import { useContext } from "react";
import Books from "../../Contexts/Books";

function Line({line}){
  const {setDeleteData, setModalData}  = useContext(Books);
  return(
    <li className="list-group-item">
      <div className="line">
        <div className="line__content justify-content-between align-items-center w-100">
          <div className="line__content__info">
            {line.image ? <div className='img-bin'>
              <img src={line.image} alt={line.title}></img>
              </div> : <span className="red-image">No image</span>}
          </div>
          <div>
          <div className="line__content__info">
            {line.author}
          </div>
          <div className="line__content__title">
            {line.title}
          </div>
          <div className="line__content__info">
            <small>išleidimo metai: {line.year}</small>
          </div>
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