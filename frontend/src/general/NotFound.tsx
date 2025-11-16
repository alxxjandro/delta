import { Paper, Text, Button, Stack, Center, Image, Group } from '@mantine/core'
import { useNavigate } from 'react-router'

export default function NotFound() {
  const navigate = useNavigate()
  const handleGoHome = () => navigate('/')

  return (
    <Center h="100vh">
      <Paper withBorder shadow="md" p="xl" radius="md" w={420}>
        <Stack align="center">
          <Group align="center" justify="start" w="100%" gap={8}>
            <Image src="/delta.svg" w={22} />
            <Text size="xl" fw={600}>
              Page not found
            </Text>
          </Group>

          <Text c="gray.4" ta="start">
            The page you're looking for does not exist or was moved.
          </Text>

          <Button onClick={handleGoHome} fullWidth>
            Go back home
          </Button>
        </Stack>
      </Paper>
    </Center>
  )
}
