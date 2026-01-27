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

// Woodcut style stroke properties - sharp edges like carved wood
const woodcutStroke = {
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
};

// Tunnel entrance with "SRETNO" sign - Gallery section - Woodcut/Linocut style
const TunnelEntrance = memo(() => (
  <svg
    viewBox="0 0 300 100"
    className="w-48 sm:w-64 md:w-80 h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Hatching pattern for woodcut texture */}
      <pattern id="woodcutHatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="4" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="1.5" />
      </pattern>
      <filter id="textShadowWoodcut" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="0.3" floodColor="hsl(0 0% 0%)" floodOpacity="0.8"/>
      </filter>
    </defs>
    
    {/* Ground - solid carved lines */}
    <path d="M0 94 L300 94" stroke="hsl(35 25% 75% / 0.6)" strokeWidth="3" fill="none" {...woodcutStroke} />
    <path d="M10 96 L290 96" stroke="hsl(35 25% 75% / 0.4)" strokeWidth="2" fill="none" {...woodcutStroke} />
    
    {/* Outer stone arch - solid silhouette */}
    <path 
      d="M55 94 L55 55 Q55 20, 150 15 Q245 20, 245 55 L245 94 L230 94 L230 52 Q230 28, 150 25 Q70 28, 70 52 L70 94 Z" 
      fill="hsl(35 25% 75% / 0.7)" 
      stroke="hsl(35 25% 75% / 0.9)" 
      strokeWidth="3" 
      {...woodcutStroke} 
    />
    
    {/* Inner tunnel darkness - deep black */}
    <path 
      d="M78 94 L78 55 Q78 32, 150 28 Q222 32, 222 55 L222 94 Z" 
      fill="hsl(0 0% 3%)" 
      stroke="hsl(35 25% 75% / 0.5)" 
      strokeWidth="2" 
      {...woodcutStroke} 
    />
    
    {/* Stone texture - parallel carved lines */}
    <path d="M58 85 L68 85" stroke="hsl(35 25% 60% / 0.5)" strokeWidth="2" {...woodcutStroke} />
    <path d="M58 75 L68 75" stroke="hsl(35 25% 60% / 0.4)" strokeWidth="2" {...woodcutStroke} />
    <path d="M58 65 L68 65" stroke="hsl(35 25% 60% / 0.4)" strokeWidth="2" {...woodcutStroke} />
    <path d="M232 85 L242 85" stroke="hsl(35 25% 60% / 0.5)" strokeWidth="2" {...woodcutStroke} />
    <path d="M232 75 L242 75" stroke="hsl(35 25% 60% / 0.4)" strokeWidth="2" {...woodcutStroke} />
    <path d="M232 65 L242 65" stroke="hsl(35 25% 60% / 0.4)" strokeWidth="2" {...woodcutStroke} />
    
    {/* Keystone texture */}
    <path d="M140 18 L160 18" stroke="hsl(35 25% 60% / 0.4)" strokeWidth="2" {...woodcutStroke} />
    <path d="M135 22 L165 22" stroke="hsl(35 25% 60% / 0.3)" strokeWidth="1.5" {...woodcutStroke} />
    
    {/* Wooden beam left - solid filled rectangle */}
    <rect x="72" y="45" width="8" height="49" fill="hsl(25 35% 40% / 0.8)" stroke="hsl(25 35% 50% / 0.9)" strokeWidth="2" {...woodcutStroke} />
    {/* Wood grain lines */}
    <path d="M74 50 L74 90" stroke="hsl(25 35% 30% / 0.5)" strokeWidth="1.5" {...woodcutStroke} />
    <path d="M78 48 L78 92" stroke="hsl(25 35% 30% / 0.4)" strokeWidth="1" {...woodcutStroke} />
    
    {/* Wooden beam right - solid filled rectangle */}
    <rect x="220" y="45" width="8" height="49" fill="hsl(25 35% 40% / 0.8)" stroke="hsl(25 35% 50% / 0.9)" strokeWidth="2" {...woodcutStroke} />
    {/* Wood grain lines */}
    <path d="M222 50 L222 90" stroke="hsl(25 35% 30% / 0.5)" strokeWidth="1.5" {...woodcutStroke} />
    <path d="M226 48 L226 92" stroke="hsl(25 35% 30% / 0.4)" strokeWidth="1" {...woodcutStroke} />
    
    {/* Cross beam - solid filled */}
    <path 
      d="M68 42 Q150 32, 232 42 L232 48 Q150 38, 68 48 Z" 
      fill="hsl(25 35% 40% / 0.85)" 
      stroke="hsl(25 35% 50% / 0.9)" 
      strokeWidth="2" 
      {...woodcutStroke} 
    />
    
    {/* SRETNO banner - solid filled with thick border */}
    <rect x="95" y="2" width="110" height="26" fill="hsl(25 35% 30% / 0.95)" stroke="hsl(35 25% 70% / 0.8)" strokeWidth="3" {...woodcutStroke} />
    {/* Inner border */}
    <rect x="100" y="6" width="100" height="18" fill="none" stroke="hsl(35 25% 70% / 0.4)" strokeWidth="1.5" {...woodcutStroke} />
    
    {/* SRETNO text - bold carved letters */}
    <text
      x="150"
      y="20"
      textAnchor="middle"
      className="font-display"
      fill="hsl(35 30% 90%)"
      fontSize="14"
      fontWeight="700"
      letterSpacing="4"
      filter="url(#textShadowWoodcut)"
    >
      SRETNO
    </text>
    
    {/* Rails - thick solid lines */}
    <path d="M112 94 L132 72" stroke="hsl(35 25% 75% / 0.6)" strokeWidth="4" fill="none" {...woodcutStroke} />
    <path d="M188 94 L168 72" stroke="hsl(35 25% 75% / 0.6)" strokeWidth="4" fill="none" {...woodcutStroke} />
    
    {/* Rail ties - solid blocks */}
    <rect x="116" y="84" width="68" height="4" fill="hsl(25 35% 40% / 0.6)" {...woodcutStroke} />
    <rect x="126" y="78" width="48" height="3" fill="hsl(25 35% 40% / 0.5)" {...woodcutStroke} />
  </svg>
));

