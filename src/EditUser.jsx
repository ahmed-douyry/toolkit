import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser } from "./Userslace"

export const EditUser=()=>{
    const data = useSelector(state=>state.users)
    const {id} = useParams()
    const user = data.find(e=>e.id == id )
    const [nom,setnom] = useState(user.nom)
    const [prenom,setprenom] = useState(user.prenom)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const Modifier = ()=>{
        const newuser = {id:parseInt(id),nom,prenom}
        dispatch(updateUser(newuser))
        nav('/')
    }
    return(
        <>
        
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4">Modifier un utilisateur</h5>
                            <div className="mb-3">
                                <label htmlFor="inputNom" className="form-label">Id</label>
                                <input type="text" className="form-control" id="inputNom" placeholder="Entrez le nom" value={id} readOnly />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputNom" className="form-label">Nom</label>
                                <input type="text" className="form-control" id="inputNom" placeholder="Entrez le nom" value={nom} onChange={(e) => setnom(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPrenom" className="form-label">Prénom</label>
                                <input type="text" className="form-control" id="inputPrenom" placeholder="Entrez le prénom" value={prenom} onChange={(e) => setprenom(e.target.value)} />
                            </div>
                            <button className="btn btn-primary w-100" onClick={Modifier}>Modifier</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}