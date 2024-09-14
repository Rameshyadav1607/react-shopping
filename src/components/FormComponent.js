import { useState } from "react"
export default function FormComponent(){
    const [users]=useState([
        {UserId:'john'},
        {UserId:'john12'},
        {UserId:'johndavid'},
        {UserId:'john_nit'}
    ]);
    return(
        <>
        <div className="container-fluid">
            <h2>Register User</h2>
      <dl>
        <dt>USER ID</dt>
        <dd><input type="test"/></dd>
      </dl>
        </div>
        </>
    )
}