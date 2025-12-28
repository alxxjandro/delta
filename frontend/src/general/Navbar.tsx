import type { viewType } from '../types/Interfaces'
import { Avatar, Group, Text, Image, Textarea, ActionIcon } from '@mantine/core'
import { IconSearch, IconList, IconLayoutGrid } from '@tabler/icons-react'
import { useState, useEffect } from 'react'
import useAuthStore from '../zustand/useAuthStore'

export default function Navbar() {
  const user = useAuthStore((s) => s.user)

  const [avatarName, setAvatarName] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<viewType>('grid')

  useEffect(() => {
    if (user) {
      setAvatarName(user.username?.slice(0, 2).toLocaleUpperCase() ?? null)
    }
  }, [user])

  return (
    <Group justify="space-between" px={20} py={10}>
      <Group>
        <Image src="/delta.svg" w={24} />
        <Text size="xl" fw={600}>
          JobScoped
        </Text>

        <Textarea
          variant="filled"
          leftSection={<IconSearch size={16} />}
          placeholder="Search resumes, jobs, templates..."
          onChange={() => {}}
          radius={4}
          w={400}
          rows={1}
        />
      </Group>
      <Group gap={8}>
        <ActionIcon
          size="lg"
          aria-label="list view"
          color="rgba(235, 235, 235, 1)"
          onClick={() => setViewMode('grid')}
        >
          <IconLayoutGrid size={18} color="rgba(0, 0, 0, 1)" />
        </ActionIcon>
        <ActionIcon
          size="lg"
          aria-label="list view"
          color="rgba(235, 235, 235, 1)"
          onClick={() => setViewMode('list')}
        >
          <IconList size={18} color="rgba(0, 0, 0, 1)" />
        </ActionIcon>

        <Avatar
          variant="filled"
          size="34"
          radius="xl"
          color="rgba(0, 0, 0, 1)"
          name={avatarName || 'U'}
        />
      </Group>
    </Group>
  )
}
