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

// Tunnel entrance with "SRETNO" sign - Pure black silhouettes with full-width rails
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
      <path d="M0 10 L1920 10" stroke={subtleStroke} strokeWidth="3" fill="none" />
      <path d="M0 18 L1920 18" stroke={subtleStroke} strokeWidth="3" fill="none" />
      {/* Rail ties */}
      {[...Array(80)].map((_, i) => (
        <rect
          key={i}
          x={10 + i * 24}
          y="8"
          width="6"
          height="12"
          fill={darkFill}
          fillOpacity="0.7"
        />
      ))}
    </svg>
    
    {/* Tunnel content */}
    <svg
      viewBox="0 0 300 100"
      className="relative w-48 sm:w-64 md:w-80 h-auto mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer stone arch - pure black silhouette */}
      <path 
        d="M55 94 L55 55 Q55 20, 150 15 Q245 20, 245 55 L245 94 L230 94 L230 52 Q230 28, 150 25 Q70 28, 70 52 L70 94 Z" 
        fill={pureBlackFill}
        fillOpacity="0.98"
      />
      
      {/* Inner tunnel - absolute black */}
      <path 
        d="M78 94 L78 55 Q78 32, 150 28 Q222 32, 222 55 L222 94 Z" 
        fill="hsl(0 0% 2%)"
        fillOpacity="0.95"
      />
      
      {/* Wooden beam left - black rectangle */}
      <rect x="72" y="45" width="8" height="49" fill={darkFill} fillOpacity="1" />
      
      {/* Wooden beam right - black rectangle */}
      <rect x="220" y="45" width="8" height="49" fill={darkFill} fillOpacity="1" />
      
      {/* Cross beam - black silhouette */}
      <path 
        d="M68 42 Q150 32, 232 42 L232 48 Q150 38, 68 48 Z" 
        fill={pureBlackFill}
        fillOpacity="1"
      />
      
      {/* SRETNO banner - black background */}
      <rect x="95" y="2" width="110" height="26" fill={pureBlackFill} fillOpacity="1" />
      
      {/* SRETNO text - the only light element */}
      <text
        x="150"
        y="20"
        textAnchor="middle"
        className="font-display"
        fill="hsl(35 25% 80%)"
        fillOpacity="0.9"
        fontSize="14"
        fontWeight="700"
        letterSpacing="4"
      >
        SRETNO
      </text>
    </svg>
  </div>
));