// Miners walking - Woodcut style solid silhouettes
const MinersWalking = memo(() => (
  <svg
    viewBox="0 0 400 70"
    className="w-full h-auto max-w-2xl"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax meet"
  >
    <defs>
      {/* Hatching pattern for mountains */}
      <pattern id="mountainHatch" patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(60)">
        <line x1="0" y1="0" x2="0" y2="5" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" />
      </pattern>
    </defs>
    
    {/* Mountain silhouette - solid filled with hatching */}
    <path 
      d="M0 68 L30 52 L60 58 L95 42 L130 50 L170 35 L210 45 L255 30 L295 38 L340 32 L380 42 L400 48 L400 70 L0 70 Z" 
      fill="url(#mountainHatch)" 
      stroke="hsl(35 25% 75% / 0.3)" 
      strokeWidth="2" 
      {...woodcutStroke} 
    />
    
    {/* Ground line - thick solid */}
    <path d="M0 65 L400 65" stroke="hsl(35 25% 75% / 0.5)" strokeWidth="3" fill="none" {...woodcutStroke} />
    
    {/* Miner 1 - solid silhouette walking right */}
    <g transform="translate(20, 8)">
      {/* Body silhouette - filled shape */}
      <path 
        d="M8 8 Q12 4, 16 6 Q18 8, 17 12 L18 14 Q20 16, 18 18 L20 22 L22 34 Q24 44, 20 55 L16 55 L17 40 L14 55 L10 55 L13 38 L10 22 L6 28 L4 24 L8 18 Q6 16, 8 14 L8 8 Z" 
        fill="hsl(35 25% 75% / 0.7)" 
        stroke="hsl(35 25% 75% / 0.9)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
      {/* Helmet with lamp */}
      <path d="M7 8 Q10 2, 17 5 L18 8 Q12 10, 8 9 Z" fill="hsl(35 25% 65% / 0.8)" stroke="hsl(35 25% 75% / 0.9)" strokeWidth="1.5" {...woodcutStroke} />
      <circle cx="18" cy="5" r="3" fill="hsl(25 35% 55% / 0.8)" stroke="hsl(35 25% 75% / 0.7)" strokeWidth="1.5" />
      {/* Pickaxe over shoulder */}
      <path d="M12 16 L28 4" stroke="hsl(25 35% 50% / 0.8)" strokeWidth="3" {...woodcutStroke} />
      <path d="M26 2 L32 6 L28 10" fill="hsl(35 25% 70% / 0.7)" stroke="hsl(35 25% 75% / 0.8)" strokeWidth="2" {...woodcutStroke} />
    </g>
    
    {/* Miner 2 - solid silhouette with shovel */}
    <g transform="translate(85, 6)">
      <path 
        d="M8 10 Q12 6, 16 8 Q18 10, 17 14 L18 16 Q20 18, 18 20 L20 24 L22 36 Q24 46, 20 57 L16 57 L17 42 L14 57 L10 57 L13 40 L10 24 L6 30 L4 26 L8 20 Q6 18, 8 16 L8 10 Z" 
        fill="hsl(35 25% 75% / 0.65)" 
        stroke="hsl(35 25% 75% / 0.85)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
      <path d="M7 10 Q10 4, 17 7 L18 10 Q12 12, 8 11 Z" fill="hsl(35 25% 65% / 0.75)" stroke="hsl(35 25% 75% / 0.85)" strokeWidth="1.5" {...woodcutStroke} />
      <circle cx="18" cy="7" r="2.5" fill="hsl(25 35% 55% / 0.7)" stroke="hsl(35 25% 75% / 0.6)" strokeWidth="1.5" />
      {/* Shovel */}
      <path d="M14 18 L32 12" stroke="hsl(25 35% 50% / 0.75)" strokeWidth="3" {...woodcutStroke} />
      <ellipse cx="34" cy="10" rx="5" ry="3" fill="hsl(35 25% 70% / 0.6)" stroke="hsl(35 25% 75% / 0.7)" strokeWidth="1.5" transform="rotate(-15, 34, 10)" />
    </g>
    
    {/* Miner 3 - solid silhouette with pickaxe down */}
    <g transform="translate(155, 10)">
      <path 
        d="M8 8 Q12 4, 16 6 Q18 8, 17 12 L18 14 Q20 16, 18 18 L20 22 L22 32 Q24 42, 20 53 L16 53 L17 38 L14 53 L10 53 L13 36 L10 22 L6 28 L4 24 L8 18 Q6 16, 8 14 L8 8 Z" 
        fill="hsl(35 25% 75% / 0.6)" 
        stroke="hsl(35 25% 75% / 0.8)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
      <path d="M7 8 Q10 2, 17 5 L18 8 Q12 10, 8 9 Z" fill="hsl(35 25% 65% / 0.7)" stroke="hsl(35 25% 75% / 0.8)" strokeWidth="1.5" {...woodcutStroke} />
      <circle cx="18" cy="5" r="2.5" fill="hsl(25 35% 55% / 0.65)" stroke="hsl(35 25% 75% / 0.55)" strokeWidth="1.5" />
      {/* Pickaxe resting */}
      <path d="M10 18 L24 8" stroke="hsl(25 35% 50% / 0.7)" strokeWidth="3" {...woodcutStroke} />
      <path d="M22 6 L28 8 L26 14" fill="hsl(35 25% 70% / 0.6)" stroke="hsl(35 25% 75% / 0.7)" strokeWidth="1.5" {...woodcutStroke} />
    </g>
    
    {/* Miner 4 - solid silhouette with lantern */}
    <g transform="translate(225, 7)">
      <path 
        d="M8 10 Q12 6, 16 8 Q18 10, 17 14 L18 16 Q20 18, 18 20 L20 24 L22 36 Q24 46, 20 56 L16 56 L17 41 L14 56 L10 56 L13 39 L10 24 L6 30 L4 26 L8 20 Q6 18, 8 16 L8 10 Z" 
        fill="hsl(35 25% 75% / 0.68)" 
        stroke="hsl(35 25% 75% / 0.88)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
      <path d="M7 10 Q10 4, 17 7 L18 10 Q12 12, 8 11 Z" fill="hsl(35 25% 65% / 0.78)" stroke="hsl(35 25% 75% / 0.88)" strokeWidth="1.5" {...woodcutStroke} />
      <circle cx="18" cy="7" r="2.5" fill="hsl(25 35% 55% / 0.75)" stroke="hsl(35 25% 75% / 0.65)" strokeWidth="1.5" />
      {/* Lantern */}
      <path d="M22 22 L26 20" stroke="hsl(35 25% 75% / 0.5)" strokeWidth="2" {...woodcutStroke} />
      <rect x="24" y="18" width="8" height="14" fill="hsl(25 35% 45% / 0.7)" stroke="hsl(35 25% 75% / 0.6)" strokeWidth="1.5" {...woodcutStroke} />
      <circle cx="28" cy="25" r="2.5" fill="hsl(25 40% 60% / 0.5)" stroke="hsl(25 35% 55% / 0.6)" strokeWidth="1" />
    </g>
    
    {/* Miner 5 - solid silhouette with pickaxe ready */}
    <g transform="translate(295, 9)">
      <path 
        d="M8 8 Q12 4, 16 6 Q18 8, 17 12 L18 14 Q20 16, 18 18 L20 22 L22 34 Q24 44, 20 54 L16 54 L17 39 L14 54 L10 54 L13 37 L10 22 L6 28 L4 24 L8 18 Q6 16, 8 14 L8 8 Z" 
        fill="hsl(35 25% 75% / 0.58)" 
        stroke="hsl(35 25% 75% / 0.78)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
      <path d="M7 8 Q10 2, 17 5 L18 8 Q12 10, 8 9 Z" fill="hsl(35 25% 65% / 0.68)" stroke="hsl(35 25% 75% / 0.78)" strokeWidth="1.5" {...woodcutStroke} />
      <circle cx="18" cy="5" r="2.5" fill="hsl(25 35% 55% / 0.6)" stroke="hsl(35 25% 75% / 0.5)" strokeWidth="1.5" />
      {/* Pickaxe held forward */}
      <path d="M12 16 L36 6" stroke="hsl(25 35% 50% / 0.7)" strokeWidth="3" {...woodcutStroke} />
      <path d="M34 4 L40 8 L36 12" fill="hsl(35 25% 70% / 0.55)" stroke="hsl(35 25% 75% / 0.65)" strokeWidth="1.5" {...woodcutStroke} />
    </g>
    
    {/* Mine entrance on right - solid arch */}
    <g transform="translate(360, 0)">
      <path 
        d="M0 65 L0 45 Q0 32, 18 30 Q36 32, 36 45 L36 65 L32 65 L32 46 Q32 36, 18 34 Q4 36, 4 46 L4 65 Z" 
        fill="hsl(35 25% 75% / 0.5)" 
        stroke="hsl(35 25% 75% / 0.7)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
      {/* Inner darkness */}
      <path d="M6 65 L6 48 Q6 38, 18 36 Q30 38, 30 48 L30 65 Z" fill="hsl(0 0% 3%)" {...woodcutStroke} />
      {/* Wooden beams */}
      <rect x="4" y="44" width="4" height="21" fill="hsl(25 35% 40% / 0.7)" stroke="hsl(25 35% 50% / 0.6)" strokeWidth="1" {...woodcutStroke} />
      <rect x="28" y="44" width="4" height="21" fill="hsl(25 35% 40% / 0.7)" stroke="hsl(25 35% 50% / 0.6)" strokeWidth="1" {...woodcutStroke} />
    </g>
  </svg>
));

