import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Navigate 임포트
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './pages/Home.js';
import InitialPage from './pages/InitialPage.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import CustomProducts from './pages/CustomProducts.js';
import EmployeeManagement from './pages/EmployeeManagement.js';
import MyLoans from './pages/MyLoans.js';
import SalesAnalysis from './pages/SalesAnalysis.js';
import Verification from './pages/Verification.js';
import Start from './pages/NewCustomer/Start';
import ProfitStatusPage from './pages/ProfitStatusPage';
import MarginSettlement from './pages/MarginSettlement';
import TradeHistory from './pages/TradeHistory';
import FinanceProductsPage from './pages/FinanceProductsPage';
import AccountQuestion from './pages/NewCustomer/AccountQuestion';
import AuthAccount from './pages/NewCustomer/AuthAccount';
import RegisterStore from './pages/NewCustomer/RegisterStore';
import ReadyToSolup from './pages/NewCustomer/ReadyToSolup';
import Guide from './components/Home/Guide';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          {isLoggedIn ? (
            <Route path="/" element={<Home onLogout={logoutHandler} />} />
          ) : (
            <Route path="/" element={<InitialPage />} />
          )}
          <Route path="/home" element={<Home onLogout={logoutHandler} />} />
          <Route path="/login" element={<Login loginHandler={loginHandler} />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/custom-products" element={<CustomProducts />} />
          <Route path="/employee-management" element={<EmployeeManagement />} />
          <Route path="/my-loans" element={<MyLoans />} />
          <Route path="/sales-analysis" element={<SalesAnalysis />} />
          <Route path="/start" element={<Start />} />
          <Route path="/profit-status" element={<ProfitStatusPage />} />
          <Route path="/margin-settlement" element={<MarginSettlement />} />
          <Route path="/trade-history" element={<TradeHistory />} />
          <Route path="/finance-products" element={<FinanceProductsPage />} />
          <Route path='/account-question' element={<AccountQuestion />} />
          <Route path='/auth-account' element={<AuthAccount />} />
          <Route path='/register-store' element={<RegisterStore />} />
          <Route path='/ready-to-solup' element={<ReadyToSolup />} />
          <Route path='/guide' element={<Guide />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
