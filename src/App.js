import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import i18next from "i18next";
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
  const currentlanguesCode = localStorage.getItem("i18nextLng");
  const currentLangue = languages.filter((l) => l.code === currentlanguesCode);
  const { t } = useTranslation();
  // const day_now;
  const date=new Date()
  const day_now=date.getFullYear()

  useEffect(() => {
    document.body.dir = currentLangue[0]?.dir || "ltr";
    document.title =t('title_app')
  }, [currentLangue]);

  return (
    <Container>
      <Row className="pt-2">
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
      <div className="text-center">{t("date_now",{day_now})}</div>
    </Container>
  );
}

export default App;
