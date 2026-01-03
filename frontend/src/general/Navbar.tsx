import { Group, Text, Image, Textarea, ActionIcon, Divider } from '@mantine/core'
import { IconSearch, IconList, IconLayoutGrid } from '@tabler/icons-react'
import { useState, useEffect } from 'react'
import { useViewModeStore } from '../zustand/useViewModeStore'
import { useAuth } from '../hooks/useAuth'
import UserMenu from './UserMenu'

export default function Navbar() {
  /**
   * States to hold the user, viewModes and display for the avatar pictures
   */
  const { user, logout } = useAuth()
  const { setView } = useViewModeStore()
  const [avatarName, setAvatarName] = useState<string | null>(null)

  /**
   * Effect to update the avatar PFP every time the user changes
   */
  useEffect(() => {
    if (user) {
      setAvatarName(user.username?.slice(0, 2).toLocaleUpperCase() ?? null)
    }
  }, [user])

  return (
    <>
      <Group justify="space-between" px={20} py={16} h="8dvh">
        <Group>
          <Image src="/delta.svg" w={24} />
          <Text size="xl" fw={600} ml="-10">
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
            onClick={() => setView('GRID')}
          >
            <IconLayoutGrid size={18} color="rgba(0, 0, 0, 1)" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            aria-label="list view"
            color="rgba(235, 235, 235, 1)"
            onClick={() => setView('LIST')}
          >
            <IconList size={18} color="rgba(0, 0, 0, 1)" />
          </ActionIcon>

          <UserMenu
            avatarName={avatarName}
            onSettings={() => console.log('go to settings')}
            onLogout={logout}
          />
        </Group>
      </Group>
      <Divider />
    </>
  )
}
