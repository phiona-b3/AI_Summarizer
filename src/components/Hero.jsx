/*eslint-disable*/
import React from 'react';
import { logo_1 } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full'>
        <img src={logo_1} alt='sum_rizz' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() => window.open('https://github.com/phiona-b3/AI_Summarizer')}
          className='black_btn'
        >
          Github
        </button>
      </nav>

      <h1 className='head_text' >
        Summarize Essays with <br className='max-md: hidden' />
        <span className='orange_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
         Simplify your reading with SumRizz, an open-source article summarizer that transforms
         lengthy articles into clear and concise summarizes.
      </h2>
    </header>
  )
}

export default Hero
