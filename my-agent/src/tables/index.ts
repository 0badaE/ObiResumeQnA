import { Table, z } from '@botpress/runtime'

export const RecruiterQuestionsTable = new Table({
  name: 'RecruiterQuestionsTable',
  description: 'Records job-related questions asked by recruiters and employers',
  columns: {
    question: {
      searchable: true,
      schema: z.string().describe('The job-related question asked by the user'),
    },
    conversationID: z.string().describe('The Botpress conversation ID where the question was asked'),
  },
})
