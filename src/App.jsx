import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import balloon from './assets/hello-travel.gif'
import bg from './assets/pengu-adventures.png'
import cloud from './assets/cloud.png'
import p1 from './assets/food-hungry.gif'
import p2 from './assets/tragic-qq.gif'
import p3 from './assets/pudgyman-superman.gif'
import p4 from './assets/omg-shocked.gif'
import p5 from './assets/bored-penguin.gif'
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from './components/Navbar'

function App() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }

  const decrease = () => {
    setCount(count - 1);
  }

  return (
    <Parallax pages={5}>
      <ParallaxLayer
        offset={0}
        factor={9.5}
        speed={1}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          filter: 'blur(4px)',
        }}
      >
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.5}
        factor={0}
      >
        {/* <h1>Hi, I'm Nico!</h1> */}
      </ParallaxLayer>

      <ParallaxLayer
        factor={0}
        sticky={{ start: 0.2, end: 2.7 }}
      >
        <img
          alt="The Travelling Penguin"
          style={{
            display: 'block',
            margin: 'auto',
            minWidth: '30rem',
            maxHeight: 'auto',
          }}
          src={balloon}
        />
      </ParallaxLayer>

      <ParallaxLayer
        factor={0}
        offset={0}
        sticky={{ start: 0.8, end: 1.0 }}
      >
        <img
          alt="Cloud"
          style={{
            display: 'block',
            margin: 'auto',
            maxWidth: '100%',
            maxHeight: 'auto',
          }}
          src={cloud}
        />
      </ParallaxLayer>
      <ParallaxLayer
        factor={0}
        offset={0}
        speed={1}
        sticky={{ start: 1.8, end: 2.2 }}
        onClick={() => ref.current.scrollTo(0)}
      >
        <img
          alt="P4"
          style={{
            margin: 'auto',
            maxWidth: '100%',
            maxHeight: 'auto',
          }}
          src={p4}
        />
      </ParallaxLayer>
      <ParallaxLayer
        factor={0}
        offset={4}
        speed={0.5}
        onClick={() => ref.current.scrollTo(0)}
      >
        {/* <h1>The count is {count} </h1> */}
        <div className='images'>
          <img
            alt="P1"
            style={{
              margin: 'auto',
              maxWidth: '100%',
              maxHeight: 'auto',
            }}
            src={p1}
          />
          <img
            alt="P2"
            style={{
              margin: 'auto',
              maxWidth: '100%',
              maxHeight: 'auto',
            }}
            src={p2}
          />
          <img
            alt="P3"
            style={{
              margin: 'auto',
              maxWidth: '100%',
              maxHeight: 'auto',
            }}
            src={p3}
          />
        </div>
      </ParallaxLayer>
    </Parallax>


  )
}

export default App
