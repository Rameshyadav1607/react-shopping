import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function YupValidationComponent() {
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik
                initialValues={{
                    UserName: '',
                    Email: '',
                    Age: '',
                    City: '',
                }}
                validationSchema={yup.object({
                    UserName: yup.string()
                        .required('Name is required')
                        .min(4, 'Name too small')
                        .max(10, 'Name too long'),
                    Email: yup.string()
                        .email('Invalid Email')
                        .required('Email Required'),
                    Age: yup.number()
                        .required('Age Required')
                        .positive('Age must be positive')
                        .integer('Age must be an integer'),
                    City: yup.string(),
                })}
                onSubmit={values => {
                    alert(JSON.stringify(values));
                }}
            >
                {props => (
                    <Form>
                        <div>
                            <dl>
                                <dt>User Name</dt>
                                <dd>
                                    <Field type="text" name="UserName" />
                                    <ErrorMessage name="UserName" component="div" className='text-danger' />
                                </dd>
                                <dt>Email</dt>
                                <dd>
                                    <Field type="text" name="Email" />
                                    <ErrorMessage name="Email" component="div" className='text-danger' />
                                </dd>
                                <dt>Age</dt>
                                <dd>
                                    <Field type="text" name="Age" />
                                    <ErrorMessage name="Age" component="div" className='text-danger' />
                                </dd>
                                <dt>City</dt>
                                <dd>
                                    <Field as="select" name="City">
                                        <option value="">Select a city</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Hyd">Hyd</option>
                                    </Field>
                                </dd>
                            </dl>
                            <button type="submit" disabled={(props.isValid)? false:true}>Register</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
