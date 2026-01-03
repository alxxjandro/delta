import { Stack, Title, Text, Group, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IoMdAdd } from 'react-icons/io'
import ResumeModal from '../general/ResumeModal'

export default function Resumes() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <Group justify="space-between" px={10}>
      <ResumeModal opened={opened} onClose={close} />
      <Stack gap={2} py={16} px={8}>
        <Title mb={0}>Resumes</Title>
        <Text fw={600} c="gray.8" lh={0.8}>
          Create and manage your resumes
        </Text>
      </Stack>
      <Button
        justify="center"
        px={30}
        rightSection={<IoMdAdd size={14} />}
        variant="default"
        onClick={open}
      >
        New Resume
      </Button>
    </Group>
  )
}
