import { Paper, Stack, Group, Text, ActionIcon, Box } from '@mantine/core'
import { IconDotsVertical } from '@tabler/icons-react'
import type { ICoverLetterResponse } from '../../types/Interfaces'

type Props = {
  letter: ICoverLetterResponse
  onClick?: (letter: ICoverLetterResponse) => void
  onToggleFavorite?: (letter: ICoverLetterResponse) => void
}

export function CoverLetterCard({ letter, onClick }: Props) {
  return (
    <Paper
      withBorder
      radius="md"
      p="sm"
      w={260}
      onClick={() => onClick?.(letter)}
      style={{ cursor: 'pointer' }}
    >
      <Stack gap="sm">
        <Box
          h={140}
          bg="gray.1"
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Fake text lines */}
          <Stack gap={6} p="sm">
            <Box h={8} w="40%" bg="gray.3" />
            <Box h={6} w="70%" bg="gray.3" />
            <Box h={6} w="90%" bg="gray.2" />
            <Box h={6} w="85%" bg="gray.2" />
            <Box h={6} w="60%" bg="gray.2" />
          </Stack>
        </Box>

        {/* Meta */}
        <Stack gap={2}>
          <Text fw={600} size="sm" lineClamp={1}>
            {letter.title}
          </Text>

          <Text size="xs" c="dimmed" lineClamp={1}>
            {letter.company} – {letter.position}
          </Text>
        </Stack>

        {/* Footer */}
        <Group justify="space-between">
          <Group gap={6}>
            {/* <Badge
              size="xs"
              variant="light"
              color="green"
            >
              {letter}
            </Badge> */}

            <Text size="xs" c="dimmed">
              {new Date(letter.createdAt).toLocaleDateString()}
            </Text>
          </Group>

          <ActionIcon variant="subtle" onClick={(e) => e.stopPropagation()}>
            <IconDotsVertical size={16} />
          </ActionIcon>
        </Group>
      </Stack>
    </Paper>
  )
}
