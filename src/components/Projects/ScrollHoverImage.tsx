import Image from 'next/image';

interface IHoverImageProps {
  src: string | any;
  alt: string;
}

const ScrollHoverImage = ({src, alt}: IHoverImageProps) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-xl group">
      <Image
        src={src}
        alt={alt}
        width={undefined}
        height={undefined}
        className="w-full transition-transform duration-[7000ms] 
        ease-linear group-hover:-translate-y-[78%] cursor-pointer"
      />
    </div>
  );
};

export default ScrollHoverImage;
