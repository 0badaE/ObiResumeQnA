import { Action, context, z } from '@botpress/runtime'
import { RecruiterQuestionsTable } from '../tables'

export const recordRecruiterQuestion = new Action({
  name: 'recordRecruiterQuestion',
  description: 'Record a useful recruiter or employer question for Obada to review later',

  input: z.object({
    question: z.string().min(1).describe('The useful recruiter or employer question to record'),
  }),

  output: z.object({
    recorded: z.boolean().describe('Whether the question was recorded'),
  }),

  async handler({ input }) {
    const conversation = context.get('conversation', { optional: true })
    const question = input.question.trim()

    if (!conversation || !question) {
      return { recorded: false }
    }

    await RecruiterQuestionsTable.createRows({
      rows: [{ question, conversationID: conversation.id }],
    })

    return { recorded: true }
  },
})
