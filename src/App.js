// App.js
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import RegistrationPage from "./component/RegistrationPage";
import TablePage from "./component/TablePage";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import ContactPage from "./component/contactPage/ContactPage";
import { UserProvider } from "./context/UserContext";
import InteractionsPage from "./component/interactions/Interactions";

function App() {
  return (
    // <ThemeProvider theme={theme}></ThemeProvider>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="interActions" element={<InteractionsPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
    // </ThemeProvider>
  );
}

export default App;
