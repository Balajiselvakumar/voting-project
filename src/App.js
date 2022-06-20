import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from "./SignIn/SignIn";
import OtpVerification from "./SignIn/Otp-Verification";
import VotingPage from "./Voting/VotingPage";
import Result from "./Voting/Result";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'>
              <Route index element={<SignIn />}/>
              <Route path='otp-verify' element={<OtpVerification />}/>
              <Route path='vote' element={<VotingPage />}/>
              <Route path='result' element={<Result/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
}