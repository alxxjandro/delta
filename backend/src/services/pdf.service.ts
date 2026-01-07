import PDFDocument from 'pdfkit'
import { ICoverLetterPDFRequest } from '../ValueObjects/letterVO'

export function generateCoverLetterPDFService(
  data: ICoverLetterPDFRequest
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margins: {
        top: 64,
        bottom: 64,
        left: 64,
        right: 64,
      },
    })

    const chunks: Buffer[] = []

    doc.on('data', (chunk) => chunks.push(chunk))
    doc.on('end', () => {
      resolve(Buffer.concat(chunks))
    })
    doc.on('error', reject)

    doc.fontSize(12)
    doc.text(`${data.user.firstName} ${data.user.lastName}`)
    doc.moveDown(0.2)
    doc.text(`${data.user.email}`)
    doc.moveDown(0.2)

    const formattedDate = new Date(data.letter.createdAt).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })

    doc.text(formattedDate)
    doc.moveDown(3.2)

    const paragraphs = data.letter.content.split('\n\n')

    for (const paragraph of paragraphs) {
      doc.text(paragraph, {
        align: 'left',
        lineGap: 4,
      })
      doc.moveDown(0.8)
    }

    doc.moveDown(0.8)
    doc.text('Sincerely,')
    doc.moveDown(0.4)
    doc.text(`${data.user.firstName} ${data.user.lastName}`)

    doc.end()
  })
}
