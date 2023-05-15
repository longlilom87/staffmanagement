import { useState } from "react"

export default function Home(){
  const [searchValue, setSearch]= useState("")

    return <>
    <div className="row">
        <div className="input-group col-md-4" style={{maxWidth: '20%'}}>
            <input className="form-control py-2 border-right-0 border" 
            type="search" 
            value={searchValue} onChange={(e)=>setSearch(e.target.value)}
            id="example-search-input"/>
        </div>
    </div>
    <table class="table">
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </>
}