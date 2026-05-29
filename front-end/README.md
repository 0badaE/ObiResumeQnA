# Obi Webchat Frontend

This is the React frontend for Obi, Obada Erfan's recruiter-facing AI career assistant.

The app gives recruiters, hiring managers, and interviewers a focused place to ask questions about Obada's work history, skills, projects, strengths, and role fit. It connects to the Botpress webchat client for the live conversation and wraps the Botpress React components in a custom portfolio-style interface.

## What This Frontend Does

- Presents Obi as a full-page webchat experience.
- Connects to the published Botpress webchat client ID.
- Uses custom local component wrappers for each Botpress webchat primitive.
- Provides a short recruiter-facing intro and career signal panel.
- Includes a top-right GitHub button for the project repository.
- Stores chat state under a stable local storage key.

## Technologies Used

- **React 19**: UI rendering and component composition.
- **Vite 8**: Local development server and production build tooling.
- **@botpress/webchat 4**: Botpress React webchat library, including `useWebchat`, `Container`, `Header`, `MessageList`, `Composer`, and `StylesheetProvider`.
- **CSS**: Custom responsive layout, dark editorial styling, avatar sizing, and Webchat class overrides.
- **ESLint**: JavaScript and React linting.

## Project Structure

```text
src/
  App.jsx                     Main page shell and webchat state wiring
  App.css                     Page layout, visual design, and Botpress CSS overrides
  index.css                   Global reset, fonts, and design tokens
  main.jsx                    React entrypoint
  components/
    GitHubButton.jsx          Top-right repository link
    StageCopy.jsx             Recruiter-facing intro copy
    WebchatComposer.jsx       Botpress Composer wrapper
    WebchatContainer.jsx      Botpress Container wrapper
    WebchatHeader.jsx         Botpress Header wrapper
    WebchatMessageList.jsx    Botpress MessageList wrapper
    WebchatTheme.jsx          Botpress StylesheetProvider wrapper
    webchatConfig.js          Client ID, storage key, GitHub URL, and bot metadata
```

## Configuration

Update these values in `src/components/webchatConfig.js`:

```js
export const CLIENT_ID = 'ddc146a4-fccb-4a5e-9e08-b1205eb1d62f';
export const STORAGE_KEY = 'obada-portfolio-webchat';
export const GITHUB_REPO_URL = 'https://github.com/';
```

`botConfig` controls Obi's display name, avatar, and short description inside the Botpress webchat header and message list.

## Local Development

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Lint the project:

```bash
npm run lint
```

## Relationship To The Agent

This frontend does not define Obi's actual behavior. It only renders the chat UI and connects to the Botpress webchat client.

The bot personality, allowed topics, knowledge base, question recording, and follow-up email behavior live in the ADK project at `../my-agent`.
