import { IconEdit } from '@tabler/icons-react'
import { LuBuilding2 } from 'react-icons/lu'
import { useDisclosure } from '@mantine/hooks'
import { RiSuitcaseLine } from 'react-icons/ri'
import { HiDotsVertical } from 'react-icons/hi'
import { Paper, Badge, Group, Text, Divider, Button, Stack } from '@mantine/core'
import { toneColorMap, type ICoverLetterResponse } from '../../types/Interfaces'
import classes from '../../styles/coverLetters.module.css'
import PreviewModal from './PreviewModal'
import CoverLetterPage from './CoverLetterPage'

interface CoverLetterCardProps {
  letter: ICoverLetterResponse
}

export function CoverLetterCard({ letter }: CoverLetterCardProps) {
  const [opened, { open, close }] = useDisclosure(false)

  const handleEdit = () => {
    return null
  }

  return (
    <>
      <PreviewModal letter={letter} opened={opened} onClose={close} />
      <Paper className={classes.card} shadow="sm" radius="md" onClick={open}>
        <div className={classes.preview}>
          <CoverLetterPage size={3} letter={letter} />

          <div className={classes.overlay}>
            <Stack gap={8}>
              <Button
                size="xs"
                color="primary.7"
                leftSection={<IconEdit size={14} />}
                onClick={handleEdit}
              >
                Edit
              </Button>
            </Stack>
          </div>
        </div>

        <div className={classes.content}>
          <Group justify="space-between" mb={4} wrap="nowrap">
            <Text fw={600} size="sm" truncate>
              {letter.title}
            </Text>
            <HiDotsVertical size={16} />
          </Group>

          <Group gap={6} wrap="nowrap">
            <LuBuilding2 size={14} />
            <Text size="sm" c="gray" truncate>
              {letter.company}
            </Text>
          </Group>

          <Group gap={6} mb={8} wrap="nowrap">
            <RiSuitcaseLine size={14} />
            <Text size="sm" c="gray" truncate>
              {letter.position}
            </Text>
          </Group>

          <Divider my={8} />

          <Group justify="space-between">
            <Badge size="sm" variant="light" color={toneColorMap[letter.tone]}>
              {letter.tone}
            </Badge>

            <Text size="xs" c="gray">
              {new Date(letter.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
              })}
            </Text>
          </Group>
        </div>
      </Paper>
    </>
  )
}
