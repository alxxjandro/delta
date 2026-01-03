import { Stack, Title, Text } from '@mantine/core'

export default function Applications() {
  return (
    <Stack gap={2} py={16} px={8}>
      <Title mb={0}>Applications</Title>
      <Text fw={600} c="gray.8" lh={0.8}>
        Track your job applications and their status
      </Text>
    </Stack>
  )
}
