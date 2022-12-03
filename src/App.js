//import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CadastroOrg from "./components/pages/cadastro-organizacao/cadastroOrg";
import HomeTest from './components/pages/teste-home/testehome';
import RecSenha from './components/pages/rec-senha/rec-senha';
import Pagina from './components/pages/paginauser/pagina';
import CadastroCliente from './components/pages/cadastro-cliente/cadastroCliente';
import CadastroUsuario from './components/pages/cadastro-usuario/cadastroUsuario';

function App() {
  
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<HomeTest />} />
          <Route exact path="/login" element={<HomeTest />} />
          <Route exact path="/cadastroOrg" element={<CadastroOrg />} />
          <Route exact path="/cadastroUser" element={<CadastroUsuario/>} />
          <Route exact path="/cadastroCliente" element={<CadastroCliente />} />
          <Route exact path="/recsenha" element={<RecSenha/>} />
          <Route exact path="/pagina" element={<Pagina/>} />
    </Routes>
   </Router>
  );
}

export default App;
