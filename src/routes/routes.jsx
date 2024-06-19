import React, { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../views/home";
import Register from "../views/register";
import Login from "../views/login";
import RecoveryLogin from "../views/recovery";
import { LoginContexProvider } from "../contex/authContex";
import GoToTop from "../utils/GoTopTop";

const Rotas = () => {
useEffect(() => {
    console.log("inserido cl");
    // Insira o script do Hotjar
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3813799,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
}, []);


  return (
    <BrowserRouter>
    <LoginContexProvider>
       <GoToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recovery" element={<RecoveryLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </LoginContexProvider>
    </BrowserRouter>
  );
};
export default Rotas;
