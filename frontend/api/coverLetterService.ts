import Request from './request.class'
import type { ICoverLetter, ICoverLetterPDFPayload } from '../src/types/Interfaces'

export default class CoverLetterService extends Request {
  public static async generate(data: ICoverLetter) {
    return this.request('/cover-letter', {
      method: 'POST',
      body: JSON.stringify({ data }),
    })
  }

  public static async getCoverLetters() {
    return this.request('/cover-letter', {
      method: 'GET',
    })
  }

  public static async downloadCoverLetter(payload: ICoverLetterPDFPayload) {
    return this.request('/cover-letter/pdf', {
      method: 'POST',
      body: JSON.stringify(payload),
      responseType: 'blob',
    })
  }
}
