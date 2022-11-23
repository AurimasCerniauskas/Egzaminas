import { useRef } from "react";
import { useContext, useState } from "react";
import Books from "../../Contexts/Books";
import getBase64 from "../../Functions/getBase64";

function Create(){
  const {setCreateData, cats} = useContext(Books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState ('');
  const [year, setYear] = useState ('');
  const [cat, setCat] = useState ('0');
  const fileInput = useRef();
  const [photoPrint, setPhotoPrint] = useState(null);

  const doPhoto = () => {
    getBase64(fileInput.current.files[0])
        .then(photo => setPhotoPrint(photo))
        .catch(_ => {
         })
}

  const add = () =>{
    if (title === '' || author === '' || year === '' || cat === '0') return;
    setCreateData({
      title,
      author,
      year,
      cat_id: parseInt(cat),
      image: photoPrint
    })
    setTitle('');
    setAuthor('');
    setYear('');
    setCat('0');
    setPhotoPrint(null);
    fileInput.current.value = null;
  }

  return(
    <div className="card m-4">
      <h4 className="card-header">Įvesti knygą</h4>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Pavadinimas</label>
          <input type='text' className="form-control" value={title} onChange={e=>setTitle(e.target.value)} /> 
        </div>
        <div className="mb-3">
          <label className="form-label">Autorius</label>
          <input type="text" className="form-control" value={author} onChange={e=>setAuthor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Metai</label>
          <input type="text" className="form-control" value={year} onChange={e=>setYear(e.target.value.replace(/[^\d]/, ''))} />
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
          <label className="form-label">Viršelis</label>
          <input type="file" ref={fileInput} className="form-control" onChange={doPhoto} />
        </div>
        {photoPrint ? <div className="img-bin"><img src={photoPrint} alt="upload"></img></div> : null}
        <button onClick={add} type="button" className="btn btn-outline-primary">Išsaugoti</button>
      </div>
    </div>
  )
}

export default Create;