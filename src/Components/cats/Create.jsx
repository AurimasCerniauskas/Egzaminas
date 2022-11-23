import { useContext, useState } from "react";
import Cats from "../../Contexts/Cats";


function Create(){
  const {setCreateData} = useContext(Cats);
  const [cat, setCat] = useState('');


  const add = () =>{
    if (cat === '') return;
    setCreateData({
      kategorija: cat
    })
    setCat('');
  }

  return(
    <div className="card m-4">
      <h4 className="card-header">Sukurti kategoriją</h4>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Kategorija</label>
          <input type='text' className="form-control" value={cat} onChange={e=>setCat(e.target.value)} /> 
        </div>
        <button onClick={add} type="button" className="btn btn-outline-primary">Add</button>
      </div>
    </div>
  )
}

export default Create;