import React from 'react';
import { useMutation } from "@apollo/react-hooks";
import LOGIN_MUTATION from "../../apollo/mutations/auth/login";
import { AuthToken } from '../../lib/auth';

const AdminSignin = () => {
  const [login] = useMutation(LOGIN_MUTATION);

  const initialValues = {
    identifier: "samanthakem@gmail.com",
	  password: "hacker07"
  };

  const [inputs, setInputs] = React.useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ variables: { input: {
      identifier: "samanthakem@gmail.com",
      password: "hacker07"
    } }}).then(({ data: { login } }) => {
      AuthToken.storeToken(login.jwt);
    })
    alert(`TODO add login endpoint! ${JSON.stringify(inputs)}`)
  };

  return (
    <div id='admin-top-div'>
      <div className='signUp-container'>
        <div className='form-container login'>
          <form onSubmit={handleSubmit}>
            <h3>SDJS Admin Login</h3>
            <div className="container">
              <label htmlFor="username"><b>Username</b></label>
              <input type="text" placeholder="Username" id='username' name="username" value={inputs.identifier} required />
              <label htmlFor="password"><b>Password</b></label>
              <input type="password" placeholder="Password" id='password' value={inputs.password} name="password" required />
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
