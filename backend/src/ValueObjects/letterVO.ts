export interface ICoverLetter {
  id: string
  title: string
  company: string
  position: string
  tone: ToneType
  keypoints: string
  content: string
  createdAt: Date | number
  updatedAt?: Date | number
}

export interface ICoverLetterGenerateRequest {
  title: string
  company: string
  position: string
  tone: ToneType
  keypoints: string
}

export interface ICoverLetterGenerateResponse {
  coverLetter: ICoverLetter
}

export type ToneType = 'Professional' | 'Friendly' | 'Enthusiastic' | 'Confident'
