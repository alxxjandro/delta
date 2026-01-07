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

    - Write in a natural, conversational professional tone
    - Follow the provided tone closely
    - Use clear, correct grammar and spelling
    - Vary sentence length naturally
    - Use simple, everyday language where possible
    - Avoid buzzwords, clichés, and generic claims
    - Avoid sounding polished for the sake of it
    - Do not explain things unnecessarily
    - Do not sound like AI, a template, or a career advisor

    ---
    OPENING GUIDELINES

    Start with a greeting and a natural first sentence.

    Do NOT begin with:
    - "I am writing to apply"
    - "I am excited to apply"
    - "I am writing to express my interest"

    Instead, begin naturally by doing ONE of the following:
    - Mention why the role or company caught your attention
    - State interest in the role in a calm, direct way
    - React briefly to the company, product, or mission
    - Give a short personal context related to the role

    ---
    STRUCTURE

    - Greeting
    - 3 to 4 short body paragraphs
    - A natural, forward-looking final sentence

    ---
    RULES

    - Output ONLY the cover letter text
    - No emojis
    - No markdown
    - No placeholders of any kind
    - Do NOT include a signature or sender name
    - Do NOT include contact information
    - Do NOT use sign-offs like "Sincerely", "Best regards", or similar
    - End with a complete, natural sentence

    ---
    Write the cover letter now.
  `
}
