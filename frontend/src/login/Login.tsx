import { useNavigate } from 'react-router-dom'
import useAuthStore from '../zustand/useAuth'

export default function Login() {
  const user = useAuthStore((state) => state.user)
  const setUser = useAuthStore((state) => state.setUser)
  const navigate = useNavigate()

  const handleLogin = () => {
    setUser({
      userName: 'alonso',
      userEmail: 'alonso@email.com',
    })
    navigate('/dashboard')
  }

  const handleLogout = () => {
    setUser(null)
  }

  const handleDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <div>
      <h1>Welcome to the login page!</h1>
      {user ? (
        <div>
          <h1>currently logged as {user.userName}</h1>
          <button onClick={handleLogout}>log out</button>
        </div>
      ) : (
        <div>
          <h1>no session logged</h1>
          <button onClick={handleLogin}>login as guest</button>
        </div>
      )}
      <button onClick={handleDashboard}>go to dashboard</button>
    </div>
  )
}
