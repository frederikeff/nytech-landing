import Image from 'next/image';
import { FC } from 'react';

interface HeroSheepsProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const HeroSheeps: FC<HeroSheepsProps> = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  onButtonClick
}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={`/images/sheeps.png`}
        alt="Luxury Baby Blanket"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            {subtitle}
          </p>
          <button 
            onClick={onButtonClick}
            className="bg-white text-gray-900 px-8 py-3 rounded-md 
                     hover:bg-gray-100 transition-colors"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSheeps;