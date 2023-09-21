import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRouter from "../../routes/index";

function Layout() {
  return (
    <div>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default Layout