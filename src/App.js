import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return <Container>{t("welcome_message")}</Container>;
}

export default App;
