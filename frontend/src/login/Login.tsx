import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Text,
  Center,
  Image,
  Group,
} from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../zustand/useAuth'

export default function Login() {
  const setUser = useAuthStore((state) => state.setUser)
  const navigate = useNavigate()

  const handleLogin = () => {
    setUser({
      userName: 'alonso',
      userEmail: 'alonso@email.com',
    })
    navigate('/dashboard')
  }

  return (
    <Center h="100vh">
      <Paper withBorder shadow="md" p="xl" radius="md" w={360}>
        <Stack>
          <Group justify="space-between">
            <Text size="xl" fw={600}>
              Sign in
            </Text>
            <Image src="/delta.svg" w={24} />
          </Group>

          <TextInput label="Email" placeholder="you@example.com" />
          <PasswordInput label="Password" placeholder="Your password" />

          <Button onClick={handleLogin} fullWidth>
            Login
          </Button>

          <Button variant="subtle" fullWidth onClick={() => navigate('/signup')}>
            Create account
          </Button>
        </Stack>
      </Paper>
    </Center>
  )
}
