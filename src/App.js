import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from "./pages/Users";
import "./styles/styles.css";
import Layout from "./components/layout/Layout";

// Use Windows PowerShell to change ExecutionPolicy: Set-ExecutionPolicy
// End-to-end test

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout />} >
          <Route index element={ <Home /> } />
          <Route path="users" element={ <Users /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
