import react from "react";

interface GradientRightProps {
  className: string;
}

const GradientRight = ({ className }: GradientRightProps) => {
  return(<svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#00ff00" d="M21.8,-39.3C28.2,-34,33.4,-28.2,37.8,-21.5C42.3,-14.9,45.9,-7.4,46.3,0.2C46.6,7.8,43.7,15.7,43.2,29.2C42.7,42.7,44.8,61.9,38,70.5C31.2,79,15.6,76.8,2.3,72.8C-11,68.7,-21.9,62.8,-31.8,56.1C-41.6,49.3,-50.4,41.7,-59.1,32.2C-67.8,22.8,-76.4,11.4,-73.9,1.4C-71.4,-8.5,-57.8,-17,-48.7,-25.8C-39.6,-34.5,-35,-43.5,-27.6,-48.3C-20.2,-53,-10.1,-53.6,-1.2,-51.4C7.7,-49.3,15.4,-44.6,21.8,-39.3Z" transform="translate(100 100)" />
</svg>);
};
export default GradientRight;
