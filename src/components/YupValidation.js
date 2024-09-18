import { Formik, useFormik } from "formik";
import * as yup from "yup";

export default function YupValidation(){
     
    const formik=useFormik({
        initialValues:{
            UserName:'',
            Age :'',
            
        },
        validationSchema:
    })

    return(
       <>
       <div className="container-fluid">
        <form > 
            <h2>User Register</h2>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text"></input></dd>
                <dt>Age</dt>
                <dd><input type="text"></input></dd>
                <dt>Email</dt>
                <dd><input type="text"></input></dd>
                <dt>Mobile</dt>
                <dd><input type="text"></input></dd>
            </dl>
            <button>Register</button>
        </form>

       </div>
       </>
    )
}