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

// Pure black style - minimal strokes, solid black fills (max opacity for dramatic effect)
const pureBlackFill = "hsl(0 0% 4%)";
const darkFill = "hsl(0 0% 6%)";
const subtleStroke = "hsl(0 0% 12%)";

// Tunnel entrance with "SRETNO" sign - Pure black silhouettes with full-width rails, wagons and miners
const TunnelEntrance = memo(() => (
  <div className="relative w-full">
    {/* Full-width rails */}
    <svg
      viewBox="0 0 1920 20"
      className="absolute bottom-0 left-0 w-[200vw] -translate-x-1/2 h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 8 L1920 8" stroke={subtleStroke} strokeWidth="3" fill="none" />
      <path d="M0 16 L1920 16" stroke={subtleStroke} strokeWidth="3" fill="none" />
      {/* Rail ties */}
      {[...Array(80)].map((_, i) => (
        <rect
          key={i}
          x={10 + i * 24}
          y="6"
          width="6"
          height="12"
          fill={darkFill}
          fillOpacity="0.7"
        />
      ))}
    </svg>
    
    {/* Full scene with tunnel, wagons and miners */}
    <svg
      viewBox="0 0 480 100"
      className="relative w-full h-auto max-w-3xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Wagon 1 - far left */}
      <g transform="translate(10, 48)">
        <path d="M2 38 L8 16 L42 16 L48 38 Z" fill={pureBlackFill} fillOpacity="0.98" />
        <path d="M10 16 L14 8 Q25 4, 36 8 L40 16 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        <circle cx="12" cy="42" r="5" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="38" cy="42" r="5" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Miner 1 - pushing wagon */}
      <g transform="translate(55, 42)">
        <path 
          d="M8 8 Q12 4, 15 6 Q17 8, 16 12 L18 16 Q20 18, 18 20 L20 26 L22 38 Q23 44, 20 50 L16 50 L18 40 L14 50 L10 50 L13 38 L10 26 L4 30 L2 26 L8 20 Q6 18, 8 16 L8 8 Z" 
          fill={pureBlackFill}
          fillOpacity="1"
        />
        <ellipse cx="11" cy="7" rx="4" ry="3" fill={darkFill} fillOpacity="1" />
        <path d="M4 26 L-6 34" stroke={pureBlackFill} strokeWidth="2" strokeLinecap="square" />
      </g>
      
      {/* Wagon 2 */}
      <g transform="translate(85, 48)">
        <path d="M2 38 L8 16 L42 16 L48 38 Z" fill={pureBlackFill} fillOpacity="0.98" />
        <path d="M10 16 L13 9 Q25 5, 37 9 L40 16 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        <circle cx="12" cy="42" r="5" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="38" cy="42" r="5" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Tunnel entrance - center */}
      <g transform="translate(150, 0)">
        {/* Outer stone arch */}
        <path 
          d="M35 94 L35 50 Q35 18, 90 14 Q145 18, 145 50 L145 94 L132 94 L132 48 Q132 26, 90 22 Q48 26, 48 48 L48 94 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        
        {/* Inner tunnel */}
        <path 
          d="M54 94 L54 50 Q54 30, 90 26 Q126 30, 126 50 L126 94 Z" 
          fill="hsl(0 0% 2%)"
          fillOpacity="0.95"
        />
        
        {/* Wooden beams */}
        <rect x="50" y="42" width="6" height="52" fill={darkFill} fillOpacity="1" />
        <rect x="124" y="42" width="6" height="52" fill={darkFill} fillOpacity="1" />
        
        {/* Cross beam */}
        <path d="M46 40 Q90 30, 134 40 L134 45 Q90 35, 46 45 Z" fill={pureBlackFill} fillOpacity="1" />
        
        {/* SRETNO banner */}
        <rect x="55" y="2" width="70" height="22" fill={pureBlackFill} fillOpacity="1" />
        <text
          x="90"
          y="17"
          textAnchor="middle"
          className="font-display"
          fill="hsl(35 25% 80%)"
          fillOpacity="0.9"
          fontSize="11"
          fontWeight="700"
          letterSpacing="3"
        >
          SRETNO
        </text>
      </g>
      
      {/* Miner 2 - exiting tunnel with pickaxe */}
      <g transform="translate(310, 38)">
        <path 
          d="M12 10 Q15 6, 18 8 Q20 10, 19 14 L19 18 Q21 20, 19 22 L21 28 L23 42 Q24 50, 21 56 L17 56 L19 44 L15 56 L11 56 L14 42 L11 28 L6 32 L4 28 L10 22 Q8 20, 10 18 L12 10 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        <ellipse cx="15" cy="9" rx="4" ry="3" fill={darkFill} fillOpacity="1" />
        <path d="M8 16 L24 12" stroke={pureBlackFill} strokeWidth="2" strokeLinecap="square" />
        <path d="M22 10 L27 14 L24 17 Z" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Wagon 3 - right side */}
      <g transform="translate(355, 48)">
        <path d="M2 38 L8 16 L42 16 L48 38 Z" fill={pureBlackFill} fillOpacity="0.98" />
        <path d="M10 16 L15 7 Q25 3, 35 7 L40 16 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        <circle cx="12" cy="42" r="5" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="38" cy="42" r="5" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Miner 3 - pulling wagon on right */}
      <g transform="translate(410, 40)">
        <path 
          d="M12 10 Q15 6, 18 8 Q20 10, 19 14 L19 18 Q21 20, 19 22 L20 28 L22 40 Q23 48, 20 54 L16 54 L18 42 L14 54 L10 54 L13 40 L10 28 L4 34 L2 30 L8 24 Q6 20, 8 18 L12 10 Z" 
          fill={pureBlackFill}
          fillOpacity="0.96"
        />
        <ellipse cx="15" cy="9" rx="4" ry="3" fill={darkFill} fillOpacity="0.98" />
        <path d="M4 34 L-10 42" stroke={pureBlackFill} strokeWidth="2" strokeLinecap="square" />
      </g>
      
      {/* Wagon 4 - far right */}
      <g transform="translate(430, 48)">
        <path d="M2 38 L8 16 L42 16 L48 38 Z" fill={pureBlackFill} fillOpacity="0.97" />
        <path d="M10 16 L14 9 Q25 5, 36 9 L40 16 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        <circle cx="12" cy="42" r="5" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="38" cy="42" r="5" fill={pureBlackFill} fillOpacity="1" />
      </g>
    </svg>
  </div>
));