// Mine cart on rails - Woodcut style
const MineCart = memo(() => (
  <svg
    viewBox="0 0 350 80"
    className="w-56 sm:w-72 md:w-96 h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rails - thick solid lines */}
    <path d="M0 68 L350 68" stroke="hsl(35 25% 75% / 0.5)" strokeWidth="4" fill="none" {...woodcutStroke} />
    <path d="M0 76 L350 76" stroke="hsl(35 25% 75% / 0.5)" strokeWidth="4" fill="none" {...woodcutStroke} />
    
    {/* Rail ties - solid blocks */}
    {[...Array(14)].map((_, i) => (
      <rect
        key={i}
        x={15 + i * 24}
        y="66"
        width="6"
        height="12"
        fill="hsl(25 35% 40% / 0.6)"
        stroke="hsl(25 35% 50% / 0.4)"
        strokeWidth="1"
        {...woodcutStroke}
      />
    ))}
    
    {/* Miner pushing cart - solid silhouette */}
    <g transform="translate(70, 2)">
      {/* Body silhouette */}
      <path 
        d="M8 10 Q12 6, 16 8 Q18 10, 17 14 L20 18 Q22 20, 22 24 L26 32 Q28 42, 24 62 L20 62 L21 45 L18 62 L14 62 L17 42 L14 28 L8 34 L6 30 L12 22 Q10 18, 12 16 L8 10 Z" 
        fill="hsl(35 25% 75% / 0.6)" 
        stroke="hsl(35 25% 75% / 0.8)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
      {/* Helmet */}
      <path d="M6 10 Q9 3, 17 6 L18 10 Q12 12, 7 11 Z" fill="hsl(35 25% 65% / 0.7)" stroke="hsl(35 25% 75% / 0.8)" strokeWidth="1.5" {...woodcutStroke} />
      <circle cx="6" cy="7" r="3" fill="hsl(25 35% 55% / 0.7)" stroke="hsl(35 25% 75% / 0.6)" strokeWidth="1.5" />
      {/* Arms pushing forward */}
      <path d="M16 20 L32 28" stroke="hsl(35 25% 75% / 0.6)" strokeWidth="3" {...woodcutStroke} />
    </g>
    
    {/* Mine cart body - solid trapezoid */}
    <g transform="translate(125, 12)">
      {/* Cart body - filled shape */}
      <path 
        d="M5 52 L15 20 L95 20 L105 52 Z" 
        fill="hsl(35 25% 75% / 0.25)" 
        stroke="hsl(35 25% 75% / 0.7)" 
        strokeWidth="3" 
        {...woodcutStroke} 
      />
      
      {/* Cart reinforcement lines */}
      <path d="M12 40 L98 40" stroke="hsl(35 25% 75% / 0.4)" strokeWidth="2" {...woodcutStroke} />
      <path d="M28 22 L22 50" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="2" {...woodcutStroke} />
      <path d="M82 22 L88 50" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="2" {...woodcutStroke} />
      
      {/* Coal pile - solid dark mass */}
      <path 
        d="M18 20 L25 6 Q40 0, 55 4 Q70 -2, 85 6 L92 20 Z" 
        fill="hsl(0 0% 6%)" 
        stroke="hsl(0 0% 20% / 0.8)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
      {/* Coal texture - carved lines */}
      <path d="M30 14 L40 10 L50 14" stroke="hsl(0 0% 15% / 0.6)" strokeWidth="1.5" {...woodcutStroke} />
      <path d="M55 8 L65 4 L75 10" stroke="hsl(0 0% 15% / 0.5)" strokeWidth="1.5" {...woodcutStroke} />
      <path d="M40 6 L50 2 L60 6" stroke="hsl(0 0% 12% / 0.4)" strokeWidth="1" {...woodcutStroke} />
      
      {/* Wheels - solid filled circles */}
      <circle cx="22" cy="56" r="10" fill="hsl(0 0% 8%)" stroke="hsl(35 25% 75% / 0.7)" strokeWidth="3" />
      <circle cx="22" cy="56" r="4" fill="none" stroke="hsl(35 25% 75% / 0.4)" strokeWidth="2" />
      
      <circle cx="88" cy="56" r="10" fill="hsl(0 0% 8%)" stroke="hsl(35 25% 75% / 0.7)" strokeWidth="3" />
      <circle cx="88" cy="56" r="4" fill="none" stroke="hsl(35 25% 75% / 0.4)" strokeWidth="2" />
    </g>
    
    {/* Fallen coal pieces - solid blocks */}
    <rect x="248" y="70" width="6" height="4" fill="hsl(0 0% 8%)" stroke="hsl(0 0% 20% / 0.6)" strokeWidth="1" transform="rotate(15, 251, 72)" {...woodcutStroke} />
    <rect x="258" y="72" width="4" height="3" fill="hsl(0 0% 10%)" stroke="hsl(0 0% 20% / 0.5)" strokeWidth="1" transform="rotate(-10, 260, 73)" {...woodcutStroke} />
    <rect x="242" y="73" width="5" height="3" fill="hsl(0 0% 9%)" stroke="hsl(0 0% 20% / 0.5)" strokeWidth="1" transform="rotate(25, 244, 74)" {...woodcutStroke} />
  </svg>
));

