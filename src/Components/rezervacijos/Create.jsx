import { useState } from "react";
import { useContext } from "react"
import Rezervation from "../../Contexts/Rezervation"

function Create(){
  const {knygos, setCreateData, useris} = useContext(Rezervation);
  const [knyga, setKnyga] = useState('0');
  const [dienos, setDienos] = useState('');

  const add = () =>{
    setCreateData({
      knygos_id: parseInt(knyga),
      user: useris,
      dienos: parseInt(dienos)
    })
    setKnyga('0');
    setDienos('');
  }

  return(
    <div className="card m-4">
      <h4 className="card-header">Sukurti rezervaciją</h4>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Pasirinkti knygą</label>
          <select className="form-select" value={knyga} onChange={e=>setKnyga(e.target.value)}>
            <option value={0} disabled>Pasirinkti iš sąrašo</option>
            {
              knygos?.map(k => <option key={k.id} value={k.id}>
                {k.title} --- {k.author}</option>)
            }
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Terminas dienomis</label>
          <input type='text' className="form-control" value={dienos} onChange={e=>setDienos(e.target.value.replace(/[^\d]/, ''))}></input>
        </div>
        <button onClick={add} type="button" className="btn btn-outline-success">Pateikti</button>
      </div>
    </div>
  )
}

export default Create;