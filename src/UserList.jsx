import { useSelector } from "react-redux"

export const UserList =()=>{
    const data = useSelector(state=>state.users)
    return(
        <>
        <div>
            {
                data.map(e=><tr>
                    <td>{e.id}</td>
                    <td>{e.nom}</td>
                    <td>{e.prenom}</td>
                </tr>)
            }
            
        </div>
        </>
    )
}