import { Container } from '@botpress/webchat';

function WebchatContainer({ children, client, connected, conversationId, storageKey }) {
  return (
    <Container
      connected={connected}
      allowFileUpload
      uploadFile={client?.uploadFile}
      storageKey={storageKey}
      conversationId={conversationId}
      className="portfolio-chat"
    >
      {children}
    </Container>
  );
}

export default WebchatContainer;
