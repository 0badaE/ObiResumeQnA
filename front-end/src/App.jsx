import { useMemo } from 'react';
import { enrichMessage, useWebchat } from '@botpress/webchat';
import {
  CLIENT_ID,
  GITHUB_REPO_URL,
  GitHubButton,
  STORAGE_KEY,
  StageCopy,
  WebchatComposer,
  WebchatContainer,
  WebchatHeader,
  WebchatMessageList,
  WebchatTheme,
  botConfig,
} from './components';
import './App.css';

function App() {
  const {
    client,
    clientState,
    conversationId,
    disableSendButton,
    isTyping,
    messages,
    newConversation,
    participants,
    soundOn,
    toggleSound,
    user,
  } = useWebchat({
    clientId: CLIENT_ID,
    storageKey: STORAGE_KEY,
  });

  const connected = clientState !== 'disconnected' && clientState !== 'error';
  const currentUserId = user?.userId ?? user?.id ?? '';

  const enrichedMessages = useMemo(
    () =>
      enrichMessage(
        messages,
        participants,
        currentUserId,
        botConfig.botName,
        botConfig.botAvatar
      ),
    [currentUserId, messages, participants]
  );

  return (
    <main className="experience-shell">
      <WebchatTheme />
      <GitHubButton href={GITHUB_REPO_URL} />

      <section className="agent-stage" aria-label="Botpress webchat">
        <StageCopy />

        <WebchatContainer
          client={client}
          connected={connected}
          conversationId={conversationId}
          storageKey={STORAGE_KEY}
        >
          <WebchatHeader
            botConfig={botConfig}
            clientId={CLIENT_ID}
            clientState={clientState}
            newConversation={newConversation}
            soundOn={soundOn}
            toggleSound={toggleSound}
          />

          <WebchatMessageList
            botConfig={botConfig}
            client={client}
            isTyping={isTyping}
            messages={enrichedMessages}
            participants={participants}
          />

          <WebchatComposer
            client={client}
            clientState={clientState}
            connected={connected}
            conversationId={conversationId}
            disableSendButton={disableSendButton}
            storageKey={STORAGE_KEY}
          />
        </WebchatContainer>
      </section>
    </main>
  );
}

export default App;
