import type { ICoverLetterPDFPayload, ICoverLetterResponse } from '../../types/Interfaces'
import {
  Modal,
  Group,
  Button,
  Stack,
  Paper,
  Divider,
  Text,
  ScrollArea,
} from '@mantine/core'
import { useAuth } from '../../hooks/useAuth'
import { IconDownload, IconEdit } from '@tabler/icons-react'
import CLS from '../../../api/coverLetterService'
import classes from '../../styles/coverLetters.module.css'
import CoverLetterPage from './CoverLetterPage'

interface PreviewModalProps {
  letter: ICoverLetterResponse
  opened: boolean
  onClose: () => void
}

export default function PreviewModal({ letter, opened, onClose }: PreviewModalProps) {
  const { user } = useAuth()

  const handleDownload = async () => {
    if (!user) return

    try {
      const payload = {
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        letter: {
          content: letter.content,
          createdAt: new Date(letter.createdAt).toISOString(),
        },
      } as ICoverLetterPDFPayload

      const response = await CLS.downloadCoverLetter(payload)
      if (!response.ok) throw new Error('Failed to generate PDF')

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')

      a.href = url
      a.download = `${letter.title}.pdf`
      a.click()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="xl"
      radius="md"
      title={
        <Text fw={900} size="xl">
          {letter.title}
        </Text>
      }
      className={classes.modalRoot}
    >
      <Stack gap="sm">
        <ScrollArea h={600} type="always" scrollbarSize={8}>
          <Group justify="center">
            <Paper shadow="xl" radius="md" p="md" withBorder>
              <CoverLetterPage letter={letter} size={8} />
            </Paper>
          </Group>
        </ScrollArea>

        <Divider />

        <Group justify="end">
          <Group>
            <Button
              size="xs"
              variant="default"
              leftSection={<IconEdit size={14} />}
              onClick={() => {}}
            >
              Edit
            </Button>

            <Button
              size="xs"
              color="primary.7"
              leftSection={<IconDownload size={14} />}
              onClick={handleDownload}
            >
              Download
            </Button>
          </Group>
        </Group>
      </Stack>
    </Modal>
  )
}
