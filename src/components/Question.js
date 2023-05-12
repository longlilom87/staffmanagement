import { useState } from "react"
export default function Question(props){
    const {item}= props
    const [isOpen, setOpen] = useState(false);
    console.log(item)
    return <>
    <div className="question">
    <h3>{item.q}
    <button className="btn btn-outline-primary" onClick={()=>setOpen(!isOpen)}>{isOpen? "-":"+"}</button></h3>
   <p>{isOpen && item.a}</p>
    </div>
    </>

}