import { Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Sign from "./components/Sign"
import Todo from "./components/Todo"
// import { Reset } from "styled-reset"


function App() {
  return (
    <>
      {/* <Reset/> */}
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/sign"element={<Sign/>}/>
        <Route path="/todo"element={<Todo/>}/>
      </Routes>
    </>
  )
}

export default App