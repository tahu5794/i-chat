import React, { useState } from 'react'


export default function CaseChanger() {

    const toUpper = () => {

        if (!text) {
            return (
                alert('Please Type Something!')
            )
        }

        const newText = text.toUpperCase();
        setText(newText);
    }

    const toLower = () => {

        if (!text) {
            return (
                alert('Please Type Something!')
            )
        }

        const newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (

        <div className='container my-5'>

            <div className='container'>

                <div className="mb-3 text-light">
                    <label htmlFor="textArea" className="form-label"><h1>Case Changer</h1></label>
                    <textarea className="form-control bg-transparent bg-gradient text-light" min-width="400px" onChange={handleOnChange} value={text} id="textArea" rows="8" placeholder='Type Something...'></textarea>
                </div>
                <div className="mb-3 d-flex justify-content-center">
                    <button className="btn btn-md btn-success mx-1" onClick={toUpper}>Convert To UPPERCASE</button>
                    <button className="btn btn-md btn-warning mx-1" onClick={toLower}>Convert To lowercase</button>
                </div>

            </div>

            <div className="container text-light my-5">

                <h1>Analytics</h1>
                <p><b>{text?.length ? (text.trim(" ")).split(" ")?.length : 0}</b> words, <b>{text?.length}</b>   characters.</p>
                <p><b>{text?.length ? (0.008 * (text.trim(" ")).split(" ")?.length).toFixed(2) : 0}</b> Minutes to read.</p>

            </div>

        </div>
    )
}
