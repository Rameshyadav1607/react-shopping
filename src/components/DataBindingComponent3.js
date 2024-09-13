export default function DataBindingComponent3(){
    var menu=[
       {Category:"electronic",Product:["Samsung Tv","Mobile"],
       } ,
       {Category:"Footwear",Product:["nike Causals","lee Boot"]}
    ]
    
    return(
       <>
       <div className="container">
         <h2>Category</h2>
       <ol>
        {
            menu.map(item=>
                <li>{item.Category}
                <ul>
                    {item.Product}
                </ul>
                </li>
            )
        }
       </ol>
       <h2>Select a Product</h2>
       <select>
        {
            menu.map(item=>
                <optgroup label={item.Category}>
                    {item.Product}
                </optgroup>
            
            )
        }
       </select>
       </div>
       </>
    )
}