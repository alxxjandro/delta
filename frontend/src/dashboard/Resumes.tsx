import { Stack, Title, Text } from '@mantine/core'

export default function Resumes() {
  return (
    <Stack gap={2} py={16} px={8}>
      <Title mb={0}>Resumes</Title>
      <Text fw={600} c="gray.8" lh={0.8}>
        Create and manage your resumes
      </Text>
    </Stack>
  )
}
