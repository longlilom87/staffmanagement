import Question from "./Question"
import "./question.css"
export default function Guide(){
    const questions = [
        {
          id: 1,
          q: "How to search for staffs",
          a:
            "Click on the search box to search for employees. Then press enter to get the results"
        },
        {
          id: 2,
          q: "Any new features?",
          a:
            "Yes. More features are coming soon"
        },
        
      ];
    return <>
    <h1> Frequently Asked Questions </h1>
    <br></br>
    <div className="bigContainer">
        {questions.map((question)=> <Question className="item" item={question}/>)}
    </div>
    </>
}