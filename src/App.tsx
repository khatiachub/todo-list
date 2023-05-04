import { Routes,Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Sign from "./components/pages/Sign"
import { Reset } from "styled-reset"
import Private from "./components/Private"

function App() {

  return (
    <>
      <Reset/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/sign"element={<Sign/>}/>
        <Route path="/private" element={<Private/>}
        />
      </Routes>
    </>
  )
}

export default App