import { useState } from "react"
import { useSelector } from "react-redux"

export const Adduser=()=>{
    const data = useSelector(state=>state.users)
    const id = data[-1].id+1
    const[nom,setNom] = useState('')
    return(
        <>
        <input type="text" onChange={(e)=>setNom(e.target.value)} />
        </>
    )
}