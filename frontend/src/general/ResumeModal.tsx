import { Modal, Stack, Title, Text, SimpleGrid, Card } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import {
  IoDocumentTextOutline,
  IoCloudUploadOutline,
  IoGridOutline,
} from 'react-icons/io5'

/**
 * Interface describing the props the modal expects
 */
interface ResumeModalProps {
  opened: boolean
  onClose: () => void
}

export default function ResumeModal({ opened, onClose }: ResumeModalProps) {
  /**
   * Navegation constant
   */
  const navigate = useNavigate()

  /**
   * Helper function to close and navegate to the path on select
   */
  const handleNavigate = (path: string) => {
    onClose()
    navigate(path)
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="lg"
      radius="md"
      title={
        <>
          <Text fw={800} size="26px" mb={0}>
            Create a new resume
          </Text>
          <Text c="dimmed" size="sm">
            Choose how you want to get started
          </Text>
        </>
      }
    >
      <Stack gap="sm" mt="0">
        <SimpleGrid cols={3} spacing="md">
          <Card
            withBorder
            radius="md"
            p="lg"
            component="button"
            onClick={() => handleNavigate('/resume/new')}
            style={{ cursor: 'pointer' }}
          >
            <Stack gap={2} pt={6}>
              <Stack align="center" gap="0">
                <IoDocumentTextOutline size={32} />
                <Text fw={600}>From scratch</Text>
              </Stack>
              <Text size="sm" c="dimmed" ta="center">
                Start with an empty resume
              </Text>
            </Stack>
          </Card>

          <Card
            withBorder
            radius="md"
            p="lg"
            component="button"
            onClick={() => handleNavigate('/resume/import')}
            style={{ cursor: 'pointer' }}
          >
            <Stack gap={2} pt={6}>
              <Stack align="center" gap="0">
                <IoCloudUploadOutline size={32} />
                <Text fw={600}>Import PDF</Text>
              </Stack>
              <Text size="sm" c="dimmed" ta="center">
                Upload an existing resume
              </Text>
            </Stack>
          </Card>

          <Card
            withBorder
            radius="md"
            p="lg"
            component="button"
            onClick={() => handleNavigate('/resume/template')}
            style={{ cursor: 'pointer' }}
          >
            <Stack gap={2} pt={6}>
              <Stack align="center" gap="0">
                <IoGridOutline size={32} />
                <Text fw={600}>From template</Text>
              </Stack>
              <Text size="sm" c="dimmed" ta="center">
                Use an existing resume
              </Text>
            </Stack>
          </Card>
        </SimpleGrid>
      </Stack>
    </Modal>
  )
}
