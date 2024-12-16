import './App.css';
import '../src/styles/styles.css';
import { Routes, Route } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage';
import RegistrationPage from './pages/RegistrationRage';
import TopBar from './components/TopBar';


function App() {
  return (
    <div className="app">
      <TopBar />
      {/* <RegistrationPage /> */}
      {/* <AuthorizationPage /> */}
      {/* <Routes>
        <Route path='*' element={<RegistrationPage />} />
        <Route path='/auth' element={<AuthorizationPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
