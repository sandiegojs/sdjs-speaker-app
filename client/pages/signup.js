import React, { useState } from 'react';

const Signup = () => {

    const [data, setData] = useState({
        speakerName: '',
        speakerEmail: '',
        speakerPhone: '',
        topic: '',
        description: ''
    });

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const register = async e => {
        e.preventDefault();
        const response = await fetch(`${process.env.API_BASE_URL}/talks`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              speaker_name: data.speakerName,
              speaker_email: data.speakerEmail,
              speaker_phone: data.speakerPhone,
              description: data.description,
              topic: data.topic
            })
        });
    }

    return (
        <div className='signUp-container'>
                <div className='form-container'>
                    <form>
                        <h3>Speaker Registration</h3>
                        <div>
                            <label htmlFor='speaker-name'>Name: </label>
                            <input name='speakerName' id='speakerName' onChange={handleChange} type='text'required />
                        </div >
                        <div>
                            <label htmlFor='speaker-email'>Email: </label>
                            <input type="email" id="speakerEmail" onChange={handleChange} name="speakerEmail" required  />
                        </div>
                        <div>
                            <label htmlFor='speaker-phone'>Phone Number: </label>
                            <input type="tel" name="speakerPhone" id='speakerPhone' onChange={handleChange} required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" format="### ### ####" />
                        </div>
                        <div>
                            <label htmlFor='event-date'>Date Requested: </label>
                            <select name='date' id='event-date' type='select' required>
                                <option>Select a Date</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='topic'>Topic:</label>
                            <input name='topic' id='topic' onChange={handleChange} type='text' required  />
                        </div>
                        <div>
                            <label htmlFor='description'>Description: </label>
                            <textarea name='description' id='description' onChange={handleChange} type='text' required />
                        </div>
                        <div>
                            <button className='btn' id='speaker-submit' onClick={register}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Signup;
