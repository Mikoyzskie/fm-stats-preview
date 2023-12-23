import Image from 'next/image'
import { inter, lexend } from './fonts'

export default function Home() {
  return (
    <div className='bg-[#1b1938] max-w-[1110px] w-full flex rounded-xl overflow-hidden lg:flex-row flex-col-reverse'>
      <div className='lg:p-[74px] p-[30px] flex flex-col justify-between'>
        <div className='mb-12'>
          <h1 className={`${inter.className} text-white lg:text-4xl text-3xl font-bold mb-8 text-center lg:text-start lg:mt-0 mt-[10px]`}>Get <span className='text-[#aa5cdb]'>insights</span> that help your business grow.</h1>
          <p className={`${inter.className} text-[15px] text-[#ffffffbf] text-center lg:text-start`}>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency</p>
        </div>
        <div className='flex lg:gap-[60px] gap-9 lg:flex-row flex-col lg:items-start items-center'>
          <div className='text-white lg:block flex flex-col items-center'>
            <h2 className={`${inter.className} text-white font-bold text-2xl`}>10k+</h2>
            <span className={`${lexend.className} text-[#ffffff99] text-sm`}>COMPANIES</span>
          </div>
          <div className='text-white lg:block flex flex-col items-center'>
            <h2 className={`${inter.className} text-white font-bold text-2xl`}>314</h2>
            <span className={`${lexend.className} text-[#ffffff99] text-sm`}>TEMPLATES</span>
          </div>
          <div className='text-white lg:block flex flex-col items-center'>
            <h2 className={`${inter.className} text-white font-bold text-2xl`}>12M+</h2>
            <span className={`${lexend.className} text-[#ffffff99] text-sm`}>QUERIES</span>
          </div>
        </div>
      </div>

      <div className='w-full h-full relative'>
        <div className='absolute inset-0 bg-[#aa5cdb] bg-opacity-50'>

        </div>
        <Image
          src={"/image-header-desktop.jpg"}
          alt='Desktop Image'
          width={540}
          height={446}
          className='w-full h-full hidden lg:block'
        />
        <Image
          src={"/image-header-mobile.jpg"}
          alt='Desktop Image'
          width={540}
          height={446}
          className='w-full h-full block lg:hidden'
        />
      </div>
    </div>
  )
}
