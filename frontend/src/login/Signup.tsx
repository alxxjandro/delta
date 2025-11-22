import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useForm } from '@mantine/form'
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

export default function Signup() {
  const navigate = useNavigate()
  const { signup, loading, error } = useAuth()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      name: (value) =>
        value.trim().length < 4 ? 'Name must have at least 4 characters' : null,

      username: (value) =>
        value.trim().length < 3 ? 'Username must have at least 3 characters' : null,

      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value.trim()) ? null : 'Invalid email address',

      password: (value) =>
        value.trim().length < 6 ? 'Password must be at least 6 characters' : null,

      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords do not match' : null,
    },
  })

  const handleCreateAccount = form.onSubmit(async (values) => {
    const result = await signup({
      name: values.name.trim(),
      username: values.username.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    })

    if (result?.success) navigate('/login')
  })

  return (
    <Center h="100vh">
      <Paper withBorder shadow="md" p="xl" radius="md" w={380} py={38}>
        <form onSubmit={handleCreateAccount}>
          <Stack gap="lg">
            <Group justify="space-between" align="center">
              <Text size="xl" fw={600}>
                Create an account
              </Text>
              <Image src="/delta.svg" w={26} />
            </Group>

            <Stack gap="sm">
              <TextInput
                label="Name"
                placeholder="Your name"
                withAsterisk
                {...form.getInputProps('name')}
              />
              <TextInput
                label="Username"
                placeholder="A cool username"
                withAsterisk
                {...form.getInputProps('username')}
              />
              <TextInput
                label="Email"
                placeholder="you@example.com"
                withAsterisk
                {...form.getInputProps('email')}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                withAsterisk
                {...form.getInputProps('password')}
              />
              <PasswordInput
                label="Confirm password"
                placeholder="Re-enter password"
                withAsterisk
                {...form.getInputProps('confirmPassword')}
              />
            </Stack>

            {!Object.keys(form.errors).length && error && (
              <Center>
                <Text size="xs" c="red">
                  {error}
                </Text>
              </Center>
            )}

            <Button type="submit" fullWidth loading={loading} mt={30}>
              Create account
            </Button>
          </Stack>
        </form>
      </Paper>
    </Center>
  )
}
