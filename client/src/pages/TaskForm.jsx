import React from 'react'
import { Formik, Form } from 'formik'
export default function TaskForm() {
    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    description: ''
                }}
                onSubmit={(values) => {
                    console.log(values) // {title: 'title', description: 'description'}

                } }
            >
                {({handleChange,handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>

                        <label htmlFor="">title</label>
                        <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        placeholder='write a title' 
                        onChange={handleChange}/>

                        <label >description</label>
                        <textarea 
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        placeholder='write a description'
                        onChange={handleChange}
                        ></textarea>

                        <button type='submit'>Save</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
