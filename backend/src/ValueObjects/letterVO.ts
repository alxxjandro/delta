export interface ICoverLetter {
  id: string
  title: string
  company: string
  position: string
  keypoints: string
  content: string
  jobDescription: string
  tone: ToneType
  createdAt: Date | number
  updatedAt?: Date | number
}

export interface ICoverLetterGenerateRequest {
  title: string
  company: string
  position: string
  keypoints: string
  jobDescription: string
  tone: ToneType
}

export interface ICoverLetterGenerateResponse {
  coverLetter: ICoverLetter
}

export type ToneType = 'Professional' | 'Friendly' | 'Enthusiastic' | 'Confident'
