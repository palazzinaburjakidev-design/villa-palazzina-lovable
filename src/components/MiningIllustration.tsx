import React, { memo } from 'react';
import { motion } from 'framer-motion';

type IllustrationType = 'tunnel-entrance' | 'miners-walking' | 'mine-cart' | 'mining-tools';

interface MiningIllustrationProps {
  type: IllustrationType;
  isActive?: boolean;
  className?: string;
}

const MiningIllustration = memo(({ type, isActive = true, className = '' }: MiningIllustrationProps) => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const renderIllustration = () => {
    switch (type) {
      case 'tunnel-entrance':
        return <TunnelEntrance />;
      case 'miners-walking':
        return <MinersWalking />;
      case 'mine-cart':
        return <MineCart />;
      case 'mining-tools':
        return <MiningTools />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`pointer-events-none ${className}`}
      variants={variants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      {renderIllustration()}
    </motion.div>
  );
});

// Tunnel entrance with "SRETNO" sign - Gallery section
const TunnelEntrance = memo(() => (
  <svg
    viewBox="0 0 300 100"
    className="w-48 sm:w-64 md:w-80 h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ground line */}
    <path
      d="M0 95 Q75 92, 150 95 Q225 98, 300 95"
      stroke="hsl(35 25% 75% / 0.2)"
      strokeWidth="1.5"
      fill="none"
    />
    
    {/* Tunnel arch - stone texture effect */}
    <path
      d="M60 95 L60 50 Q60 15, 150 15 Q240 15, 240 50 L240 95"
      stroke="hsl(35 25% 75% / 0.3)"
      strokeWidth="3"
      fill="hsl(0 0% 8% / 0.8)"
    />
    
    {/* Inner tunnel darkness */}
    <path
      d="M75 95 L75 55 Q75 28, 150 28 Q225 28, 225 55 L225 95"
      fill="hsl(0 0% 5% / 0.9)"
    />
    
    {/* Wooden support beams - left */}
    <line x1="70" y1="95" x2="70" y2="45" stroke="hsl(25 35% 50% / 0.4)" strokeWidth="4" />
    <line x1="65" y1="45" x2="85" y2="42" stroke="hsl(25 35% 50% / 0.4)" strokeWidth="3" />
    
    {/* Wooden support beams - right */}
    <line x1="230" y1="95" x2="230" y2="45" stroke="hsl(25 35% 50% / 0.4)" strokeWidth="4" />
    <line x1="235" y1="45" x2="215" y2="42" stroke="hsl(25 35% 50% / 0.4)" strokeWidth="3" />
    
    {/* Cross beam */}
    <path
      d="M65 45 Q150 35, 235 45"
      stroke="hsl(25 35% 50% / 0.4)"
      strokeWidth="4"
      fill="none"
    />
    
    {/* SRETNO banner */}
    <rect x="100" y="5" width="100" height="22" rx="2" fill="hsl(25 35% 50% / 0.25)" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="1" />
    <text
      x="150"
      y="20"
      textAnchor="middle"
      className="font-display"
      fill="hsl(35 25% 75% / 0.7)"
      fontSize="12"
      fontWeight="600"
      letterSpacing="3"
    >
      SRETNO
    </text>
    
    {/* Stone texture details */}
    <path d="M65 70 Q67 68, 72 70" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" fill="none" />
    <path d="M228 60 Q232 58, 235 61" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" fill="none" />
    <path d="M80 35 Q90 33, 95 36" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" fill="none" />
    <path d="M205 35 Q215 33, 220 36" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" fill="none" />
    
    {/* Rails going into tunnel */}
    <line x1="110" y1="95" x2="130" y2="75" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="2" />
    <line x1="190" y1="95" x2="170" y2="75" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="2" />
  </svg>
));

