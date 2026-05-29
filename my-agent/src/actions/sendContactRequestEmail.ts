import { Action, actions, context, z } from '@botpress/runtime'

const OBADA_EMAIL = 'obadaerfandev@gmail.com'

export const sendContactRequestEmail = new Action({
  name: 'sendContactRequestEmail',
  description: 'Email Obada when a recruiter or employer asks him to follow up',

  input: z.object({
    requesterName: z.string().optional().describe('The name of the person requesting follow-up'),
    requesterEmail: z.string().email().describe('The email address Obada can use to contact the requester'),
    requesterCompany: z.string().optional().describe('The requester company or organization'),
    requesterRole: z.string().optional().describe('The role, title, or opening the requester is asking about'),
    message: z.string().describe('The reason they want Obada to contact them or the question they want answered'),
  }),

  output: z.object({
    sent: z.boolean().describe('Whether the email notification was sent to Obada'),
  }),

  async handler({ input }) {
    const conversation = context.get('conversation', { optional: true })
    const body = [
      'A recruiter or employer asked Obi to have Obada follow up.',
      '',
      `Name: ${input.requesterName ?? 'Not provided'}`,
      `Email: ${input.requesterEmail}`,
      `Company: ${input.requesterCompany ?? 'Not provided'}`,
      `Role/opening: ${input.requesterRole ?? 'Not provided'}`,
      conversation ? `Conversation ID: ${conversation.id}` : undefined,
      '',
      'Message:',
      input.message,
    ]
      .filter(Boolean)
      .join('\n')

    const result = await actions['email-notifier'].sendMail({
      to: [OBADA_EMAIL],
      subject: `Obi follow-up request from ${input.requesterName ?? input.requesterEmail}`,
      body,
      isHtml: false,
      replyTo: [input.requesterEmail],
    })

    return { sent: result.successful.length > 0 }
  },
})
