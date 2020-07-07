import React from 'react';
import useAuth from '../../providers/auth';

const AdminSignin = () => {
  const { login } = useAuth();

  const [inputs, setInputs] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(inputs.email, inputs.password);
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id='admin-top-div'>
      <div className='signUp-container'>
        <div className='form-container login'>
          <form onSubmit={handleSubmit}>
            <h3>SDJS Admin Login</h3>
            <div className="container">
              <label htmlFor="username"><b>Username</b></label>
              <input type="text" placeholder="Username" id='username' name="email" value={inputs.email} onChange={handleInputChange}
              required />
              <label htmlFor="password"><b>Password</b></label>
              <input type="password" placeholder="Password" id='password' value={inputs.password} onChange={handleInputChange} name="password" required />
              <button type="submit" id='submit' className='btn'>Login</button>
              <label id='remember'>
                <input type="checkbox" name="remember" /> Remember me
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default AdminSignin;
