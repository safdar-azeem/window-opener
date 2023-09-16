import Root from '../pages/Root'
import LoginForm from '../components/LoginForm'
import { createBrowserRouter } from 'react-router-dom'

export const routes = createBrowserRouter([
	{
		path: '/',
		errorElement: <div>There was an error</div>,
		element: <Root />,
	},
	{
		path: '/login',
		errorElement: <div>There was an error</div>,
		element: <LoginForm />,
	},
])