// Miners walking - Pure black silhouettes with full-width rails and wagon
const MinersWalking = memo(() => (
  <div className="relative w-full">
    {/* Full-width rails */}
    <svg
      viewBox="0 0 1920 20"
      className="absolute bottom-0 left-0 w-[200vw] -translate-x-1/2 h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 8 L1920 8" stroke={subtleStroke} strokeWidth="3" fill="none" />
      <path d="M0 16 L1920 16" stroke={subtleStroke} strokeWidth="3" fill="none" />
      {/* Rail ties */}
      {[...Array(80)].map((_, i) => (
        <rect
          key={i}
          x={10 + i * 24}
          y="6"
          width="6"
          height="12"
          fill={darkFill}
          fillOpacity="0.7"
        />
      ))}
    </svg>
    
    {/* Miners, wagon and content */}
    <svg
      viewBox="0 0 520 70"
      className="relative w-full h-auto max-w-3xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Mountain silhouette - pure black mass */}
      <path 
        d="M0 68 L30 52 L60 58 L95 42 L130 50 L170 35 L210 45 L255 30 L295 38 L340 32 L380 42 L420 38 L460 45 L500 40 L520 48 L520 70 L0 70 Z" 
        fill={pureBlackFill}
        fillOpacity="0.95"
      />
      
      {/* Wagon 1 - on the left */}
      <g transform="translate(5, 18)">
        {/* Cart body */}
        <path 
          d="M2 42 L8 18 L48 18 L54 42 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        {/* Coal pile */}
        <path 
          d="M10 18 L15 8 Q28 4, 40 8 L46 18 Z" 
          fill="hsl(0 0% 2%)"
          fillOpacity="1"
        />
        {/* Wheels */}
        <circle cx="14" cy="46" r="6" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="42" cy="46" r="6" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Miner 1 - pushing first wagon */}
      <g transform="translate(55, 8)">
        <path 
          d="M8 10 Q12 6, 16 8 Q18 10, 17 14 L20 18 Q22 20, 22 24 L26 32 Q28 42, 24 52 L20 52 L21 40 L18 52 L14 52 L17 38 L14 28 L8 32 L6 28 L12 22 Q10 18, 12 16 L8 10 Z" 
          fill={pureBlackFill}
          fillOpacity="1"
        />
        <ellipse cx="12" cy="9" rx="5" ry="4" fill={darkFill} fillOpacity="1" />
        {/* Arms pushing */}
        <path d="M6 28 L-8 36" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
      </g>
      
      {/* Wagon 2 - in the middle */}
      <g transform="translate(95, 18)">
        {/* Cart body */}
        <path 
          d="M2 42 L8 18 L48 18 L54 42 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        {/* Coal pile */}
        <path 
          d="M10 18 L14 10 Q28 5, 42 10 L46 18 Z" 
          fill="hsl(0 0% 2%)"
          fillOpacity="1"
        />
        {/* Wheels */}
        <circle cx="14" cy="46" r="6" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="42" cy="46" r="6" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Miner 2 - walking with pickaxe on shoulder */}
      <g transform="translate(160, 8)">
        <path 
          d="M12 8 Q15 5, 18 7 Q20 9, 19 13 L19 16 Q21 18, 19 20 L21 26 L23 38 Q24 48, 22 55 L18 55 L20 42 L16 55 L12 55 L15 40 L13 26 L9 32 L7 28 L11 22 Q9 20, 11 18 L12 8 Z" 
          fill={pureBlackFill}
          fillOpacity="1"
        />
        <ellipse cx="15" cy="7" rx="5" ry="4" fill={darkFill} fillOpacity="1" />
        <path d="M8 14 L28 10" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
        <path d="M26 7 L32 12 L28 16 Z" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Miner 3 - hands at sides */}
      <g transform="translate(220, 6)">
        <path 
          d="M12 10 Q15 7, 18 9 Q20 11, 19 15 L19 18 Q21 20, 19 22 L20 28 L22 40 Q23 50, 21 57 L17 57 L19 44 L15 57 L11 57 L14 42 L12 28 L8 38 L6 36 L10 26 Q8 22, 10 20 L12 10 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        <ellipse cx="15" cy="9" rx="5" ry="4" fill={darkFill} fillOpacity="1" />
        <path d="M10 7 L20 7 L18 4 L12 4 Z" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Miner 4 - carrying shovel low */}
      <g transform="translate(280, 10)">
        <path 
          d="M12 8 Q15 5, 18 7 Q20 9, 19 13 L19 16 Q21 18, 19 20 L20 26 L22 36 Q23 46, 21 53 L17 53 L19 40 L15 53 L11 53 L14 38 L12 26 L6 30 L4 28 L10 22 Q8 20, 10 18 L12 8 Z" 
          fill={pureBlackFill}
          fillOpacity="0.96"
        />
        <ellipse cx="15" cy="7" rx="5" ry="4" fill={darkFill} fillOpacity="0.98" />
        <path d="M6 30 L-4 48" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
        <ellipse cx="-6" cy="50" rx="5" ry="3" fill={darkFill} fillOpacity="0.96" transform="rotate(70, -6, 50)" />
      </g>
      
      {/* Miner 5 - lantern in lowered hand */}
      <g transform="translate(340, 7)">
        <path 
          d="M12 10 Q15 7, 18 9 Q20 11, 19 15 L19 18 Q21 20, 19 22 L20 28 L22 40 Q23 50, 21 56 L17 56 L19 43 L15 56 L11 56 L14 41 L12 28 L8 40 L6 38 L10 26 Q8 22, 10 20 L12 10 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        <ellipse cx="15" cy="9" rx="5" ry="4" fill={darkFill} fillOpacity="1" />
        <rect x="4" y="42" width="6" height="10" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Miner 6 - bent forward, tired pose */}
      <g transform="translate(400, 12)">
        <path 
          d="M14 6 Q17 4, 20 6 Q22 8, 21 12 L22 15 Q24 17, 22 19 L24 24 L28 34 Q30 44, 26 51 L22 51 L25 40 L20 51 L16 51 L20 38 L18 24 L12 28 L10 26 L16 20 Q14 18, 16 16 L14 6 Z" 
          fill={pureBlackFill}
          fillOpacity="0.95"
        />
        <ellipse cx="17" cy="5" rx="5" ry="4" fill={darkFill} fillOpacity="0.97" transform="rotate(15, 17, 5)" />
        <path d="M12 28 L2 38" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
        <path d="M0 36 L-4 42 L2 44 Z" fill={darkFill} fillOpacity="0.95" />
      </g>
      
      {/* Mine entrance - pure black arch */}
      <g transform="translate(460, 0)">
        <path 
          d="M0 65 L0 45 Q0 32, 18 30 Q36 32, 36 45 L36 65 L32 65 L32 46 Q32 36, 18 34 Q4 36, 4 46 L4 65 Z" 
          fill={pureBlackFill}
          fillOpacity="0.95"
        />
        <path d="M6 65 L6 48 Q6 38, 18 36 Q30 38, 30 48 L30 65 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        <rect x="4" y="44" width="4" height="21" fill={darkFill} fillOpacity="0.98" />
        <rect x="28" y="44" width="4" height="21" fill={darkFill} fillOpacity="0.98" />
      </g>
    </svg>
  </div>
));

