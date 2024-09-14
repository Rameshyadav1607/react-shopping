import { useState,useEffect } from "react"
export default function ShoppingComponent(){
    const [categories,setCategories]=useState([]);
    const [products,setProducts]=useState([]);
    function LoadCategories(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(data=>{
            data.unshift('ALL');
            setCategories(data);
        })
    }
    function LoadProducts(url){
        fetch(url)
        .then(response => response.json())
        .then(data=>{
            setProducts(data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
    },[])
    function handleCategoryChange(e){
     if(e.target.value=='ALL'){
        LoadProducts("https://fakestoreapi.com/products");
     }else{
        LoadProducts('https://fakestoreapi.com/products/category/${e.target.value}')
     }
      
    }
    return(
       <>
       <div className="container-fluid">
        <header className="bg-danger test-white text-center p-2">
            <h1 ><span className="bi bi-cart"></span>SHOPPING HOME</h1>
            </header> 
            <section className="row">
                <nav className="col-3">
                    <label>
                        select category
                    </label>
                    <div>
                        <div>
                        <select onChange={handleCategoryChange} className="form-select">
                            {
                                categories.map(category=>
                                    <option key={category}>{category.toUpperCase()}</option>
                                )
                            }
                        
                         </select>
                        </div>
                        
                    </div>
                </nav>
                <main className="col-9 d-flex flex-wrap overflow-auto" style={{height:"600px"}}>
                    {
                        products.map(product=>
                            <div className="card m-2 p-2 w-25">
                             <img src={product.image} className=" card-image-top " height="150"/>
                            <div className="card-header" style={{height:"160px"}}>
                                <p>{product.id}</p>
                            </div>
                            <div className="card-body">
                            <dl>
                                <dt>Price</dt>
                                <dd>{product.price}</dd>
                                <dt>Rating</dt>
                                <dd>
                                    <span className="bi bi star-fill text-bg-success"></span>
                               
                               {product.rating.rate}<span>[{product.rating.count}]</span>
                                </dd>
                            </dl>
                            </div>
                            </div>
                        )
                    }
                </main>
            </section>
               </div>
       </>
    )
}
