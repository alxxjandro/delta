import { Menu, Avatar } from '@mantine/core'
import { IconSettings, IconLogout } from '@tabler/icons-react'

/**
 * Interface describing the props the componente receives
 */
interface UserMenuProps {
  avatarName?: string | null
  onSettings?: () => void
  onLogout?: () => void
}

export default function UserMenu({ avatarName, onSettings, onLogout }: UserMenuProps) {
  return (
    <Menu position="bottom-end" shadow="md" width={180}>
      <Menu.Target>
        <Avatar
          variant="filled"
          size={34}
          radius="xl"
          color="rgba(0, 0, 0, 1)"
          name={avatarName || 'U'}
          style={{ cursor: 'pointer' }}
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>

        <Menu.Item leftSection={<IconSettings size={16} />} onClick={onSettings}>
          Settings
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item color="red" leftSection={<IconLogout size={16} />} onClick={onLogout}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
