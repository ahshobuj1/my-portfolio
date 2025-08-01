'use client';

import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
  return (
    <span className="text-blue-600 text-3xl font-semibold">
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
    </span>
  );
};

export default TypeWriter;
