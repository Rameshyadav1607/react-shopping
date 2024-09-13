export default function DataBindingComponent2(){
    var products=[
        {Name:'samsung tv',price:56000.44},
        {Name: 'Nike Casual',price:4200.44}
    ];
    return(
        <>
        <div className="container">
        <h2 className="text-center">Product details</h2>
            <table className="table table-hover ">
               <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                <tbody>
                        
                        {
                                products.map(product=>
                                    <tr >
                                        <td>{product.Name}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                )
                            }
                       
                    </tbody>
            </table>
        </div>
        </>
    )
}