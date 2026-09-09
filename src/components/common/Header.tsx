import Image from 'next/image';
import { Icon } from '@/components/common/Icons';
import { SOCIAL, STORES } from '@/const/links';

export default function Header () {
  return (
    <header className='top-0 fixed z-10 w-full'>
      <div className='w-full p-3 md:p-4 min-w-[320px] flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-y-2 backdrop-blur-sm'>
        <nav aria-label='Social links' className='order-2 md:order-1 basis-full md:basis-auto flex justify-center'>
          <div className='inline-flex gap-1 md:gap-4'>
            {
              SOCIAL.map((item, key) =>
                <a
                  key={key}
                  aria-label={item.title}
                  href={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 transform transition duration-350 hover:scale-110 hover:opacity-70'
                  title={item.title}
                >
                  <Icon className='w-6 h-6 md:w-7 md:h-7' name={item.icon} />
                </a>
              )
            }
          </div>
        </nav>
        <div className='order-1 md:order-2 basis-full md:basis-auto flex justify-center'>
          <Image
            className='w-[120px] md:w-[180px] lg:w-[240px]'
            src='/img/koopa-querales-logo.png'
            title='Koopa Querales'
            alt='Koopa Querales logo'
            width={893}
            height={249}
            priority
          />
        </div>
        <nav aria-label='Streaming platforms' className='order-3 basis-full md:basis-auto flex justify-center'>
          <div className='inline-flex gap-1 md:gap-4'>
            {
              STORES.map((item, key) =>
                <a
                  key={key}
                  aria-label={item.title}
                  href={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 transform transition duration-350 hover:scale-110 hover:opacity-70'
                  title={item.title}
                >
                  <Icon className='w-6 h-6 md:w-7 md:h-7' name={item.icon} />
                </a>
              )
            }
          </div>
        </nav>
      </div>
    </header>
  );
}
