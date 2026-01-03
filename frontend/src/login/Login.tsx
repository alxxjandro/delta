import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
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
import { useForm } from '@mantine/form'

export default function Login() {
  const navigate = useNavigate()
  const { login, loading, error, isAuthenticated } = useAuth()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value.trim()) ? null : 'Enter a valid email address',
      password: (value) => (value.trim().length === 0 ? 'Password is required' : null),
    },
  })

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  const handleLogin = form.onSubmit(async (values) => {
    const result = await login(values.email.trim(), values.password.trim())
    if (result?.success) navigate('/dashboard')
  })

  return (
    <Center h="100vh">
      <Paper withBorder shadow="md" p="xl" radius="md" w={360}>
        <form onSubmit={handleLogin}>
          <Stack>
            <Group justify="space-between">
              <Text size="xl" fw={600}>
                Sign in
              </Text>
              <Image src="/delta.svg" w={24} />
            </Group>

            <TextInput
              label="Email"
              placeholder="you@example.com"
              key={form.key('email')}
              withAsterisk
              {...form.getInputProps('email')}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              key={form.key('password')}
              withAsterisk
              {...form.getInputProps('password')}
            />

            {error && (
              <Center>
                <Text size="xs" c="red">
                  {error}
                </Text>
              </Center>
            )}

            <Group grow pt={8}>
              <Button
                variant="outline"
                onClick={() => navigate('/signup')}
                disabled={loading}
              >
                Sign Up
              </Button>

              <Button type="submit" color="primary.7" loading={loading}>
                Login
              </Button>
            </Group>

            <Center w="100%">
              <Button
                variant="transparent"
                size="xs"
                onClick={() => console.log('forgot password')}
              >
                Forgot your password?
              </Button>
            </Center>
          </Stack>
        </form>
      </Paper>
    </Center>
  )
}
