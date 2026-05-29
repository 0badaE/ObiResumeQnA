# ObiResumeQnA

ObiResumeQnA is a two-part portfolio assistant project:

- `my-agent/` contains Obi, a Botpress ADK agent that answers recruiter-facing questions about Obada Erfan from a controlled resume knowledge base.
- `front-end/` contains the React and Vite webchat UI that connects to the Botpress webchat client.

Obi is designed for recruiters, hiring managers, and interviewers who want to quickly understand Obada's work history, skills, projects, and role fit.

## Tech Stack

- Botpress ADK and `@botpress/runtime`
- Botpress Webchat React library
- React 19
- Vite 8
- TypeScript for the ADK agent
- JavaScript and CSS for the frontend

## Local Development

Run the agent:

```bash
cd my-agent
npm install
npm run dev
```

Run the frontend:

```bash
cd front-end
npm install
npm run dev
```

See the README files inside each project folder for more detail.
