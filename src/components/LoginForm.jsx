import React, { useState } from 'react'

const LoginForm = () => {
	const [payload, setPayload] = useState({
		username: '',
		password: '',
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setPayload((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}


	const handleSubmit = (e) => {
		e.preventDefault()
		const { username, password } = payload
		if (!username || !password) return false
		
		window.opener.postMessage({
			source: 'lma-login-redirect',
			payload: {
				token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
				username: username,
				password: password
			}
		})

		window.close()
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Username:
				<input
					type='text'
					name='username'
					value={payload.username}
					onChange={handleChange}

				/>
			</label>
			<br />
			<label>
				Password:
				<input
					type='password'
					name='password'
					value={payload.password}
					onChange={handleChange}
				/>
			</label>
			<br />
			<button type='submit'>Login</button>
		</form>
	)
}

export default LoginForm
