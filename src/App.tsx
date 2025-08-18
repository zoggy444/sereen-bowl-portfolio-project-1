import LoginPage from './components/pages/login/LoginPage';
import { Route, Routes } from 'react-router';
import ErrorPage from './components/pages/error/ErrorPage';
import OrderPage from './components/pages/order/OrderPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/order" element={<OrderPage userName={"inconnu"} />}/>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>
    </>
  )
}

export default App
