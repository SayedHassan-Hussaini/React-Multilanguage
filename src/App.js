import {useTranslation} from 'react-i18next'

function App() {
  const {t}=useTranslation()
  return (
    <div className="App">
      {t('welcome-message')}
    </div>
  );
}

export default App;