// Mining tools decorative border - Woodcut style
const MiningTools = memo(() => (
  <svg
    viewBox="0 0 400 50"
    className="w-full h-auto max-w-xl"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Top decorative line - thick solid */}
    <path d="M20 8 L380 8" stroke="hsl(35 25% 75% / 0.4)" strokeWidth="2" fill="none" {...woodcutStroke} />
    <path d="M30 6 L370 6" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1" fill="none" {...woodcutStroke} />
    
    {/* Bottom decorative line */}
    <path d="M20 42 L380 42" stroke="hsl(35 25% 75% / 0.4)" strokeWidth="2" fill="none" {...woodcutStroke} />
    <path d="M30 44 L370 44" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1" fill="none" {...woodcutStroke} />
    
    {/* Pickaxe 1 - solid filled */}
    <g transform="translate(35, 12)">
      {/* Handle - thick solid */}
      <rect x="0" y="18" width="24" height="5" fill="hsl(25 35% 45% / 0.8)" stroke="hsl(25 35% 55% / 0.9)" strokeWidth="1.5" transform="rotate(-45, 12, 20)" {...woodcutStroke} />
      {/* Head - solid filled shape */}
      <path 
        d="M18 2 L28 8 L24 14 L14 8 Z" 
        fill="hsl(35 25% 70% / 0.7)" 
        stroke="hsl(35 25% 75% / 0.9)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
    </g>
    
    {/* Diamond ornament */}
    <path d="M90 20 L95 25 L90 30 L85 25 Z" fill="hsl(25 35% 50% / 0.5)" stroke="hsl(25 35% 55% / 0.7)" strokeWidth="1.5" {...woodcutStroke} />
    
    {/* Lamp 1 - solid filled */}
    <g transform="translate(108, 10)">
      <rect x="0" y="8" width="14" height="20" fill="hsl(35 25% 65% / 0.6)" stroke="hsl(35 25% 75% / 0.8)" strokeWidth="2" {...woodcutStroke} />
      <path d="M2 8 L4 2 L10 2 L12 8" fill="hsl(35 25% 55% / 0.5)" stroke="hsl(35 25% 75% / 0.7)" strokeWidth="1.5" {...woodcutStroke} />
      <circle cx="7" cy="0" r="3" fill="hsl(25 35% 55% / 0.7)" stroke="hsl(35 25% 75% / 0.6)" strokeWidth="1.5" />
      <circle cx="7" cy="18" r="3" fill="hsl(25 40% 50% / 0.4)" stroke="hsl(25 35% 55% / 0.5)" strokeWidth="1" />
    </g>
    
    {/* Zigzag ornament */}
    <path d="M150 22 L158 16 L166 22 L174 16" stroke="hsl(35 25% 75% / 0.4)" strokeWidth="2" fill="none" {...woodcutStroke} />
    
    {/* Shovel - solid filled */}
    <g transform="translate(185, 10)">
      {/* Handle */}
      <rect x="8" y="4" width="5" height="22" fill="hsl(25 35% 45% / 0.8)" stroke="hsl(25 35% 55% / 0.9)" strokeWidth="1.5" {...woodcutStroke} />
      {/* Blade */}
      <ellipse cx="10" cy="4" rx="9" ry="5" fill="hsl(35 25% 70% / 0.6)" stroke="hsl(35 25% 75% / 0.8)" strokeWidth="2" />
    </g>
    
    {/* Diamond ornament */}
    <path d="M220 20 L225 25 L220 30 L215 25 Z" fill="hsl(25 35% 50% / 0.5)" stroke="hsl(25 35% 55% / 0.7)" strokeWidth="1.5" {...woodcutStroke} />
    
    {/* Helmet - solid dome */}
    <g transform="translate(238, 12)">
      <path 
        d="M0 22 Q2 10, 12 6 Q22 10, 24 22 L0 22 Z" 
        fill="hsl(35 25% 65% / 0.6)" 
        stroke="hsl(35 25% 75% / 0.8)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
      <path d="M-2 22 L26 22" stroke="hsl(35 25% 75% / 0.7)" strokeWidth="2" {...woodcutStroke} />
      <circle cx="4" cy="14" r="4" fill="hsl(25 35% 55% / 0.6)" stroke="hsl(35 25% 75% / 0.5)" strokeWidth="1.5" />
    </g>
    
    {/* Zigzag ornament */}
    <path d="M280 22 L288 16 L296 22 L304 16" stroke="hsl(35 25% 75% / 0.4)" strokeWidth="2" fill="none" {...woodcutStroke} />
    
    {/* Lamp 2 - solid filled */}
    <g transform="translate(318, 10)">
      <rect x="0" y="8" width="14" height="20" fill="hsl(35 25% 65% / 0.6)" stroke="hsl(35 25% 75% / 0.8)" strokeWidth="2" {...woodcutStroke} />
      <path d="M2 8 L4 2 L10 2 L12 8" fill="hsl(35 25% 55% / 0.5)" stroke="hsl(35 25% 75% / 0.7)" strokeWidth="1.5" {...woodcutStroke} />
      <circle cx="7" cy="0" r="3" fill="hsl(25 35% 55% / 0.7)" stroke="hsl(35 25% 75% / 0.6)" strokeWidth="1.5" />
      <circle cx="7" cy="18" r="3" fill="hsl(25 40% 50% / 0.4)" stroke="hsl(25 35% 55% / 0.5)" strokeWidth="1" />
    </g>
    
    {/* Pickaxe 2 - mirrored solid filled */}
    <g transform="translate(345, 12)">
      <rect x="-4" y="18" width="24" height="5" fill="hsl(25 35% 45% / 0.8)" stroke="hsl(25 35% 55% / 0.9)" strokeWidth="1.5" transform="rotate(45, 8, 20)" {...woodcutStroke} />
      <path 
        d="M2 2 L-8 8 L-4 14 L6 8 Z" 
        fill="hsl(35 25% 70% / 0.7)" 
        stroke="hsl(35 25% 75% / 0.9)" 
        strokeWidth="2" 
        {...woodcutStroke} 
      />
    </g>
  </svg>
));

TunnelEntrance.displayName = 'TunnelEntrance';
MinersWalking.displayName = 'MinersWalking';
MineCart.displayName = 'MineCart';
MiningTools.displayName = 'MiningTools';
MiningIllustration.displayName = 'MiningIllustration';

export default MiningIllustration;
