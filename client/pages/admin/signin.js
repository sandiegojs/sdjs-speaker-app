
import withoutAuth from '../../hoc/withoutAuth';
import { useAuth } from '../../providers/auth';

const AdminSignin = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { setAuthenticated } = useAuth();

    const submitHandler = async event => {
        event.preventDefault();
        const response = await fetch('http://localhost:1337/auth/local', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ identifier: username, password })
        });
        if (response.status === 200) {
          setAuthenticated(true);
        } else {
          console.error('Login error', response);
        }
      };

    return (
        <div id='admin-top-div'>
				<div className='signUp-container'>
					<div className='form-container login'>
						<form onSubmit={submitHandler}>
							<h3>SDJS Admin Login</h3>
							<div className="container">
								<label htmlFor="username"><b>Username</b></label>
								<input type="text" placeholder="Username" id='username' name="username" value={username}
              onChange={e => setUsername(e.target.value)} required />
								<label htmlFor="password"><b>Password</b></label>
								<input type="password" placeholder="Password" id='password' name="password"  value={password}
              onChange={e => setPassword(e.target.value)} required />
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


export default withoutAuth(AdminSignin);
