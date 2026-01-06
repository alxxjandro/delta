import type { ICoverLetterResponse } from '../../types/Interfaces'
import classes from '../../styles/coverLetters.module.css'
import { useAuth } from '../../hooks/useAuth'

interface CoverLetterPageProps {
  letter: ICoverLetterResponse
  size: number
  disableScale?: boolean
}

export default function CoverLetterPage({
  letter,
  size,
  disableScale = false,
}: CoverLetterPageProps) {
  const { user } = useAuth()

  return (
    <div className={classes.pageWrapper}>
      <div
        className={classes.pageScale}
        style={disableScale ? undefined : { zoom: size / 10 }}
      >
        <div className={classes.page}>
          <header className={classes.header}>
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <p className={classes.subText}>{user?.email}</p>
            <p className={classes.subText}>
              {new Date(letter.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </header>

          <div className={classes.body}>
            {letter.content.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <p className={classes.closing}>
            Sincerely,
            <br />
            {user?.firstName} {user?.lastName}
          </p>
        </div>
      </div>
    </div>
  )
}
