import useAuthStore from '../zustand/useAuthStore'

export default function Dashboard() {
  const user = useAuthStore((state) => state.user)
  const setUser = useAuthStore((state) => state.setUser)

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <h1>Welcome to the dashboard! {user?.userName}</h1>
      <button onClick={handleLogout}>log out</button>
    </div>
  )
}
