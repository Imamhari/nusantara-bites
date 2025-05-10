import Image from 'next/image'

function Banner() {
  return (
    <div className='hidden lg:flex absolute w-full top-0 -z-10'>
            <Image
                src="/assets/banner-1.webp"
                alt="Banner"
                width={1920}
                height={1080}
            />
        </div>
  )
}

export default Banner