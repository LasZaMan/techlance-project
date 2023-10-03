import Checkmail from './components/Checkmail';
import Createaccount from './components/Createaccount';
import Verifyemail from './components/Verifyemail';
import Welcomeback from './components/Welcomeback';
import './techLance.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Password from './components/Password';
import ForgotPasswordForm from './components/ForgotPasswordForm';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/confirm' element={<Checkmail />} />
          <Route path='/sign-in' element={<Welcomeback />} />
          <Route path='/sign-up' element={<Createaccount />} />
          <Route path='/reset-password' element={<ForgotPasswordForm />} />
          <Route path='/check-mail' element={<Verifyemail />} />
          <Route path='/reset-successfully' element={<Password />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
