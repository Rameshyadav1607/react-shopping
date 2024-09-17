import { Formik, useFormik } from "formik";

export default function FormikDemo() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: '',
            City: '',
            Subscribe: false  // Correct spelling of Subscribe
        },
        onSubmit: values => {
            alert(`${values.UserName}\nSubscription: ${(values.Subscribe === true) ? "Subscribed" : "Not Subscribed"}`);
        }
    });

    return (
        <>
            <div className="container-fluid">
                <form onSubmit={formik.handleSubmit}>
                    <h2>Register User</h2>
                    <dl>
                        <dt>User name</dt>
                        <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text" /></dd>
                        <dt>Password</dt>
                        <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password} type="password" /></dd>
                    </dl>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                            <option>Hyd</option>
                            <option>Kamareddy</option>
                            <option>Pitlam</option>
                        </select>
                    </dd>
                    <dt>Subscribe</dt>
                    <dd className="form-switch">
                        <input className="form-check-input" onChange={formik.handleChange} name="Subscribe" checked={formik.values.Subscribe} type="checkbox" />
                        <label htmlFor="Subscribe"> Yes</label> {/* Moved label text outside input */}
                    </dd>
                    <button type="submit">Register</button>
                </form>
                <h2>User Details</h2>
                {formik.values.UserName}
            </div>
        </>
    );
}
