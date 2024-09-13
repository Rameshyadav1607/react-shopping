import { useState } from "react"
export default function DataBinding4(){
   const [products,setName] =useState(["TV","MOBILE","SHOE"]);
   return(
   <div className="container">
  <ol>
   {
    products.map(product=>
        <li key={product}>{products}</li>
    )
   }
  </ol>
   </div>
   )
   
}