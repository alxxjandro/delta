import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  const handleDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <div>
      <h1>Welcome to deltaDrive</h1>
      <button onClick={handleDashboard}>Go to my dashbord!</button>
    </div>
  )
}