// Mine cart - Pure black silhouettes with full-width rails, multiple wagons and miners
const MineCart = memo(() => (
  <div className="relative w-full">
    {/* Full-width rails */}
    <svg
      viewBox="0 0 1920 20"
      className="absolute bottom-0 left-0 w-[200vw] -translate-x-1/2 h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 8 L1920 8" stroke={subtleStroke} strokeWidth="3" fill="none" />
      <path d="M0 16 L1920 16" stroke={subtleStroke} strokeWidth="3" fill="none" />
      {/* Rail ties */}
      {[...Array(80)].map((_, i) => (
        <rect
          key={i}
          x={10 + i * 24}
          y="6"
          width="6"
          height="12"
          fill={darkFill}
          fillOpacity="0.7"
        />
      ))}
    </svg>
    
    {/* Full scene with carts and miners */}
    <svg
      viewBox="0 0 450 80"
      className="relative w-full h-auto max-w-3xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Wagon 1 - far left (empty) */}
      <g transform="translate(5, 28)">
        <path d="M2 38 L10 14 L50 14 L58 38 Z" fill={pureBlackFill} fillOpacity="0.96" />
        <circle cx="14" cy="42" r="6" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="46" cy="42" r="6" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Miner 1 - pushing first wagon */}
      <g transform="translate(60, 18)">
        <path 
          d="M8 10 Q12 6, 16 8 Q18 10, 17 14 L20 18 Q22 20, 22 24 L26 32 Q28 42, 24 52 L20 52 L21 40 L18 52 L14 52 L17 38 L14 28 L8 32 L6 28 L12 22 Q10 18, 12 16 L8 10 Z" 
          fill={pureBlackFill}
          fillOpacity="1"
        />
        <ellipse cx="12" cy="9" rx="5" ry="4" fill={darkFill} fillOpacity="1" />
        <path d="M6 28 L-8 36" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
      </g>
      
      {/* Wagon 2 - full of coal */}
      <g transform="translate(100, 28)">
        <path d="M2 38 L10 14 L55 14 L63 38 Z" fill={pureBlackFill} fillOpacity="0.98" />
        <path d="M12 14 L18 4 Q32 -2, 48 4 L54 14 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        <circle cx="14" cy="42" r="6" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="51" cy="42" r="6" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Miner 2 - walking alongside */}
      <g transform="translate(170, 16)">
        <path 
          d="M12 10 Q15 6, 18 8 Q20 10, 19 14 L19 18 Q21 20, 19 22 L20 28 L22 42 Q23 50, 20 54 L16 54 L18 44 L14 54 L10 54 L13 42 L10 28 L5 34 L3 30 L9 24 Q7 20, 9 18 L12 10 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        <ellipse cx="15" cy="9" rx="5" ry="4" fill={darkFill} fillOpacity="1" />
        <path d="M10 6 L20 6 L18 3 L12 3 Z" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Main cart - center (large, full of coal) */}
      <g transform="translate(210, 20)">
        <path d="M5 52 L15 18 L85 18 L95 52 Z" fill={pureBlackFill} fillOpacity="0.98" />
        <path d="M18 18 L24 6 Q40 0, 55 4 Q70 -2, 80 6 L86 18 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        <circle cx="22" cy="56" r="8" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="78" cy="56" r="8" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Miner 3 - pushing main cart */}
      <g transform="translate(315, 14)">
        <path 
          d="M8 12 Q12 8, 16 10 Q18 12, 17 16 L20 20 Q22 22, 22 26 L26 36 Q28 48, 24 58 L20 58 L21 46 L18 58 L14 58 L17 44 L14 32 L8 38 L6 34 L12 26 Q10 22, 12 20 L8 12 Z" 
          fill={pureBlackFill}
          fillOpacity="1"
        />
        <path d="M6 12 Q9 4, 17 8 L18 12 Q12 14, 7 13 Z" fill={darkFill} fillOpacity="1" />
        <circle cx="6" cy="9" r="3" fill={darkFill} fillOpacity="1" />
        <path d="M16 24 L30 32" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
      </g>
      
      {/* Wagon 4 - right side */}
      <g transform="translate(360, 28)">
        <path d="M2 38 L10 14 L50 14 L58 38 Z" fill={pureBlackFill} fillOpacity="0.97" />
        <path d="M12 14 L16 6 Q30 2, 44 6 L48 14 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        <circle cx="14" cy="42" r="6" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="46" cy="42" r="6" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Fallen coal pieces */}
      <rect x="420" y="68" width="5" height="4" fill={darkFill} fillOpacity="0.98" transform="rotate(15, 422, 70)" />
      <rect x="428" y="70" width="4" height="3" fill={darkFill} fillOpacity="0.96" transform="rotate(-10, 430, 71)" />
      <rect x="435" y="71" width="4" height="3" fill={darkFill} fillOpacity="0.97" transform="rotate(25, 437, 72)" />
    </svg>
  </div>
));

