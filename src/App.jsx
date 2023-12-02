import { Route, Routes } from "react-router-dom"

// Pages
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"

import Layout from "./layout/Layout"

function App() {

  return (
    <Layout>
      <div id="home">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div id="catalog">
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
      <div id="aboutme">
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </div>
      <div id="contact">
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
      </div>
    </Layout>
  )
}

export default App
