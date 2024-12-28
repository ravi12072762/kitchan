import React, { useEffect, useState } from 'react'
import axios from "axios";

function Brand() {

   const [state , setState]  = useState([])

   useEffect(()=>{
    axios.get("https://rgcollage.com/rajshree-cosmetics/ApiController/brand_list")
    .then((res)=>{
        setState(res.data.data)
        // console.log(res);
    })
},[])

return (
    <>
      <div className="container">
     <div>
        <table className="table table-stripped bg-dark text-white">
          <thead className="bg-dark text-white font-weight-bold">
            <tr>
              <th>Sr No.</th>
              <th>Brand Name</th>

              <th>Created Date</th>
              <th>Updated Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                
                <td>{state[0].title}</td>
                <td>ravi</td>
                <td>576/22/2</td>
                <td>/23/23/</td>
                <td>jkhh</td>
            </tr>
          </tbody>
          </table>
          </div>
          </div>
    
    
    
    </>
  )
}

export default Brand