import Request from './request.class'
import type { ICoverLetter } from '../src/types/Interfaces'

export default class CoverLetterService extends Request {
  public static async generate(data: ICoverLetter) {
    return this.request('/cover-letter', {
      method: 'POST',
      body: JSON.stringify({ data }),
    })
  }
}
