import React,{useState} from 'react'
import { Formik,Form, useFormik,Field,ErrorMessage } from "formik";
import * as yup from "yup";
import TextError from './../Login/TextError';
import { Link } from 'react-router-dom'
const initialValues = {
    firtname:'',
    lastname:'',
    email: '',
    password:''
}

const validationSchema = yup.object().shape({
    firstname:yup.string().min(3).required('Required'),
    lastname:yup.string().min(3).required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required'),
});


    
export default function Signup() {
    const [formValues, setFormValues] = useState(null)
    const onSubmit=(values)=>{
        console.log('Form data', values)
    }
  return (
    <div className='grid grid-cols-4'>
        <div className='col-span-1'></div>
        <div className='my-28 mx-16 rounded-md shadow-md col-span-2'>
            <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            >
                {formik=>{
                    return(
                        <>
                            <h1 className="font-semibold text-3xl leading-5 p-5 text-center uppercase font-['Poppins']">Sign Up</h1>
                            <Form className='p-5 flex flex-col justify-center'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='mb-6'>
                                        <Field placeholder="First Name" type='text' id='firstname' name='firstname' className="w-full px-4 py-2 rounded-lg shadow-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                        <ErrorMessage name='firstname' component={TextError} />
                                    </div>
                                    <div className='mb-6'>
                                        <Field placeholder="Last Name" type='text' id='lastname' name='lastname' className="w-full px-4 py-2 rounded-lg shadow-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                        <ErrorMessage name='lastname' component={TextError} />
                                    </div>
                                </div>
                                <div className='mb-6'>                            
                                    <Field placeholder="Email address" type='text' id='email' name='email' className="w-full px-4 py-2 rounded-lg shadow-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    <ErrorMessage name='email' component={TextError} />
                                </div>
                                <div className='mb-6'>
                                    <Field placeholder="Password" type='password' id='password' name='password' className="w-full px-4 py-2 rounded-lg shadow-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                                    <ErrorMessage name='password' component={TextError} />
                                </div>
                                <div className='mx-auto'>
                                    <button type='submit' disabled={!formik.isValid || formik.isSubmitting} className="mx-14 bg-yellow-500 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl">
                                        SignUp
                                    </button>
                                </div>
                                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>
                                <div className='flex justify-center items-center rounded-lg shadow-sm hover:shadow-lg hover:cursor-pointer '>
                                    <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
                                    <p className='px-4 py-2 font-semibold text-center'>Login With Google</p>
                                </div>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0 text-center text-gray-400">
                                Already have an account?
                                <Link
                                    to="/login"
                                    className="text-yellow-400 hover:text-yellow-500 ml-3 transition duration-200 ease-in-out"
                                    >Login</Link>
                                </p>
                            </Form>
                            
                        </>
                    )
                }}
            </Formik>
        </div>
        <div className='col-span-1'></div>
    </div>
  )
}
