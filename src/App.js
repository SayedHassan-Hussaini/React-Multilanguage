import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import i18next from "i18next";
import Cookies from 'js-cookie'
import { useEffect } from "react";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "pr",
    name: "فارسی",
    country_code: "af",
    dir: "rtl",
  },
];

function App() {
  const currentlanguesCode = Cookies.get("i18next") || "en";
  const currentLangue = languages.filter((l) => l.code === currentlanguesCode);
  const { t } = useTranslation();
  useEffect(() => {
    document.body.dir = currentLangue.dir || "ltr";
  }, currentLangue);
  return (
    <Container>
      <Row className="pt-1">
        <Col>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <Icon icon="ant-design:global-outlined" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {languages.map((lan) => (
                <Dropdown.Item
                  onClick={() => i18next.changeLanguage(lan.code)}
                  key={lan.code}
                >
                  {lan.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <h1 className="text-center">{t("welcome_message")}</h1>
      <div className="text-center">{t("date_now", Date.now())}</div>
    </Container>
  );
}

export default App;
