import { Stack, Title, Text } from '@mantine/core'

export default function CoverLetters() {
  return (
    <Stack gap={2} py={16} px={8}>
      <Title mb={0}>Cover Letters</Title>
      <Text fw={600} c="gray.8" lh={0.8}>
        Craft compelling cover letters for your applications
      </Text>
    </Stack>
  )
}
