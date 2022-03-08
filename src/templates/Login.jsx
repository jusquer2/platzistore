import React, {useRef} from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';
const Login = () => {
	/**
	 * HOOK para obtener una referencia a los datos de un objeto con información mutable
	 * Crea una referencia al formulario
	 */
	const form = useRef(null);
	/**
	 * form data es parte de JavaScript permite instanciar todos los elementos de un formulario y los 
	 * va capturar conforme sean llenados
	 */
	const handleSumbmit = (event)=>{
		event.preventDefault();
		const formData = new FormData(form.current);
		const data ={
			username:formData.get('email'),
			password:formData.get('password')
		}
		console.log(data);
	}
	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button className="primary-button login-button" onClick={handleSumbmit}>
						Log in
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button" >Sign up</button>
			</div>
		</div>
	);
}

export default Login;
