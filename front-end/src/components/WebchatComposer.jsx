import { Composer } from '@botpress/webchat';

function WebchatComposer({
  client,
  clientState,
  connected,
  conversationId,
  disableSendButton,
  storageKey,
}) {
  return (
    <Composer
      allowFileUpload
      connected={connected}
      conversationId={conversationId}
      disableComposer={clientState === 'connecting'}
      disableSendButton={disableSendButton}
      footer="Obi answers only from Obada's professional knowledge base."
      sendMessage={client?.sendMessage}
      storageKey={storageKey}
      uploadFile={client?.uploadFile}
      composerPlaceholder="Ask Obi about role fit, projects, or experience..."
    />
  );
}

export default WebchatComposer;
