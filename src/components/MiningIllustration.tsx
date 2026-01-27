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

// Pure black style - minimal strokes, solid black fills
const pureBlackFill = "hsl(0 0% 6%)";
const darkFill = "hsl(0 0% 8%)";
const subtleStroke = "hsl(0 0% 15%)";

// Tunnel entrance with "SRETNO" sign - Pure black silhouettes
const TunnelEntrance = memo(() => (
  <svg
    viewBox="0 0 300 100"
    className="w-48 sm:w-64 md:w-80 h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ground - subtle dark line */}
    <path d="M0 94 L300 94" stroke={subtleStroke} strokeWidth="2" fill="none" />
    
    {/* Outer stone arch - pure black silhouette */}
    <path 
      d="M55 94 L55 55 Q55 20, 150 15 Q245 20, 245 55 L245 94 L230 94 L230 52 Q230 28, 150 25 Q70 28, 70 52 L70 94 Z" 
      fill={pureBlackFill}
      fillOpacity="0.85"
    />
    
    {/* Inner tunnel - absolute black */}
    <path 
      d="M78 94 L78 55 Q78 32, 150 28 Q222 32, 222 55 L222 94 Z" 
      fill="hsl(0 0% 2%)"
      fillOpacity="0.95"
    />
    
    {/* Wooden beam left - black rectangle */}
    <rect x="72" y="45" width="8" height="49" fill={darkFill} fillOpacity="0.9" />
    
    {/* Wooden beam right - black rectangle */}
    <rect x="220" y="45" width="8" height="49" fill={darkFill} fillOpacity="0.9" />
    
    {/* Cross beam - black silhouette */}
    <path 
      d="M68 42 Q150 32, 232 42 L232 48 Q150 38, 68 48 Z" 
      fill={pureBlackFill}
      fillOpacity="0.9"
    />
    
    {/* SRETNO banner - black background */}
    <rect x="95" y="2" width="110" height="26" fill={pureBlackFill} fillOpacity="0.95" />
    
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
    
    {/* Rails - dark silhouettes */}
    <path d="M112 94 L132 72" stroke={pureBlackFill} strokeWidth="4" fill="none" strokeLinecap="square" />
    <path d="M188 94 L168 72" stroke={pureBlackFill} strokeWidth="4" fill="none" strokeLinecap="square" />
    
    {/* Rail ties - black blocks */}
    <rect x="116" y="84" width="68" height="4" fill={darkFill} fillOpacity="0.8" />
    <rect x="126" y="78" width="48" height="3" fill={darkFill} fillOpacity="0.7" />
  </svg>
));

