import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import './App.css'


function App() {
  return (
    <>
         <BrowserRouter> {/*Habilita o processo de rotas - Satélite */}
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes> {/*Observa a URL - pega a rota. Ex: cadastro - Aparelho GPS */}
                <Route path="/" element={<Login />} /> {/* Destino final */} 
                <Route path="/home" element={<Home />} /> 
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App