// Miners walking silhouettes - Amenities section
const MinersWalking = memo(() => (
  <svg
    viewBox="0 0 400 70"
    className="w-full h-auto max-w-2xl"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax meet"
  >
    {/* Mountain/hill silhouette background */}
    <path
      d="M0 70 L0 55 Q20 45, 50 50 Q80 40, 120 48 Q160 35, 200 42 Q240 30, 280 38 Q320 32, 360 40 Q390 35, 400 45 L400 70 Z"
      fill="hsl(35 25% 75% / 0.08)"
    />
    
    {/* Ground line */}
    <path
      d="M0 65 Q100 62, 200 65 Q300 68, 400 65"
      stroke="hsl(35 25% 75% / 0.15)"
      strokeWidth="1"
      fill="none"
    />
    
    {/* Miner 1 - walking with pickaxe */}
    <g transform="translate(40, 20)" fill="hsl(35 25% 75% / 0.25)">
      {/* Head with helmet */}
      <ellipse cx="8" cy="5" rx="5" ry="5" />
      <path d="M3 3 L13 3 L12 0 L4 0 Z" /> {/* Helmet */}
      <circle cx="5" cy="2" r="1.5" fill="hsl(25 35% 50% / 0.3)" /> {/* Lamp */}
      {/* Body */}
      <path d="M8 10 L8 28 M4 15 L8 12 L12 18 M8 28 L3 45 M8 28 L13 44" strokeWidth="2.5" stroke="hsl(35 25% 75% / 0.25)" fill="none" />
      {/* Pickaxe */}
      <path d="M12 18 L28 8 M24 5 L28 8 L28 12" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1.5" fill="none" />
    </g>
    
    {/* Miner 2 - different pose */}
    <g transform="translate(100, 18)" fill="hsl(35 25% 75% / 0.22)">
      <ellipse cx="8" cy="5" rx="5" ry="5" />
      <path d="M3 3 L13 3 L12 0 L4 0 Z" />
      <circle cx="5" cy="2" r="1.5" fill="hsl(25 35% 50% / 0.25)" />
      <path d="M8 10 L8 30 M3 16 L8 12 L14 14 M8 30 L2 48 M8 30 L14 47" strokeWidth="2.5" stroke="hsl(35 25% 75% / 0.22)" fill="none" />
      {/* Shovel */}
      <path d="M14 14 L25 5" stroke="hsl(35 25% 75% / 0.18)" strokeWidth="1.5" fill="none" />
      <ellipse cx="27" cy="4" rx="3" ry="2" fill="hsl(35 25% 75% / 0.15)" />
    </g>
    
    {/* Miner 3 */}
    <g transform="translate(170, 22)" fill="hsl(35 25% 75% / 0.2)">
      <ellipse cx="8" cy="5" rx="5" ry="5" />
      <path d="M3 3 L13 3 L12 0 L4 0 Z" />
      <circle cx="5" cy="2" r="1.5" fill="hsl(25 35% 50% / 0.22)" />
      <path d="M8 10 L8 28 M5 17 L8 12 L11 17 M8 28 L4 44 M8 28 L12 43" strokeWidth="2.5" stroke="hsl(35 25% 75% / 0.2)" fill="none" />
      {/* Pickaxe on shoulder */}
      <path d="M5 12 L-5 5 M-8 2 L-5 5 L-5 9" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1.5" fill="none" />
    </g>
    
    {/* Miner 4 */}
    <g transform="translate(240, 20)" fill="hsl(35 25% 75% / 0.23)">
      <ellipse cx="8" cy="5" rx="5" ry="5" />
      <path d="M3 3 L13 3 L12 0 L4 0 Z" />
      <circle cx="5" cy="2" r="1.5" fill="hsl(25 35% 50% / 0.25)" />
      <path d="M8 10 L8 29 M4 18 L8 12 L13 16 M8 29 L3 46 M8 29 L13 45" strokeWidth="2.5" stroke="hsl(35 25% 75% / 0.23)" fill="none" />
      {/* Lantern */}
      <rect x="14" y="12" width="4" height="6" stroke="hsl(25 35% 50% / 0.2)" strokeWidth="1" fill="none" />
    </g>
    
    {/* Miner 5 */}
    <g transform="translate(310, 19)" fill="hsl(35 25% 75% / 0.18)">
      <ellipse cx="8" cy="5" rx="5" ry="5" />
      <path d="M3 3 L13 3 L12 0 L4 0 Z" />
      <circle cx="5" cy="2" r="1.5" fill="hsl(25 35% 50% / 0.2)" />
      <path d="M8 10 L8 28 M3 15 L8 12 L14 17 M8 28 L2 47 M8 28 L14 46" strokeWidth="2.5" stroke="hsl(35 25% 75% / 0.18)" fill="none" />
      {/* Pickaxe */}
      <path d="M14 17 L26 10 M22 7 L26 10 L26 14" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1.5" fill="none" />
    </g>
    
    {/* Small mine entrance in distance */}
    <path
      d="M380 65 L380 50 Q380 42, 390 42 Q400 42, 400 50 L400 65"
      fill="hsl(0 0% 5% / 0.5)"
      stroke="hsl(35 25% 75% / 0.1)"
      strokeWidth="1"
    />
  </svg>
));

