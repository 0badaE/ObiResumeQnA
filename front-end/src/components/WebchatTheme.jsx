import { StylesheetProvider } from '@botpress/webchat';

function WebchatTheme() {
  return (
    <StylesheetProvider
      color="#e84b5f"
      fontFamily="fira"
      radius={1.4}
      themeMode="dark"
      variant="soft"
      headerVariant="glass"
    />
  );
}

export default WebchatTheme;
