export default function DataBindingComponent(){
    // var product={
    //     Name:'Samsung Tv',
    //     Price:45005.45,
    //     Stock :true
    // }
    var categories=["ALL","ELECTRONICS","FOOTWEAR","fashion"];
    return(
        <div className="container">
            <h2>Product details:</h2>
            {/* <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Stack</dt>
                <dd>{(product.Stock==true)?"AVAILABLE":"Out of Stock"}</dd>
            </dl> */}
            <ol>
            {
                // categories.toString()
                categories.map(category=><li>{category}</li>)
                  
            }
            </ol>
            
                <select> {
                    categories.map(category=>
                        <option key={category}>category</option>
                    )
                }</select>
               
            
        </div>
    )
}