import type { NavbarButton } from '../types/Interfaces'
import classes from '../styles/sidebar.module.css'
import { MdAdd } from 'react-icons/md'
import { Button, Stack } from '@mantine/core'
import { RiSuitcaseLine } from 'react-icons/ri'
import { useSectionStore } from '../zustand/useSectionStore'
import { GrDocumentText, GrDocumentUser } from 'react-icons/gr'

/**
 * Mapper to hold the existing sections
 */
const navbarSections: NavbarButton[] = [
  { id: 'resumes', icon: GrDocumentText, label: 'Resumes' },
  { id: 'cover-letters', icon: GrDocumentUser, label: 'Cover Letters' },
  { id: 'applications', icon: RiSuitcaseLine, label: 'Applications' },
]

export default function Sidebar() {
  /**
   * Use the section store to display and set the section on change
   */
  const { activeSection, setActiveSection } = useSectionStore()

  return (
    <Stack px="sm" py="md" w="250" h="92dvh" className={classes.sidebarWrapper}>
      <Button
        variant="filled"
        justify="flex-start"
        color="primary.9"
        leftSection={<MdAdd size={20} color="inherit" />}
        className={classes.addButton}
      >
        New
      </Button>

      <Stack gap={4}>
        {navbarSections.map((item) => (
          <Button
            key={item.label}
            leftSection={<item.icon size={16} />}
            variant={item.id === activeSection ? 'filled' : 'subtle'}
            color="primary.9"
            fw={700}
            justify="flex-start"
            onClick={() => setActiveSection(item.id)}
            className={classes.navbarButton}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Stack>
  )
}
