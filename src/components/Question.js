import { useState } from "react"
import {Accordion} from "react-bootstrap"
export default function Question(props){
    const {item}= props
    const [isOpen, setOpen] = useState(false);
    // console.log(item)
    return <>
    <Accordion>
      <Accordion.Header>{item.q}</Accordion.Header>
      <Accordion.Body style={{backgroundColor:"white"}}>{item.a}</Accordion.Body>
    </Accordion>
    </>

}