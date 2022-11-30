//import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/pages/Home/home";
import Login from './components/pages/login/login';
import CadastroCliente from './components/pages/cadastro-cliente/cadastroCliente';
import CadastroUsuario from './components/pages/cadastro-usuario/cadastroUsuario';
import RecuperarSenha from './components/pages/recuperar-senha/recuperarSenha';
import TrocarSenha from './components/pages/trocar-senha/trocarSenha';
import CadastroOrg from "./components/pages/cadastro-organizacao/cadastroOrg";
import MenuLateral from './components/pages/lista-usuarios/menuLateral';


function App() {
  
  return (
    <Router>
      <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/recuperar-senha" element={<RecuperarSenha />} />
    <Route exact path="/trocar-senha" element={<TrocarSenha />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/cadastroOrg" element={<CadastroOrg />} />
    <Route exact path="/cadastroUser" element={<CadastroUsuario/>} />
    <Route exact path="/cadastroCliente" element={<CadastroCliente />} />
    <Route exact path="/menuLateral" element={<MenuLateral />} />
    </Routes>
   </Router>
  );
}

export default App;
