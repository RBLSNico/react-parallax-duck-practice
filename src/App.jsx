import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bgimg from './assets/bg.jpg'
import balloon from './assets/balloon-unscreen.gif'
import sky from './assets/sky.png'
import alter from './assets/larger.png'
import cloud from './assets/cloud.png'
import duck from './assets/XOsX.gif'
// import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {

  return (
    <Parallax pages={5}>
      <ParallaxLayer
        offset={0}
        factor={10}
        speed={1}
        style={{
          backgroundImage: `url(${alter})`,
          backgroundSize: 'cover',
        }}

      >

      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.5}
      >
        {/* <h1>Hi, I'm Nico!</h1> */}
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 0.2, end: 4.0 }}
      >
        <img
          alt="Hot Air Balloon"
          style={{
            display: 'block', // Set to 'block' to remove extra space beneath inline images
            margin: 'auto', // Center horizontally
            minWidth: '35rem', // Make sure the image doesn't exceed the container width
            maxHeight: 'auto', // Make sure the image doesn't exceed the container height
          }}
          src={balloon}
        />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 1.8, end: 2.0 }}
      >
        <img
          alt="Cloud"
          style={{
            display: 'block', // Set to 'block' to remove extra space beneath inline images
            margin: 'auto', // Center horizontally
            maxWidth: '100%', // Make sure the image doesn't exceed the container width
            maxHeight: 'auto', // Make sure the image doesn't exceed the container height
          }}
          src={cloud}
        />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={2}
        onClick={() => ref.current.scrollTo(0)}
      >
        <h1>Hey Bean!</h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={2}
        onClick={() => ref.current.scrollTo(0)}
      >
        <h1>You Made It!</h1>
        <img
          alt="Duck"
          style={{
            display: 'block', // Set to 'block' to remove extra space beneath inline images
            margin: 'auto', // Center horizontally
            maxWidth: '100%', // Make sure the image doesn't exceed the container width
            maxHeight: 'auto', // Make sure the image doesn't exceed the container height
          }}
          src={duck}
        />
      </ParallaxLayer>
    </Parallax>
  )
}

export default App