// Mine cart on rails - Location section
const MineCart = memo(() => (
  <svg
    viewBox="0 0 350 80"
    className="w-56 sm:w-72 md:w-96 h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rails */}
    <line x1="0" y1="70" x2="350" y2="70" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="2" />
    <line x1="0" y1="75" x2="350" y2="75" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="2" />
    
    {/* Rail ties */}
    {[...Array(18)].map((_, i) => (
      <line
        key={i}
        x1={10 + i * 20}
        y1="68"
        x2={10 + i * 20}
        y2="77"
        stroke="hsl(25 35% 50% / 0.25)"
        strokeWidth="3"
      />
    ))}
    
    {/* Miner pushing cart */}
    <g transform="translate(80, 5)" fill="hsl(35 25% 75% / 0.25)">
      {/* Head with helmet */}
      <ellipse cx="8" cy="8" rx="6" ry="6" />
      <path d="M2 5 L14 5 L13 1 L3 1 Z" />
      <circle cx="4" cy="3" r="2" fill="hsl(25 35% 50% / 0.3)" />
      {/* Body - leaning forward pushing */}
      <path d="M8 14 L15 35 M5 20 L8 14 L20 22 M15 35 L8 58 M15 35 L22 55" strokeWidth="3" stroke="hsl(35 25% 75% / 0.25)" fill="none" />
    </g>
    
    {/* Mine cart body */}
    <g transform="translate(130, 20)">
      {/* Cart body - trapezoid shape */}
      <path
        d="M10 45 L0 20 L100 20 L90 45 Z"
        fill="hsl(35 25% 75% / 0.15)"
        stroke="hsl(35 25% 75% / 0.3)"
        strokeWidth="2"
      />
      
      {/* Coal pile */}
      <path
        d="M10 20 Q25 5, 50 8 Q75 3, 90 20"
        fill="hsl(0 0% 12% / 0.8)"
        stroke="hsl(35 25% 75% / 0.15)"
        strokeWidth="1"
      />
      
      {/* Coal pieces detail */}
      <ellipse cx="30" cy="12" rx="8" ry="5" fill="hsl(0 0% 10%)" />
      <ellipse cx="55" cy="10" rx="10" ry="6" fill="hsl(0 0% 8%)" />
      <ellipse cx="75" cy="13" rx="7" ry="4" fill="hsl(0 0% 11%)" />
      <ellipse cx="45" cy="6" rx="6" ry="4" fill="hsl(0 0% 9%)" />
      
      {/* Cart reinforcement lines */}
      <line x1="5" y1="30" x2="95" y2="30" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1.5" />
      <line x1="25" y1="20" x2="20" y2="45" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" />
      <line x1="75" y1="20" x2="80" y2="45" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" />
      
      {/* Wheels */}
      <circle cx="20" cy="50" r="8" fill="hsl(0 0% 15%)" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="2" />
      <circle cx="20" cy="50" r="3" fill="hsl(35 25% 75% / 0.2)" />
      <circle cx="80" cy="50" r="8" fill="hsl(0 0% 15%)" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="2" />
      <circle cx="80" cy="50" r="3" fill="hsl(35 25% 75% / 0.2)" />
    </g>
    
    {/* Falling coal pieces */}
    <ellipse cx="255" cy="68" rx="3" ry="2" fill="hsl(0 0% 10% / 0.6)" />
    <ellipse cx="265" cy="72" rx="2" ry="1.5" fill="hsl(0 0% 12% / 0.5)" />
    <ellipse cx="248" cy="73" rx="2.5" ry="1.5" fill="hsl(0 0% 11% / 0.5)" />
  </svg>
));