// Miners walking - Pure black silhouettes with full-width ground
const MinersWalking = memo(() => (
  <div className="relative w-full">
    {/* Full-width ground line */}
    <svg
      viewBox="0 0 1920 10"
      className="absolute bottom-0 left-0 w-[200vw] -translate-x-1/2 h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 5 L1920 5" stroke={subtleStroke} strokeWidth="2" fill="none" />
    </svg>
    
    {/* Miners and content */}
    <svg
      viewBox="0 0 400 70"
      className="relative w-full h-auto max-w-2xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Mountain silhouette - pure black mass */}
      <path 
        d="M0 68 L30 52 L60 58 L95 42 L130 50 L170 35 L210 45 L255 30 L295 38 L340 32 L380 42 L400 48 L400 70 L0 70 Z" 
        fill={pureBlackFill}
        fillOpacity="0.95"
      />
      
      {/* Miner 1 - walking with pickaxe on shoulder */}
      <g transform="translate(20, 8)">
        <path 
          d="M12 8 Q15 5, 18 7 Q20 9, 19 13 L19 16 Q21 18, 19 20 L21 26 L23 38 Q24 48, 22 55 L18 55 L20 42 L16 55 L12 55 L15 40 L13 26 L9 32 L7 28 L11 22 Q9 20, 11 18 L12 8 Z" 
          fill={pureBlackFill}
          fillOpacity="1"
        />
        {/* Head */}
        <ellipse cx="15" cy="7" rx="5" ry="4" fill={darkFill} fillOpacity="1" />
        {/* Pickaxe on shoulder - horizontal */}
        <path d="M8 14 L28 10" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
        <path d="M26 7 L32 12 L28 16 Z" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Miner 2 - hands at sides, walking */}
      <g transform="translate(85, 6)">
        <path 
          d="M12 10 Q15 7, 18 9 Q20 11, 19 15 L19 18 Q21 20, 19 22 L20 28 L22 40 Q23 50, 21 57 L17 57 L19 44 L15 57 L11 57 L14 42 L12 28 L8 38 L6 36 L10 26 Q8 22, 10 20 L12 10 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        {/* Head with cap */}
        <ellipse cx="15" cy="9" rx="5" ry="4" fill={darkFill} fillOpacity="1" />
        <path d="M10 7 L20 7 L18 4 L12 4 Z" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Miner 3 - carrying shovel low */}
      <g transform="translate(155, 10)">
        <path 
          d="M12 8 Q15 5, 18 7 Q20 9, 19 13 L19 16 Q21 18, 19 20 L20 26 L22 36 Q23 46, 21 53 L17 53 L19 40 L15 53 L11 53 L14 38 L12 26 L6 30 L4 28 L10 22 Q8 20, 10 18 L12 8 Z" 
          fill={pureBlackFill}
          fillOpacity="0.96"
        />
        {/* Head */}
        <ellipse cx="15" cy="7" rx="5" ry="4" fill={darkFill} fillOpacity="0.98" />
        {/* Shovel carried low */}
        <path d="M6 30 L-4 48" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
        <ellipse cx="-6" cy="50" rx="5" ry="3" fill={darkFill} fillOpacity="0.96" transform="rotate(70, -6, 50)" />
      </g>
      
      {/* Miner 4 - lantern in lowered hand */}
      <g transform="translate(225, 7)">
        <path 
          d="M12 10 Q15 7, 18 9 Q20 11, 19 15 L19 18 Q21 20, 19 22 L20 28 L22 40 Q23 50, 21 56 L17 56 L19 43 L15 56 L11 56 L14 41 L12 28 L8 40 L6 38 L10 26 Q8 22, 10 20 L12 10 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        {/* Head */}
        <ellipse cx="15" cy="9" rx="5" ry="4" fill={darkFill} fillOpacity="1" />
        {/* Lantern hanging from lowered arm */}
        <rect x="4" y="42" width="6" height="10" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Miner 5 - bent forward, tired pose */}
      <g transform="translate(295, 12)">
        <path 
          d="M14 6 Q17 4, 20 6 Q22 8, 21 12 L22 15 Q24 17, 22 19 L24 24 L28 34 Q30 44, 26 51 L22 51 L25 40 L20 51 L16 51 L20 38 L18 24 L12 28 L10 26 L16 20 Q14 18, 16 16 L14 6 Z" 
          fill={pureBlackFill}
          fillOpacity="0.95"
        />
        {/* Head tilted forward */}
        <ellipse cx="17" cy="5" rx="5" ry="4" fill={darkFill} fillOpacity="0.97" transform="rotate(15, 17, 5)" />
        {/* Pickaxe dragging */}
        <path d="M12 28 L2 38" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
        <path d="M0 36 L-4 42 L2 44 Z" fill={darkFill} fillOpacity="0.95" />
      </g>
      
      {/* Mine entrance - pure black arch */}
      <g transform="translate(360, 0)">
        <path 
          d="M0 65 L0 45 Q0 32, 18 30 Q36 32, 36 45 L36 65 L32 65 L32 46 Q32 36, 18 34 Q4 36, 4 46 L4 65 Z" 
          fill={pureBlackFill}
          fillOpacity="0.95"
        />
        {/* Inner darkness */}
        <path d="M6 65 L6 48 Q6 38, 18 36 Q30 38, 30 48 L30 65 Z" fill="hsl(0 0% 2%)" fillOpacity="1" />
        {/* Beams */}
        <rect x="4" y="44" width="4" height="21" fill={darkFill} fillOpacity="0.98" />
        <rect x="28" y="44" width="4" height="21" fill={darkFill} fillOpacity="0.98" />
      </g>
    </svg>
  </div>
));

// Mine cart - Pure black silhouettes with full-width rails
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
    
    {/* Cart and miner */}
    <svg
      viewBox="0 0 350 80"
      className="relative w-56 sm:w-72 md:w-96 h-auto mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Miner pushing cart - pure black silhouette */}
      <g transform="translate(70, 2)">
        <path 
          d="M8 10 Q12 6, 16 8 Q18 10, 17 14 L20 18 Q22 20, 22 24 L26 32 Q28 42, 24 62 L20 62 L21 45 L18 62 L14 62 L17 42 L14 28 L8 34 L6 30 L12 22 Q10 18, 12 16 L8 10 Z" 
          fill={pureBlackFill}
          fillOpacity="1"
        />
        {/* Helmet */}
        <path d="M6 10 Q9 3, 17 6 L18 10 Q12 12, 7 11 Z" fill={darkFill} fillOpacity="1" />
        <circle cx="6" cy="7" r="3" fill={darkFill} fillOpacity="1" />
        {/* Arms */}
        <path d="M16 20 L32 28" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
      </g>
      
      {/* Mine cart body - pure black trapezoid */}
      <g transform="translate(125, 12)">
        <path 
          d="M5 52 L15 20 L95 20 L105 52 Z" 
          fill={pureBlackFill}
          fillOpacity="0.98"
        />
        
        {/* Coal pile - solid black mass */}
        <path 
          d="M18 20 L25 6 Q40 0, 55 4 Q70 -2, 85 6 L92 20 Z" 
          fill="hsl(0 0% 2%)"
          fillOpacity="1"
        />
        
        {/* Wheels - solid black circles */}
        <circle cx="22" cy="56" r="10" fill={pureBlackFill} fillOpacity="1" />
        <circle cx="88" cy="56" r="10" fill={pureBlackFill} fillOpacity="1" />
      </g>
      
      {/* Fallen coal - black blocks */}
      <rect x="248" y="70" width="6" height="4" fill={darkFill} fillOpacity="0.98" transform="rotate(15, 251, 72)" />
      <rect x="258" y="72" width="4" height="3" fill={darkFill} fillOpacity="0.96" transform="rotate(-10, 260, 73)" />
      <rect x="242" y="73" width="5" height="3" fill={darkFill} fillOpacity="0.97" transform="rotate(25, 244, 74)" />
    </svg>
  </div>
));

