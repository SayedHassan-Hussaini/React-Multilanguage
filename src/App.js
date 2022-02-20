import { Col, Container, Row, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Icon } from '@iconify/react';
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "af",
    name: "فارسی",
    country_code: "af",
  },
];

function App() {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className="pt-1">
        <Col>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
            <Icon icon="ant-design:global-outlined" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {languages.map(lan=>(
                <Dropdown.Item key={lan.code} >{lan.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
     <h1 className="text-center">{t('welcome_message')}</h1>
    </Container>
  );
}

export default App;
