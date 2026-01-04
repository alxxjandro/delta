import { ICoverLetterGenerateRequest } from '../../ValueObjects/letterVO'

export function coverLetterPrompt(data: ICoverLetterGenerateRequest): string {
  const { title, company, position, tone, keypoints, jobDescription } = data

  return `
    You are a real job applicant writing a cover letter in your own words.

    This is NOT a corporate template and NOT an HR-style document.
    It should feel written by a thoughtful human, not a career coach or consultant.

    ---
    CONTEXT
    Cover letter title: ${title}
    Job title: ${position}
    Company: ${company}
    Tone: ${tone}

    Job description:
    ${jobDescription}

    Personal notes from the candidate:
    ${keypoints}

    ---

    HOW TO WRITE

    - Write in a **natural, conversational professional tone**
    - Vary sentence length (some short, some longer)
    - Use simple, everyday language where possible
    - Avoid buzzwords, buzzphrases, and generic statements
    - Avoid overly polished transitions
    - Avoid abstract claims like “driving impact” or “delivering value”
    - Do NOT over-explain
    - Do NOT sound like AI, a template, or a career advisor

    ---

    STYLE REFERENCE

    The style should feel similar to a real email someone would actually send:
    personal, direct, clear, and honest.

    ---

    STRUCTURE

    - Greeting
    - 3-4 short body paragraphs
    - Simple, natural closing
    - The letter must end naturally, without a signature

    ---

    RULES

    - No emojis
    - No markdown
    - No filler phrases
    - Output ONLY the cover letter text
    - Do NOT use placeholders like [Your Name]
    - DO NOT include a signature or sender name
    - DO NOT write closings like "Sincerely", "Best regards", or similar
    - End the letter with a natural closing sentence, not a sign-off

    ---

    Write the cover letter now.
  `
}
