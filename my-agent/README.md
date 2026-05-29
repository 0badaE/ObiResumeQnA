# Obi ADK Agent

Obi is Obada Erfan's AI career assistant for recruiters, hiring managers, employers, and interviewers.

The agent helps people evaluate whether Obada is a strong fit for a role by answering questions about his professional background from a controlled knowledge base. Obi speaks about Obada in the third person, stays concise, and avoids unsupported claims.

## What Obi Does

- Answers recruiter-facing questions about Obada's work history, skills, projects, education, languages, location, and role fit.
- Searches the knowledge base before answering substantive questions.
- Uses only information found in the knowledge base.
- Records useful recruiter or employer questions for Obada to review later.
- Collects follow-up context and emails Obada when a recruiter wants to continue the conversation.
- Politely refuses unrelated, private, speculative, or unsupported questions.

## Technologies Used

- **Botpress ADK**: Convention-based agent framework where files in `src/` become bot primitives.
- **@botpress/runtime**: Runtime package for `Conversation`, `Action`, `Knowledge`, `DataSource`, `Table`, and `z` schemas.
- **TypeScript**: Agent source code and typed runtime definitions.
- **Botpress Webchat integration**: Webchat channel used by the custom React frontend.
- **Botpress Chat integration**: Local/dev chat channel support.
- **Email Notifier integration**: Sends follow-up request emails to Obada.
- **Anthropic integration**: Configured LLM provider integration.
- **Knowledge base / RAG**: Markdown, PDF, and text files in `src/knowledge/` are indexed for semantic search.
- **Botpress Tables**: Stores recruiter questions in `RecruiterQuestionsTable`.

## How The Agent Works

1. A user sends a message through webchat or another configured channel.
2. `src/conversations/index.ts` handles the conversation and calls `execute()`.
3. The autonomous model receives Obi's instructions, the knowledge base, and the internal tools.
4. Obi searches `DocsKB` before answering substantive questions.
5. Useful recruiter questions are saved through `recordRecruiterQuestion`.
6. Follow-up requests are sent through `sendContactRequestEmail` after Obi collects the needed contact details.

## Project Structure

```text
agent.config.ts                         Bot name, models, state, and integrations
src/conversations/index.ts              Main wildcard conversation handler and Obi instructions
src/knowledge/docs.ts                   Knowledge base definition
src/knowledge/Obada-Resume.md           Resume and career source material
src/actions/search-docs.ts              Programmatic knowledge search action
src/actions/recordRecruiterQuestion.ts  Saves useful recruiter questions
src/actions/sendContactRequestEmail.ts  Emails Obada follow-up requests
src/tables/index.ts                     RecruiterQuestionsTable schema
src/workflows/index.ts                  Workflow exports
src/triggers/index.ts                   Trigger exports
```

## Configuration

The core agent configuration lives in `agent.config.ts`.

Current configured integrations:

- `chat@1.0.0`
- `webchat@0.3.0`
- `plus/email-notifier@1.1.1`
- `anthropic@18.0.1`

Current default models:

- Autonomous: `openai:gpt-5.4-2026-03-05`, `anthropic:claude-opus-4-6`
- Zai: `openai:gpt-4.1-2025-04-14`

## Knowledge Base

`src/knowledge/docs.ts` creates `DocsKB` from files in `src/knowledge`.

Supported source file types:

- Markdown: `.md`
- PDF: `.pdf`
- Text: `.txt`

To add or update Obi's source material, place files in `src/knowledge/` and sync the knowledge base:

```bash
adk kb sync
```

Running `adk dev` also syncs knowledge on startup and file changes.

## Local Development

Install dependencies:

```bash
npm install
```

Start the ADK dev server:

```bash
npm run dev
```

Build the agent:

```bash
npm run build
```

Deploy the agent:

```bash
npm run deploy
```

Check project health:

```bash
adk check
adk status
```

## Relationship To The Frontend

The companion React frontend lives in `../front-end`.

The frontend owns the visual webchat experience. This ADK project owns Obi's behavior, knowledge sources, tools, integrations, and data persistence.
