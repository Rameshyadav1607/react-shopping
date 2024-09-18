import { Formik, useFormik } from "formik"
export default function FormikValidation(){
    // here userdetails is nothing about colleting data from below form
     function VerifyUserDetails(userDetails){
         // errors is an object
        const errors={};
        if(userDetails.UserName==""){
            errors.UserName="User Name Required";
        }
        else if(userDetails.UserName.length<4){
                    errors.UserName="Name too short";
        }
        else if(userDetails.UserName.length>10){
            errors.UserName="Name to long..";
        }
        if(userDetails.Age==""){
            errors.Age="Age Required";
        }
        else if(isNaN(userDetails.Age)){
              errors.Age="Age must be number";
        }
        if(userDetails.Email==""){
            errors.Email="Email Required";
        }
        else if(userDetails.Email.indexOf("@")<=2){
            errors.Email="invalid email";
        }//regular expression for validating mobile number
        if(userDetails.Mobile==""){
            errors.Mobile="Mobile number required"
        }
        else if(userDetails.Mobile.match(/\+91\d{10}/)){
            errors.Mobile="";
        }else{
           errors.Mobile="Invalid mobile"
        }
        return errors;

     }
     const formik=useFormik({
        initialValues:{
            UserName :'',
            Age: 0,
            Email:'',
            Mobile: ''
        },
        validate:VerifyUserDetails,
        onSubmit:values =>{
            alert(JSON.stringify(values));
        }
     })
    return(
    
        <div className="container-fluid" >
            <form onSubmit={formik.handleSubmit}>
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" name="UserName" onChange={formik.handleChange}></input></dd>
                <dd className="text-danger">{formik.errors.UserName}</dd>
                <dt>age</dt>
                <dd><input type="text" name="Age" onChange={formik.handleChange}></input></dd>
                <dd className="text-danger">{formik.errors.Age}</dd>
                <dt>Email</dt>
                <dd><input type="text" name="Email" onChange={formik.handleChange}></input></dd>
                <dd className="text-danger">{formik.errors.Email}</dd>
                <dt>Mobile Number</dt>
                <dd><input type="text" onChange={formik.handleChange} name="Mobile"/></dd>
                <dd className="text-danger">{formik.errors.Mobile}</dd>
            </dl>
            <button>Register</button>
            </form>
                
        </div>
      
    )
}