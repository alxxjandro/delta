import { Group, Box } from '@mantine/core'
import Navbar from '../general/Navbar'
import Sidebar from '../general/Sidebar'
import SectionWrapper from './SectionWrapper'

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Group wrap="nowrap" gap={0} align="stretch">
        <Sidebar />
        <Box flex={1} py={10} px={16}>
          <SectionWrapper />
        </Box>
      </Group>
    </>
  )
}
