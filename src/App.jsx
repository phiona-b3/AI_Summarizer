/*eslint-disable*/
import Hero from './components/Hero';
import Demo from './components/Demo';
import StarsCanvas from './components/Stars';

import './App.css';

const App = () => {
  return (
    <main>
        <div className='main'>
            <div className='gradient'>     
            </div>
        </div>
        <div className='app'>
            <Hero />
            <Demo />
            <StarsCanvas />
        </div>
    </main>
  )
}

export default App
