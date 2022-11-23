import { useRef, useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Books from "../../Contexts/Books";
import getBase64 from "../../Functions/getBase64";

function Edit(){
  const {setModalData, setEditData, modalData, cats} = useContext(Books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState ('');
  const [year, setYear] = useState ('');
  const [cat, setCat] = useState ('0');
  const fileInput = useRef();
  const [photoPrint, setPhotoPrint] = useState(null);
  const [deletePhoto, setDeletePhoto] = useState(false);

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
        .then(photo => setPhotoPrint(photo))
        .catch(_ => {
        })
}

  useEffect(()=>{
    if(modalData===null) return;
    setTitle(modalData.title);
    setAuthor(modalData.author);
    setYear(modalData.year);
    setCat(modalData.cat_id)
    setPhotoPrint(modalData.image);
    setDeletePhoto(false);
  }, [modalData])

  const edit = () => {
    setEditData({
      title,
      author,
      year: parseInt(year),
      cat_id: parseInt(cat),
      image: photoPrint,
      id: modalData.id,
      deletePhoto: deletePhoto ? 1 : 0
    })
    setModalData(null);
    setDeletePhoto(false);
  }

  if(modalData === null){
    return null;
  }
  return(
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Redaguoti knygą</h5>
            <button type="button" className="btn btn-close" onClick={()=> setModalData(null)}></button>
          </div>
          <div className="modal-body">
            <div className="card m-4">
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Pavadinimas</label>
                  <input type="text" className="form-control" value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Autorius</label>
                  <input type="text" className="form-control" value={author} onChange={e=>setAuthor(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Metai</label>
                  <input type="text" className="form-control" value={year} onChange={e=>setYear(e.target.value.replace(/[^\d]/, ''))}/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Kategorija</label>
                  <select className="form-select" value={cat} onChange={e=>setCat(e.target.value)} >
                  <option value={0} disabled>Pasirinkti iš sąrašo</option>
                  {
                    cats?.map(c => <option key={c.id} value={c.id}>{c.kategorija}</option>)
                  }
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Pakeisti nuotrauką</label>
                  <input ref={fileInput} type="file" className="form-control" onChange={doPhoto} />
                </div>
                  {photoPrint ? <div className='img-bin'>
                    <label htmlFor="image-delete">X</label>
                    <input id="image-delete" type="checkbox" checked={deletePhoto} onChange={() => setDeletePhoto(d => !d)}></input>
                    <img src={photoPrint} alt="upload"></img>
                    </div> : null}
              </div>
            </div>
          </div>
          <div className="modal-footer">
          <button onClick={edit} type="button" className="btn btn-outline-success">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit;