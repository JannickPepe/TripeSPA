import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import { FaArrowDown } from "react-icons/fa6";
import grainImage from '@/assets/images/grain.jpg';
import { HeroOrbit } from '@/components/HeroOrbit';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg'


export const HeroSection = () => {

  return (
    <div className='py-32 md:py-48 lg:py-52 relative z-0 overflow-x-clip'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{backgroundImage: `url(${grainImage.src})`}}></div>
        <div className='hero-ring size-[620px]'></div>
        <div className='hero-ring size-[820px]'></div>
        <div className='hero-ring size-[1020px]'></div>
        <div className='hero-ring size-[1220px]'></div>
      
        <HeroOrbit size={800} rotation={-72} >
          <StarIcon className='text-emerald-300 size-16' />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className='text-emerald-300 size-10' />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className='text-emerald-300 size-8' />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className='text-emerald-300/20 size-8' />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className='text-emerald-300/20 size-5' />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className='text-emerald-300/20 size-10' />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className='text-emerald-300/20 size-14' />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className='bg-emerald-300/20 size-3 rounded-full' />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className='bg-emerald-300/20 size-2 rounded-full' />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className='bg-emerald-300/20 size-2 rounded-full' />
        </HeroOrbit>
      </div>
    
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image className='size-[100px]' src={memojiImage} alt='Hero avatar' />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full'></div>
            <div className='text-sm font-medium'>
              Availible for new projects and collaborations
            </div>
          </div>
        </div>

        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Bulding Exeptional User Experience.</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional, high-performing web applications. 
            Lets discuss your next project.
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <FaArrowDown className='size-4' />
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl'>
            <span>👋</span>
            <span className='font-semibold'>Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  )
};
