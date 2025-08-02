'use client';

import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
  return (
    <span className="text-secondary-main text-xl md:text-3xl text-center font-semibold flex gap-2 justify-center items-center">
      A
      <span className="text-primary-main">
        <Typewriter
          options={{
            strings: [
              'MERN  STACK DEVELOPER',
              'FRONTEND DEVELOPER',
              'BACKEND DEVELOPER',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </span>
  );
};

export default TypeWriter;
