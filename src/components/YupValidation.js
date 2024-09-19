import { Formik, useFormik } from "formik";
import * as yup from "yup";

export default function YupValidation() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Email: '',
            Age: '',
            Mobile: ''
        },
        validationSchema: yup.object({
            UserName: yup.string()
                .required("User name is required")
                .min(4, "Name too short")
                .max(10, "Name too long"),
            Email: yup.string()
                .required("Email required")
                .email("Invalid email"),
            Age: yup.number()
                .required("Age is required")
                .typeError("Age must be a number") // Custom message for non-number
                .positive("Age must be greater than 0") // Ensure positive number
                .integer("Age must be an integer"), // Ensure integer
            Mobile: yup.string()
                .required("Mobile number is required")
                .length(10, "invalid") // Check length
                .matches(/^[0-9]+$/, "Mobile number must contain only digits") // Ensure only digits
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <div className="container-fluid" >
            <form className="justify-content-center" onSubmit={formik.handleSubmit} >
                <h2>User Register</h2>
                <dl>
                    <dt>UserName</dt>
                    <dd><input {...formik.getFieldProps("UserName")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    
                    <dt>Age</dt>
                    <dd><input {...formik.getFieldProps("Age")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    
                    <dt>Email</dt>
                    <dd><input {...formik.getFieldProps("Email")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    
                    <dt>Mobile</dt>
                    <dd><input {...formik.getFieldProps("Mobile")} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
