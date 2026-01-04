import { Group, Stack, Title, Text, Button } from '@mantine/core'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router'
import { useCoverLetters } from '../hooks/useCoverLetters'
import { CoverLetterCard } from '../general/newCoverLetters/CoverLetterCards'
import { useEffect } from 'react'

export default function CoverLetters() {
  const navigate = useNavigate()
  const { coverLetters, loading } = useCoverLetters()

  useEffect(() => {
    console.log(coverLetters)
  }, [coverLetters])

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
      <Stack gap="xs">
        {coverLetters &&
          coverLetters.map((letter) => (
            <CoverLetterCard
              key={letter.id}
              letter={letter}
              onClick={(l) => {
                console.log('open letter', l.id)
              }}
              onPreview={(l) => {
                console.log('preview letter', l.id)
              }}
            />
          ))}
      </Stack>
    </Stack>
  )
}
