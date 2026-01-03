import Resumes from './Resumes'
import CoverLetters from './CoverLetters'
import Applications from './Applications'
import { useSectionStore } from '../zustand/useSectionStore'

/**
 * General section mapper
 */
const sectionMap = {
  resumes: <Resumes />,
  'cover-letters': <CoverLetters />,
  applications: <Applications />,
}

export default function SectionWrapper() {
  const { activeSection } = useSectionStore()
  return sectionMap[activeSection]
}
