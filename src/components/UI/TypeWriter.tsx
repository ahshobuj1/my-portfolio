'use client';

import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'MERN Stack Developer',
          'Frontend Developer',
          'Backend Developer',
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriter;
