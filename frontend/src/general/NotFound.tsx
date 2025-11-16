import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()
  const handleGoHome = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>The page you're looking for doesn't exist!</h1>
      <p onClick={handleGoHome}>go back home</p>
    </div>
  )
}

export default NotFound
