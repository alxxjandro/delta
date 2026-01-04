import CLS from '../../api/coverLetterService'
import { useEffect, useState } from 'react'
import type { ICoverLetterResponse } from '../types/Interfaces'

export function useCoverLetters() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [coverLetters, setCoverLetters] = useState<ICoverLetterResponse[]>([])

  useEffect(() => {
    const fetchCoverLetters = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await CLS.getCoverLetters()
        setCoverLetters(response as ICoverLetterResponse[])
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchCoverLetters()
  }, [])

  return { coverLetters, loading, error }
}
