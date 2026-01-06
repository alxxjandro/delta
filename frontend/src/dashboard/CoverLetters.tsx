import { Group, Stack, Title, Text, Button, Box } from '@mantine/core'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { useCoverLetters } from '../hooks/useCoverLetters'
import { CoverLetterCard } from '../general/newCoverLetters/CoverLetterCards'
import Spinner from '../general/Spinner'

export default function CoverLetters() {
  const navigate = useNavigate()
  const { coverLetters, loading } = useCoverLetters()

  return (
    <Stack px={10}>
      <Group justify="space-between">
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
      <Box pos="relative">
        <Spinner isActive={loading} blur={false} />
        <Group>
          {coverLetters?.map((letter) => (
            <CoverLetterCard key={letter.id} letter={letter} />
          ))}
        </Group>
      </Box>
    </Stack>
  )
}
