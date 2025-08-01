import {Button} from '@mui/material';
import TypeWriter from '../UI/TypeWriter';
import Photo from './Photo';

const HeroSection = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 justify-center lg:justify-between py-10 bg-white/20 items-center">
      <div className="order-2 lg:order-1">
        <Button variant="contained"> Hello Button</Button>
        <h2>It&apos;s me</h2>
        <h2>A H SHOBUJ</h2>
        <TypeWriter />
      </div>
      <div className="order-1 lg:order-2">
        <Photo />
      </div>
    </div>
  );
};

export default HeroSection;
