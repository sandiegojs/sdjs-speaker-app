const AdminSignin = () => {
    return (
        <div id='admin-top-div'>
				<div className='signUp-container'>
					<div className='form-container login'>
						<form >
							<h3>SDJS Admin Login</h3>
							<div className="container">
								<label htmlFor="username"><b>Username</b></label>
								<input type="text" placeholder="Username" id='username' name="username" required />
								<label htmlFor="password"><b>Password</b></label>
								<input type="password" placeholder="Password" id='password' name="password" required />
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
