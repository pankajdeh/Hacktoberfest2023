// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { LoremIpsum } from "./LoremIpsum"
import { motion, useScroll  } from "framer-motion"

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
      {/* make lorem ipsum center */}
      <div className="container">
        <LoremIpsum />
      </div>
      
    </>
  )
}

export default App
