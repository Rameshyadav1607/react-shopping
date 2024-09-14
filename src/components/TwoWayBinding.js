import { useState,useEffect } from "react"
export default function TwoWayBinding(){
    const [product,setProduct]=useState({Name:'',Price:0,City:'',Stock:false});
    const [newProduct,setNewProduct]=useState({Name:'',Price:0,City:'',Stock:false})
    function handleName(e){
        setProduct(
            {
                Name: e.target.value,
                Price:product.Price,
                City : product.City,
                Stock: product.Stock
            }
        )

    }
    function handlePrice(e){
        setProduct(
            {
                Name: product.Name,
                Price:e.target.value,
                City : product.City,
                Stock: product.Stock
            }
        )
    }
    function handleCity(e){
        setProduct(
            {
                Name: product.Name,
                Price:product.Price,
                City : e.target.value,
                Stock: product.Stock
            }
        )

    }
    function handleStock(e){
        setProduct(
            {
                Name: product.Name,
                Price:product.Price,
                City : product.City,
                Stock: e.target.checked
            }
        )

    }
    return(
        <div className="container-fluid">
         <div className="row">
            <div className="col-3">
              <h2>Register product</h2>
              <dl>
                <dt>Name</dt>
                <dd ><input type="text" className="form-control" onChange={handleName}></input></dd>
                <dt>Price</dt>
                <dd ><input type="text" className="form-control" onChange={handlePrice}/></dd>
                <dt>city</dt>
                <dd>
                    <select className="form-select" onChange={handleCity}>
                        <option>delhi</option>
                        <option>hyderabad</option>
                    </select>
                </dd>
                <dt>stock</dt>
                <dd className="form-switch">
                    <input onChange={handleStock} className="form-check-input" type="checkbox"/>
                </dd>
              </dl>
              <button className="btn btn-primary w-100"></button>
            </div>
            <div className="col-9">
                <h2>product details</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{product.Name}</dd>
                    <dt>Price</dt>
                    <dd>{product.Price}</dd>
                    <dt>City</dt>
                    <dd>{product.City}</dd>
                    <dt>Stock</dt>
                    <dt>{product.stock==true ? "available" :"out of stock"}</dt>
                </dl>
            </div>
         </div>
        </div>
    )
}