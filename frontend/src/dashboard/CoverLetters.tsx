import { Group, Stack, Title, Text, Button } from '@mantine/core'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router'

export default function CoverLetters() {
  const navigate = useNavigate()

  return (
    <Group justify="space-between" px={10}>
      <Stack gap={2} py={16} px={8}>
        <Title mb={0}>Cover Letters</Title>
        <Text fw={600} c="gray.8" lh={0.8}>
          Craft compelling cover letters for your applications
        </Text>
      </Stack>
      <Button
        justify="center"
        px={30}
        rightSection={<IoMdAdd size={14} />}
        variant="default"
        onClick={() => navigate('/cover-letter/new')}
      >
        New Cover Letter
      </Button>
    </Group>
  )
}