// Miners walking - Pure black silhouettes
const MinersWalking = memo(() => (
  <svg
    viewBox="0 0 400 70"
    className="w-full h-auto max-w-2xl"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax meet"
  >
    {/* Mountain silhouette - pure black mass */}
    <path 
      d="M0 68 L30 52 L60 58 L95 42 L130 50 L170 35 L210 45 L255 30 L295 38 L340 32 L380 42 L400 48 L400 70 L0 70 Z" 
      fill={pureBlackFill}
      fillOpacity="0.6"
    />
    
    {/* Ground line - subtle */}
    <path d="M0 65 L400 65" stroke={subtleStroke} strokeWidth="2" fill="none" />
    
    {/* Miner 1 - pure black silhouette */}
    <g transform="translate(20, 8)">
      <path 
        d="M8 8 Q12 4, 16 6 Q18 8, 17 12 L18 14 Q20 16, 18 18 L20 22 L22 34 Q24 44, 20 55 L16 55 L17 40 L14 55 L10 55 L13 38 L10 22 L6 28 L4 24 L8 18 Q6 16, 8 14 L8 8 Z" 
        fill={pureBlackFill}
        fillOpacity="0.85"
      />
      {/* Helmet */}
      <path d="M7 8 Q10 2, 17 5 L18 8 Q12 10, 8 9 Z" fill={darkFill} fillOpacity="0.9" />
      <circle cx="18" cy="5" r="3" fill={darkFill} fillOpacity="0.85" />
      {/* Pickaxe - black silhouette */}
      <path d="M12 16 L28 4" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
      <path d="M26 2 L32 6 L28 10 Z" fill={darkFill} fillOpacity="0.85" />
    </g>
    
    {/* Miner 2 - pure black silhouette */}
    <g transform="translate(85, 6)">
      <path 
        d="M8 10 Q12 6, 16 8 Q18 10, 17 14 L18 16 Q20 18, 18 20 L20 24 L22 36 Q24 46, 20 57 L16 57 L17 42 L14 57 L10 57 L13 40 L10 24 L6 30 L4 26 L8 20 Q6 18, 8 16 L8 10 Z" 
        fill={pureBlackFill}
        fillOpacity="0.8"
      />
      <path d="M7 10 Q10 4, 17 7 L18 10 Q12 12, 8 11 Z" fill={darkFill} fillOpacity="0.85" />
      <circle cx="18" cy="7" r="2.5" fill={darkFill} fillOpacity="0.8" />
      {/* Shovel */}
      <path d="M14 18 L32 12" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
      <ellipse cx="34" cy="10" rx="5" ry="3" fill={darkFill} fillOpacity="0.8" transform="rotate(-15, 34, 10)" />
    </g>
    
    {/* Miner 3 - pure black silhouette */}
    <g transform="translate(155, 10)">
      <path 
        d="M8 8 Q12 4, 16 6 Q18 8, 17 12 L18 14 Q20 16, 18 18 L20 22 L22 32 Q24 42, 20 53 L16 53 L17 38 L14 53 L10 53 L13 36 L10 22 L6 28 L4 24 L8 18 Q6 16, 8 14 L8 8 Z" 
        fill={pureBlackFill}
        fillOpacity="0.75"
      />
      <path d="M7 8 Q10 2, 17 5 L18 8 Q12 10, 8 9 Z" fill={darkFill} fillOpacity="0.8" />
      <circle cx="18" cy="5" r="2.5" fill={darkFill} fillOpacity="0.75" />
      {/* Pickaxe */}
      <path d="M10 18 L24 8" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
      <path d="M22 6 L28 8 L26 14 Z" fill={darkFill} fillOpacity="0.75" />
    </g>
    
    {/* Miner 4 - pure black silhouette */}
    <g transform="translate(225, 7)">
      <path 
        d="M8 10 Q12 6, 16 8 Q18 10, 17 14 L18 16 Q20 18, 18 20 L20 24 L22 36 Q24 46, 20 56 L16 56 L17 41 L14 56 L10 56 L13 39 L10 24 L6 30 L4 26 L8 20 Q6 18, 8 16 L8 10 Z" 
        fill={pureBlackFill}
        fillOpacity="0.82"
      />
      <path d="M7 10 Q10 4, 17 7 L18 10 Q12 12, 8 11 Z" fill={darkFill} fillOpacity="0.87" />
      <circle cx="18" cy="7" r="2.5" fill={darkFill} fillOpacity="0.8" />
      {/* Lantern */}
      <path d="M22 22 L26 20" stroke={pureBlackFill} strokeWidth="2" strokeLinecap="square" />
      <rect x="24" y="18" width="8" height="14" fill={darkFill} fillOpacity="0.85" />
    </g>
    
    {/* Miner 5 - pure black silhouette */}
    <g transform="translate(295, 9)">
      <path 
        d="M8 8 Q12 4, 16 6 Q18 8, 17 12 L18 14 Q20 16, 18 18 L20 22 L22 34 Q24 44, 20 54 L16 54 L17 39 L14 54 L10 54 L13 37 L10 22 L6 28 L4 24 L8 18 Q6 16, 8 14 L8 8 Z" 
        fill={pureBlackFill}
        fillOpacity="0.7"
      />
      <path d="M7 8 Q10 2, 17 5 L18 8 Q12 10, 8 9 Z" fill={darkFill} fillOpacity="0.75" />
      <circle cx="18" cy="5" r="2.5" fill={darkFill} fillOpacity="0.7" />
      {/* Pickaxe */}
      <path d="M12 16 L36 6" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
      <path d="M34 4 L40 8 L36 12 Z" fill={darkFill} fillOpacity="0.7" />
    </g>
    
    {/* Mine entrance - pure black arch */}
    <g transform="translate(360, 0)">
      <path 
        d="M0 65 L0 45 Q0 32, 18 30 Q36 32, 36 45 L36 65 L32 65 L32 46 Q32 36, 18 34 Q4 36, 4 46 L4 65 Z" 
        fill={pureBlackFill}
        fillOpacity="0.7"
      />
      {/* Inner darkness */}
      <path d="M6 65 L6 48 Q6 38, 18 36 Q30 38, 30 48 L30 65 Z" fill="hsl(0 0% 2%)" fillOpacity="0.9" />
      {/* Beams */}
      <rect x="4" y="44" width="4" height="21" fill={darkFill} fillOpacity="0.8" />
      <rect x="28" y="44" width="4" height="21" fill={darkFill} fillOpacity="0.8" />
    </g>
  </svg>
));

