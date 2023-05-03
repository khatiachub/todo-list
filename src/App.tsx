import { HashRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Sign from "./components/Sign"
import Todo from "./components/Todo"
import { Reset } from "styled-reset"


function App() {
  return (
    <>
    <HashRouter>
      <Reset/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/sign"element={<Sign/>}/>
        <Route path="/todo"element={<Todo/>}/>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App