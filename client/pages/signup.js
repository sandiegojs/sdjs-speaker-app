const Signup = () => {
    return (
        <div className='signUp-container'>
                <div className='form-container'>
                    <form>
                        <h3>Speaker Registration</h3>
                        <div>
                            <label htmlFor='speaker-name'>Name: </label>
                            <input name='speakerName' id='speakerName' type='text'required />
                        </div >
                        <div>
                            <label htmlFor='speaker-email'>Email: </label>
                            <input type="email" id="speakerEmail" name="speakerEmail" required  />
                        </div>
                        <div>
                            <label htmlFor='speaker-phone'>Phone Number: </label>
                            <input type="tel" name="phone" id='speakerPhone' required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" format="### ### ####" />
                        </div>
                        <div>
                            <label htmlFor='event-date'>Date Requested: </label>
                            <select name='date' id='event-date' type='select' required>
                                <option>Select a Date</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='topic'>Topic:</label>
                            <input name='topic' id='topic' type='text' required  />
                        </div>
                        <div>
                            <label htmlFor='description'>Description: </label>
                            <textarea name='description' id='description' type='text' required />
                        </div>
                        <div>
                            <button className='btn' id='speaker-submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Signup;
