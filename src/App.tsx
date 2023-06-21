import { Outlet } from "react-router-dom"
import { Navegador } from "./components/Navegador"

function App() {
  

  return (
    <>
    <Navegador title="Onload-Sistemas"></Navegador>
    <section className="container">
      <Outlet/>
    </section>
    </>
  )
}

export default App