// Mining tools - Pure black silhouettes with full-width rails, wagons on sides
const MiningTools = memo(() => (
  <div className="relative w-full">
    {/* Full-width rails */}
    <svg
      viewBox="0 0 1920 20"
      className="absolute bottom-0 left-0 w-[200vw] -translate-x-1/2 h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 8 L1920 8" stroke={subtleStroke} strokeWidth="3" fill="none" />
      <path d="M0 16 L1920 16" stroke={subtleStroke} strokeWidth="3" fill="none" />
      {/* Rail ties */}
      {[...Array(80)].map((_, i) => (
        <rect
          key={i}
          x={10 + i * 24}
          y="6"
          width="6"
          height="12"
          fill={darkFill}
          fillOpacity="0.7"
        />
      ))}
    </svg>
    
    {/* Tools and wagons content */}
    <svg
      viewBox="0 0 520 60"
      className="relative w-full h-auto max-w-3xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Wagon left */}
      <g transform="translate(5, 18)">
        <path d="M2 32 L8 12 L38 12 L44 32 Z" fill={pureBlackFill} fillOpacity="0.97" />
        <path d="M10 12 L14 5 Q23 2, 32 5 L36 12 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        <circle cx="10" cy="36" r="5" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="36" cy="36" r="5" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Miner with lamp - left side */}
      <g transform="translate(55, 8)">
        <path 
          d="M10 8 Q13 5, 16 7 Q18 9, 17 12 L17 15 Q19 17, 17 19 L18 24 L20 36 Q21 44, 18 50 L14 50 L16 38 L12 50 L8 50 L11 36 L8 24 L4 28 L2 25 L7 20 Q5 18, 7 16 L10 8 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        <ellipse cx="13" cy="7" rx="4" ry="3" fill={darkFill} fillOpacity="1" />
        <rect x="2" y="30" width="5" height="8" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Pickaxe 1 */}
      <g transform="translate(100, 18)">
        <rect x="0" y="16" width="20" height="4" fill={pureBlackFill} fillOpacity="1" transform="rotate(-45, 10, 18)" />
        <path d="M15 2 L24 7 L21 12 L12 7 Z" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Diamond */}
      <path d="M145 28 L150 33 L145 38 L140 33 Z" fill={darkFill} fillOpacity="0.95" />
      
      {/* Lamp 1 */}
      <g transform="translate(165, 16)">
        <rect x="0" y="6" width="12" height="18" fill={pureBlackFill} fillOpacity="0.98" />
        <path d="M2 6 L3 1 L9 1 L10 6 Z" fill={darkFill} fillOpacity="1" />
        <circle cx="6" cy="0" r="3" fill={darkFill} fillOpacity="0.98" />
      </g>
      
      {/* Zigzag */}
      <path d="M200 30 L208 24 L216 30 L224 24" stroke={subtleStroke} strokeWidth="2" fill="none" />
      
      {/* Shovel */}
      <g transform="translate(240, 16)">
        <rect x="7" y="4" width="4" height="20" fill={pureBlackFill} fillOpacity="1" />
        <ellipse cx="9" cy="4" rx="8" ry="4" fill={darkFill} fillOpacity="0.98" />
      </g>
      
      {/* Helmet */}
      <g transform="translate(275, 18)">
        <path d="M0 20 Q2 10, 10 6 Q18 10, 20 20 L0 20 Z" fill={pureBlackFill} fillOpacity="0.98" />
        <circle cx="4" cy="13" r="3" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Zigzag */}
      <path d="M315 30 L323 24 L331 30 L339 24" stroke={subtleStroke} strokeWidth="2" fill="none" />
      
      {/* Lamp 2 */}
      <g transform="translate(355, 16)">
        <rect x="0" y="6" width="12" height="18" fill={pureBlackFill} fillOpacity="0.98" />
        <path d="M2 6 L3 1 L9 1 L10 6 Z" fill={darkFill} fillOpacity="1" />
        <circle cx="6" cy="0" r="3" fill={darkFill} fillOpacity="0.98" />
      </g>
      
      {/* Pickaxe 2 */}
      <g transform="translate(385, 18)">
        <rect x="-2" y="16" width="20" height="4" fill={pureBlackFill} fillOpacity="1" transform="rotate(45, 8, 18)" />
        <path d="M3 2 L-6 7 L-3 12 L6 7 Z" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Miner with pickaxe - right side */}
      <g transform="translate(420, 6)">
        <path 
          d="M12 10 Q15 6, 18 8 Q20 10, 19 14 L19 18 Q21 20, 19 22 L20 28 L22 42 Q23 50, 20 52 L16 52 L18 42 L14 52 L10 52 L13 40 L10 28 L5 32 L3 28 L9 22 Q7 20, 9 18 L12 10 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        <ellipse cx="15" cy="9" rx="4" ry="3" fill={darkFill} fillOpacity="1" />
        <path d="M8 16 L26 12" stroke={pureBlackFill} strokeWidth="2" strokeLinecap="square" />
        <path d="M24 10 L29 14 L26 17 Z" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Wagon right */}
      <g transform="translate(470, 18)">
        <path d="M2 32 L8 12 L38 12 L44 32 Z" fill={pureBlackFill} fillOpacity="0.97" />
        <path d="M10 12 L13 6 Q23 3, 33 6 L36 12 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        <circle cx="10" cy="36" r="5" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="36" cy="36" r="5" fill={pureBlackFill} fillOpacity="1" />
      </g>
    </svg>
  </div>
));

TunnelEntrance.displayName = 'TunnelEntrance';
MinersWalking.displayName = 'MinersWalking';
MineCart.displayName = 'MineCart';
MiningTools.displayName = 'MiningTools';
MiningIllustration.displayName = 'MiningIllustration';

export default MiningIllustration;