// Mining tools - Pure black silhouettes with full-width decorative lines
const MiningTools = memo(() => (
  <div className="relative w-full">
    {/* Full-width decorative lines */}
    <svg
      viewBox="0 0 1920 50"
      className="absolute inset-0 w-[200vw] -translate-x-1/2 h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 8 L1920 8" stroke={subtleStroke} strokeWidth="1.5" fill="none" />
      <path d="M0 42 L1920 42" stroke={subtleStroke} strokeWidth="1.5" fill="none" />
    </svg>
    
    {/* Tools content */}
    <svg
      viewBox="0 0 400 50"
      className="relative w-full h-auto max-w-xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Pickaxe 1 - pure black silhouette */}
      <g transform="translate(35, 12)">
        <rect x="0" y="18" width="24" height="5" fill={pureBlackFill} fillOpacity="1" transform="rotate(-45, 12, 20)" />
        <path d="M18 2 L28 8 L24 14 L14 8 Z" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Diamond ornament */}
      <path d="M90 20 L95 25 L90 30 L85 25 Z" fill={darkFill} fillOpacity="0.95" />
      
      {/* Lamp 1 - pure black silhouette */}
      <g transform="translate(108, 10)">
        <rect x="0" y="8" width="14" height="20" fill={pureBlackFill} fillOpacity="0.98" />
        <path d="M2 8 L4 2 L10 2 L12 8 Z" fill={darkFill} fillOpacity="1" />
        <circle cx="7" cy="0" r="3" fill={darkFill} fillOpacity="0.98" />
      </g>
      
      {/* Zigzag ornament */}
      <path d="M150 22 L158 16 L166 22 L174 16" stroke={subtleStroke} strokeWidth="2" fill="none" />
      
      {/* Shovel - pure black silhouette */}
      <g transform="translate(185, 10)">
        <rect x="8" y="4" width="5" height="22" fill={pureBlackFill} fillOpacity="1" />
        <ellipse cx="10" cy="4" rx="9" ry="5" fill={darkFill} fillOpacity="0.98" />
      </g>
      
      {/* Diamond ornament */}
      <path d="M220 20 L225 25 L220 30 L215 25 Z" fill={darkFill} fillOpacity="0.95" />
      
      {/* Helmet - pure black dome */}
      <g transform="translate(238, 12)">
        <path d="M0 22 Q2 10, 12 6 Q22 10, 24 22 L0 22 Z" fill={pureBlackFill} fillOpacity="0.98" />
        <circle cx="4" cy="14" r="4" fill={darkFill} fillOpacity="1" />
      </g>
      
      {/* Zigzag ornament */}
      <path d="M280 22 L288 16 L296 22 L304 16" stroke={subtleStroke} strokeWidth="2" fill="none" />
      
      {/* Lamp 2 - pure black silhouette */}
      <g transform="translate(318, 10)">
        <rect x="0" y="8" width="14" height="20" fill={pureBlackFill} fillOpacity="0.98" />
        <path d="M2 8 L4 2 L10 2 L12 8 Z" fill={darkFill} fillOpacity="1" />
        <circle cx="7" cy="0" r="3" fill={darkFill} fillOpacity="0.98" />
      </g>
      
      {/* Pickaxe 2 - mirrored pure black silhouette */}
      <g transform="translate(345, 12)">
        <rect x="-4" y="18" width="24" height="5" fill={pureBlackFill} fillOpacity="1" transform="rotate(45, 8, 20)" />
        <path d="M2 2 L-8 8 L-4 14 L6 8 Z" fill={darkFill} fillOpacity="1" />
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
