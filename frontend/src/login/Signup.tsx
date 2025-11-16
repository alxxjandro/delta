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
  const handleCreateAccount = () => {}

  return (
    <Center h="100vh">
      <Paper withBorder shadow="md" p="xl" radius="md" w={380}>
        <Stack gap="lg">
          <Group justify="space-between" align="center">
            <Text size="xl" fw={600}>
              Create an account
            </Text>
            <Image src="/delta.svg" w={26} />
          </Group>

          <Stack gap="sm">
            <TextInput label="Username" placeholder="alxxjandro" required />

            <TextInput label="Email" placeholder="you@example.com" required />

            <PasswordInput label="Password" placeholder="Your password" required />

            <PasswordInput
              label="Confirm password"
              placeholder="Re-enter password"
              required
            />
          </Stack>

          <Button fullWidth onClick={handleCreateAccount} mt={20}>
            Create account
          </Button>
        </Stack>
      </Paper>
    </Center>
  )
}