// Mine cart - Pure black silhouettes
const MineCart = memo(() => (
  <svg
    viewBox="0 0 350 80"
    className="w-56 sm:w-72 md:w-96 h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rails - subtle dark lines */}
    <path d="M0 68 L350 68" stroke={subtleStroke} strokeWidth="3" fill="none" />
    <path d="M0 76 L350 76" stroke={subtleStroke} strokeWidth="3" fill="none" />
    
    {/* Rail ties - black blocks */}
    {[...Array(14)].map((_, i) => (
      <rect
        key={i}
        x={15 + i * 24}
        y="66"
        width="6"
        height="12"
        fill={darkFill}
        fillOpacity="0.7"
      />
    ))}
    
    {/* Miner pushing cart - pure black silhouette */}
    <g transform="translate(70, 2)">
      <path 
        d="M8 10 Q12 6, 16 8 Q18 10, 17 14 L20 18 Q22 20, 22 24 L26 32 Q28 42, 24 62 L20 62 L21 45 L18 62 L14 62 L17 42 L14 28 L8 34 L6 30 L12 22 Q10 18, 12 16 L8 10 Z" 
        fill={pureBlackFill}
        fillOpacity="0.85"
      />
      {/* Helmet */}
      <path d="M6 10 Q9 3, 17 6 L18 10 Q12 12, 7 11 Z" fill={darkFill} fillOpacity="0.9" />
      <circle cx="6" cy="7" r="3" fill={darkFill} fillOpacity="0.85" />
      {/* Arms */}
      <path d="M16 20 L32 28" stroke={pureBlackFill} strokeWidth="3" strokeLinecap="square" />
    </g>
    
    {/* Mine cart body - pure black trapezoid */}
    <g transform="translate(125, 12)">
      <path 
        d="M5 52 L15 20 L95 20 L105 52 Z" 
        fill={pureBlackFill}
        fillOpacity="0.8"
      />
      
      {/* Coal pile - solid black mass */}
      <path 
        d="M18 20 L25 6 Q40 0, 55 4 Q70 -2, 85 6 L92 20 Z" 
        fill="hsl(0 0% 3%)"
        fillOpacity="0.95"
      />
      
      {/* Wheels - solid black circles */}
      <circle cx="22" cy="56" r="10" fill={pureBlackFill} fillOpacity="0.9" />
      <circle cx="88" cy="56" r="10" fill={pureBlackFill} fillOpacity="0.9" />
    </g>
    
    {/* Fallen coal - black blocks */}
    <rect x="248" y="70" width="6" height="4" fill={darkFill} fillOpacity="0.8" transform="rotate(15, 251, 72)" />
    <rect x="258" y="72" width="4" height="3" fill={darkFill} fillOpacity="0.7" transform="rotate(-10, 260, 73)" />
    <rect x="242" y="73" width="5" height="3" fill={darkFill} fillOpacity="0.75" transform="rotate(25, 244, 74)" />
  </svg>
));

