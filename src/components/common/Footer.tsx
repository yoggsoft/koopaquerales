'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@/components/common/Icons';

export default function Footer() {
  const [ year, setYear ] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className='w-full'>
      <div className=' lg:justify-between'>
        <div className="flex justify-center items-center font-sm">
          <Icon name='code' size='12px' />&nbsp;by&nbsp;
          <a
            href='https://www.manuelreyes.dev' aria-label='Manuel Reyes'
            className='font-bold'
          >
            manuelreyes.dev
          </a>
        </div>
        <div className="container my-2 px-2 mx-auto text-center">
            <p className='text-xs italic text-gray-400'>
              {year}&nbsp;-&nbsp;Koopa&nbsp;Querales
            </p>
        </div>
      </div>
    </footer>
  );
}
