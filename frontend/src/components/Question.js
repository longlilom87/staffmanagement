import {Accordion} from "react-bootstrap"
export default function Question(props){
    const {item}= props
    // console.log(item)
    return <>
    <Accordion style={{padding: 10}}>
      <Accordion.Header>{item.q}</Accordion.Header>
      <Accordion.Body style={{backgroundColor:"white"}}>{item.a}</Accordion.Body>
    </Accordion>
    
    </>

}