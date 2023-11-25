import React from 'react'
import './form.css'


export default function Form() {

    function handleClick(e){
        e.preventDefault()
        alert(`Form Submitted!`)
        document.getElementById('myForm').reset();
    }


  return (
    <section id='contact' className='form-section'>
        <h1>Contact Me</h1>
        <div className="form-container">
        <form id='myForm' onSubmit={handleClick}>
            <div className="name-form size">
            <label>Name:</label>
            <input type="text" required />
            </div>
            <div className="email-form size">
                <label>Email:</label>
                <input type="email" required/>
            </div>
                <label id='message' className='size'>Message:</label>
            <div className="textarea-form size">
                <textarea id='textarea'  cols="50" rows="6" required></textarea>
            </div>
            <input className='submit-btn' type="submit"  />
        </form>
        </div>
    </section>
  )
}
