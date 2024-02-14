import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "./Userslace";

export const Adduser = () => {
    const data = useSelector(state => state.users);
    const id = data.length ? data[data.length - 1].id + 1 : 1; 
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const navigate = useNavigate('');
    const dispatch = useDispatch();

    const ajouter = () => {
        const user = { id, nom, prenom };
        dispatch(addUser(user));
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4">Ajouter un utilisateur</h5>
                            <div className="mb-3">
                                <label htmlFor="inputNom" className="form-label">Nom</label>
                                <input type="text" className="form-control" id="inputNom" placeholder="Entrez le nom" onChange={(e) => setNom(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPrenom" className="form-label">Prénom</label>
                                <input type="text" className="form-control" id="inputPrenom" placeholder="Entrez le prénom" onChange={(e) => setPrenom(e.target.value)} />
                            </div>
                            <button className="btn btn-primary w-100" onClick={ajouter}>Ajouter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