// Mining tools - Pure black silhouettes
const MiningTools = memo(() => (
  <svg
    viewBox="0 0 400 50"
    className="w-full h-auto max-w-xl"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Top decorative line */}
    <path d="M20 8 L380 8" stroke={subtleStroke} strokeWidth="1.5" fill="none" />
    
    {/* Bottom decorative line */}
    <path d="M20 42 L380 42" stroke={subtleStroke} strokeWidth="1.5" fill="none" />
    
    {/* Pickaxe 1 - pure black silhouette */}
    <g transform="translate(35, 12)">
      <rect x="0" y="18" width="24" height="5" fill={pureBlackFill} fillOpacity="0.85" transform="rotate(-45, 12, 20)" />
      <path d="M18 2 L28 8 L24 14 L14 8 Z" fill={darkFill} fillOpacity="0.9" />
    </g>
    
    {/* Diamond ornament */}
    <path d="M90 20 L95 25 L90 30 L85 25 Z" fill={darkFill} fillOpacity="0.7" />
    
    {/* Lamp 1 - pure black silhouette */}
    <g transform="translate(108, 10)">
      <rect x="0" y="8" width="14" height="20" fill={pureBlackFill} fillOpacity="0.8" />
      <path d="M2 8 L4 2 L10 2 L12 8 Z" fill={darkFill} fillOpacity="0.85" />
      <circle cx="7" cy="0" r="3" fill={darkFill} fillOpacity="0.8" />
    </g>
    
    {/* Zigzag ornament */}
    <path d="M150 22 L158 16 L166 22 L174 16" stroke={subtleStroke} strokeWidth="2" fill="none" />
    
    {/* Shovel - pure black silhouette */}
    <g transform="translate(185, 10)">
      <rect x="8" y="4" width="5" height="22" fill={pureBlackFill} fillOpacity="0.85" />
      <ellipse cx="10" cy="4" rx="9" ry="5" fill={darkFill} fillOpacity="0.8" />
    </g>
    
    {/* Diamond ornament */}
    <path d="M220 20 L225 25 L220 30 L215 25 Z" fill={darkFill} fillOpacity="0.7" />
    
    {/* Helmet - pure black dome */}
    <g transform="translate(238, 12)">
      <path d="M0 22 Q2 10, 12 6 Q22 10, 24 22 L0 22 Z" fill={pureBlackFill} fillOpacity="0.8" />
      <circle cx="4" cy="14" r="4" fill={darkFill} fillOpacity="0.85" />
    </g>
    
    {/* Zigzag ornament */}
    <path d="M280 22 L288 16 L296 22 L304 16" stroke={subtleStroke} strokeWidth="2" fill="none" />
    
    {/* Lamp 2 - pure black silhouette */}
    <g transform="translate(318, 10)">
      <rect x="0" y="8" width="14" height="20" fill={pureBlackFill} fillOpacity="0.8" />
      <path d="M2 8 L4 2 L10 2 L12 8 Z" fill={darkFill} fillOpacity="0.85" />
      <circle cx="7" cy="0" r="3" fill={darkFill} fillOpacity="0.8" />
    </g>
    
    {/* Pickaxe 2 - mirrored pure black silhouette */}
    <g transform="translate(345, 12)">
      <rect x="-4" y="18" width="24" height="5" fill={pureBlackFill} fillOpacity="0.85" transform="rotate(45, 8, 20)" />
      <path d="M2 2 L-8 8 L-4 14 L6 8 Z" fill={darkFill} fillOpacity="0.9" />
    </g>
  </svg>
));

TunnelEntrance.displayName = 'TunnelEntrance';
MinersWalking.displayName = 'MinersWalking';
MineCart.displayName = 'MineCart';
MiningTools.displayName = 'MiningTools';
MiningIllustration.displayName = 'MiningIllustration';

export default MiningIllustration;