// Mining tools decorative border - About section
const MiningTools = memo(() => (
  <svg
    viewBox="0 0 400 50"
    className="w-full h-auto max-w-xl"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Top decorative line */}
    <path
      d="M20 8 Q100 5, 200 8 Q300 11, 380 8"
      stroke="hsl(35 25% 75% / 0.15)"
      strokeWidth="1"
      fill="none"
    />
    
    {/* Bottom decorative line */}
    <path
      d="M20 42 Q100 45, 200 42 Q300 39, 380 42"
      stroke="hsl(35 25% 75% / 0.15)"
      strokeWidth="1"
      fill="none"
    />
    
    {/* Pickaxe 1 */}
    <g transform="translate(40, 15)">
      <line x1="0" y1="20" x2="20" y2="0" stroke="hsl(25 35% 50% / 0.3)" strokeWidth="2" />
      <path d="M18 -2 L24 0 L22 6" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="2" fill="none" />
      <path d="M-2 22 L2 18 L0 24" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="2" fill="none" />
    </g>
    
    {/* Ornament */}
    <circle cx="90" cy="25" r="3" fill="hsl(25 35% 50% / 0.2)" />
    
    {/* Lamp 1 */}
    <g transform="translate(110, 12)">
      <rect x="0" y="8" width="12" height="16" rx="1" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" />
      <path d="M2 8 L2 4 L10 4 L10 8" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1" fill="none" />
      <circle cx="6" cy="0" r="2" fill="hsl(25 35% 50% / 0.25)" />
      <ellipse cx="6" cy="16" rx="3" ry="2" fill="hsl(25 35% 50% / 0.15)" />
    </g>
    
    {/* Ornament */}
    <path d="M150 20 Q155 15, 160 20 Q165 25, 170 20" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" fill="none" />
    
    {/* Shovel */}
    <g transform="translate(180, 13)">
      <line x1="10" y1="22" x2="10" y2="2" stroke="hsl(25 35% 50% / 0.3)" strokeWidth="2" />
      <ellipse cx="10" cy="0" rx="8" ry="4" fill="hsl(35 25% 75% / 0.2)" />
    </g>
    
    {/* Ornament */}
    <circle cx="220" cy="25" r="3" fill="hsl(25 35% 50% / 0.2)" />
    
    {/* Helmet */}
    <g transform="translate(240, 14)">
      <path d="M0 18 Q10 8, 20 18" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="2" fill="none" />
      <line x1="0" y1="18" x2="20" y2="18" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="2" />
      <circle cx="5" cy="14" r="3" fill="hsl(25 35% 50% / 0.2)" />
    </g>
    
    {/* Ornament */}
    <path d="M280 20 Q285 15, 290 20 Q295 25, 300 20" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" fill="none" />
    
    {/* Lamp 2 */}
    <g transform="translate(310, 12)">
      <rect x="0" y="8" width="12" height="16" rx="1" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" />
      <path d="M2 8 L2 4 L10 4 L10 8" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1" fill="none" />
      <circle cx="6" cy="0" r="2" fill="hsl(25 35% 50% / 0.25)" />
      <ellipse cx="6" cy="16" rx="3" ry="2" fill="hsl(25 35% 50% / 0.15)" />
    </g>
    
    {/* Pickaxe 2 */}
    <g transform="translate(345, 15)">
      <line x1="20" y1="20" x2="0" y2="0" stroke="hsl(25 35% 50% / 0.3)" strokeWidth="2" />
      <path d="M-2 -2 L-4 4 L2 2" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="2" fill="none" />
      <path d="M22 22 L18 18 L24 20" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="2" fill="none" />
    </g>
  </svg>
));

TunnelEntrance.displayName = 'TunnelEntrance';
MinersWalking.displayName = 'MinersWalking';
MineCart.displayName = 'MineCart';
MiningTools.displayName = 'MiningTools';
MiningIllustration.displayName = 'MiningIllustration';

export default MiningIllustration;
