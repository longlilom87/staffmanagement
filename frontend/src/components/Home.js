import { useEffect, useState } from "react"

export default function Home(){
  const [searchValue, setSearch]= useState("")
  const [users,setUsers]=useState([])
  const [userResult, setResult]= useState([])

  useEffect(()=>{
    fetch("https://reqres.in/api/users?page=2")
    .then((response)=>response.json())
    .then((json)=>{
      setUsers(json.data)
      // console.log(json.data)
    })
    .catch((error)=>console.log(error))
  })

  useEffect(()=>{
    if (users){
      setResult(users.filter(user=>user.first_name.startsWith(searchValue)))
    }
  })
    return <>
    
    <div className="row" style={{padding: '10px'}}>
        <div className="input-group col-md-4" style={{maxWidth: '20%'}}>
            <input className="form-control py-2 border-right-0 border" 
            type="search" 
            value={searchValue} onChange={(e)=>setSearch(e.target.value)}
            id="example-search-input"/>
        </div>
    </div>
    <table className="table"style={{margin:'auto',width:'80%'}}>
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {userResult && userResult.map(user =><tr>
      <th scope="row">{user.id}</th>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.email}</td>
    </tr>)}
  </tbody>
</table>
    </>
}