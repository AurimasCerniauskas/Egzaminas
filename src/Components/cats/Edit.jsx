import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Cats from "../../Contexts/Cats";

function Edit(){
  const {setModalData, setEditData, modalData} = useContext(Cats);
  const [cat, setCat] = useState('');

  useEffect(()=>{
    if(modalData===null) return;
    setCat(modalData.kategorija);
  }, [modalData])

  const edit = () => {
    setEditData({
      kategorija: cat,
      id: modalData.id,
    })
    setModalData(null);
  }

  if(modalData === null){
    return null;
  }
  return(
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Redaguoti kategoriją</h5>
            <button type="button" className="btn btn-close" onClick={()=> setModalData(null)}></button>
          </div>
          <div className="modal-body">
            <div className="card m-4">
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Kategorija</label>
                  <input type="text" className="form-control" value={cat} onChange={e=>setCat(e.target.value)}/>
                </div>
          </div>
          <div className="modal-footer">
          <button onClick={edit} type="button" className="btn btn-outline-success">Save</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Edit;