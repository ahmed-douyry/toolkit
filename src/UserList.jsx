import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "./Userslace";
import { useEffect, useState } from "react";

export const UserList = () => {
    const data = useSelector(state => state.users);
    const dispatch = useDispatch()
    const[rechercher,setrech] = useState('')
    const [filtred,setfiltred] = useState([])
    const nav = useNavigate('')

    useEffect(() => setfiltred(data.filter(e=>e.nom.toLowerCase().includes(rechercher.toLowerCase())||e.prenom.toLowerCase().includes(rechercher.toLowerCase()))), [rechercher, data]);
    const supprimer =(id)=>{
            dispatch(deleteUser({id:id}))
            nav('/')
        
    }
    return (
        <div className="container py-4">
            <h2 className="text-center mb-4">Liste des Utilisateurs</h2>
            <input type="text" className="form-control mx-auto w-75 mb-5" placeholder="taper une nom pour rechercher" onChange={(e)=>setrech(e.target.value)}/>
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Prénom</th>
                                <th scope="col" colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtred.map(e => (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.nom}</td>
                                    <td>{e.prenom}</td>
                                    <td>
                                        <button className="btn btn-danger" type="button" onClick={()=>supprimer(e.id)}>Supprimer</button>
                                    </td>
                                    <td>
                                        <Link to={`modifier/${e.id}`}><button className="btn btn-success">Modifier</button></Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-4 text-center">
                    <Link to={'Adduser'}>
                        <button className="btn btn-primary">Ajouter un stagiaire</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
