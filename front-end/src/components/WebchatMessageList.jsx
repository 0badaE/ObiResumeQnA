import { MessageList } from '@botpress/webchat';

function WebchatMessageList({ botConfig, client, isTyping, messages, participants }) {
  return (
    <MessageList
      botAvatar={botConfig.botAvatar}
      botName={botConfig.botName}
      botDescription={botConfig.botDescription}
      headerMessage="Recruiter brief"
      isTyping={Boolean(isTyping)}
      messages={messages}
      participants={participants}
      sendMessage={client?.sendMessage}
      showIncomingMessageAvatar
      showMessageStatus
      showDateSystemMessage
      showMarquee={messages.length === 0}
    />
  );
}

export default WebchatMessageList;
