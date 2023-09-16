import React, { useState } from 'react'
import OAuthPopup from '../components/OAuthPopup'

const App = () => {
	const [payload, setPayload] = useState({})

	const handleReceiveMessage = (event) => {
		if (event.origin === window.location.origin) {
			console.log('Received access token:', event.data)
			setPayload(event.data.payload)
		}
	}

	return (
		<div>
			<OAuthPopup
				url='/login'
				name='OAuthPopup'
				receiveMessage={handleReceiveMessage}
			/>
			{payload.token && (
				<div>
					<h2>Username</h2>
					<pre>{payload.username}</pre>
					<h2>Password</h2>
					<pre>{payload.password}</pre>
					<h2>Token</h2>
					<pre>{payload.token}</pre>
				</div>
			)}
		</div>
	)
}

export default App
