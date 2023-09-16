import React, { useEffect, useState } from 'react'

const OAuthPopup = ({ url, name, receiveMessage }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false)

	const handleLoginClick = () => {
		setIsPopupOpen(true)
	}

	useEffect(() => {
		if (!isPopupOpen) {
			return
		}
		const windowFeatures =
			'toolbar=no, menubar=no, width=600, height=700, top=100, left=100'

		const handlePopup = () => {
			window.removeEventListener('message', () => receiveMessage)

			if (!window.popup || window.popup.closed) {
				window.popup = window.open(url, name, windowFeatures)
			} else {
				window.popup.focus()
			}

			window.addEventListener('message', (event) => {
				receiveMessage(event)
				window.popup.close()
				setIsPopupOpen(false)
			})
		}

		handlePopup()

		return () => {
			window.removeEventListener('message', receiveMessage)
		}
	}, [isPopupOpen, url, name, receiveMessage])

	return (
		<div>
			{isPopupOpen && (
				<p>Please wait while we redirect you to the login page.</p>
			)}
			<button onClick={handleLoginClick}>Login with OAuth</button>
		</div>
	)
}

export default OAuthPopup
