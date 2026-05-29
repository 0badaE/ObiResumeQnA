import { Header } from '@botpress/webchat';

function WebchatHeader({
  botConfig,
  clientId,
  clientState,
  newConversation,
  soundOn,
  toggleSound,
}) {
  return (
    <Header
      defaultOpen={false}
      closeWindow={() => undefined}
      restartConversation={newConversation}
      disabled={clientState === 'connecting'}
      configuration={botConfig}
      soundOn={soundOn}
      toggleSound={toggleSound}
      clientId={clientId}
    />
  );
}

export default WebchatHeader;
