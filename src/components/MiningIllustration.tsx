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

// Sketch style stroke properties
const sketchStroke = {
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Tunnel entrance with "SRETNO" sign - Gallery section - Sketch style
const TunnelEntrance = memo(() => (
  <svg
    viewBox="0 0 300 100"
    className="w-48 sm:w-64 md:w-80 h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="textShadowSketch" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodColor="hsl(0 0% 0%)" floodOpacity="0.6"/>
      </filter>
    </defs>
    
    {/* Ground - sketchy wavy lines */}
    <path d="M5 94 Q40 92, 80 95 Q120 93, 160 96 Q200 92, 240 95 Q280 93, 295 94" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    <path d="M0 96 Q50 98, 100 95 Q150 97, 200 94 Q250 97, 300 95" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1" fill="none" {...sketchStroke} />
    
    {/* Tunnel arch - multiple sketchy lines for hand-drawn effect */}
    {/* Main arch outline - primary stroke */}
    <path d="M62 94 Q61 70, 63 52 Q70 20, 150 18 Q230 20, 238 52 Q240 70, 239 94" stroke="hsl(35 25% 75% / 0.45)" strokeWidth="2.5" fill="none" {...sketchStroke} />
    {/* Secondary sketch line - offset */}
    <path d="M65 93 Q63 68, 66 50 Q75 22, 150 20 Q225 22, 235 50 Q238 68, 236 93" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    {/* Inner arch darkness */}
    <path d="M78 94 Q77 65, 80 48 Q90 28, 150 26 Q210 28, 220 48 Q223 65, 222 94" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" fill="hsl(0 0% 5% / 0.85)" {...sketchStroke} />
    
    {/* Stone texture - quick sketch marks */}
    <path d="M68 78 Q72 76, 76 78" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1" fill="none" {...sketchStroke} />
    <path d="M70 62 Q75 60, 80 63" stroke="hsl(35 25% 75% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
    <path d="M224 78 Q228 75, 232 77" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1" fill="none" {...sketchStroke} />
    <path d="M220 62 Q226 59, 230 62" stroke="hsl(35 25% 75% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
    <path d="M100 24 Q110 22, 120 25" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" fill="none" {...sketchStroke} />
    <path d="M180 24 Q192 21, 200 24" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" fill="none" {...sketchStroke} />
    
    {/* Wooden beams - sketchy lines with cross-hatching */}
    {/* Left beam */}
    <path d="M71 94 Q69 70, 72 48" stroke="hsl(25 35% 50% / 0.5)" strokeWidth="4" fill="none" {...sketchStroke} />
    <path d="M68 90 Q67 72, 69 55" stroke="hsl(25 35% 40% / 0.25)" strokeWidth="1" fill="none" {...sketchStroke} />
    <path d="M74 85 Q73 70, 75 58" stroke="hsl(25 35% 40% / 0.2)" strokeWidth="1" fill="none" {...sketchStroke} />
    
    {/* Right beam */}
    <path d="M229 94 Q231 70, 228 48" stroke="hsl(25 35% 50% / 0.5)" strokeWidth="4" fill="none" {...sketchStroke} />
    <path d="M226 90 Q228 72, 225 55" stroke="hsl(25 35% 40% / 0.25)" strokeWidth="1" fill="none" {...sketchStroke} />
    <path d="M232 85 Q234 70, 231 58" stroke="hsl(25 35% 40% / 0.2)" strokeWidth="1" fill="none" {...sketchStroke} />
    
    {/* Cross beam - sketchy curve */}
    <path d="M68 48 Q110 38, 150 36 Q190 38, 232 48" stroke="hsl(25 35% 50% / 0.5)" strokeWidth="4" fill="none" {...sketchStroke} />
    <path d="M72 46 Q115 37, 150 35 Q185 37, 228 46" stroke="hsl(25 35% 40% / 0.2)" strokeWidth="1" fill="none" {...sketchStroke} />
    
    {/* SRETNO banner - hand-drawn rectangle */}
    <path d="M96 4 Q148 2, 204 4 Q206 15, 204 26 Q150 28, 96 26 Q94 15, 96 4" stroke="hsl(35 25% 70% / 0.5)" strokeWidth="1.5" fill="hsl(25 35% 35% / 0.85)" {...sketchStroke} />
    {/* Inner border sketch */}
    <path d="M100 7 Q150 6, 200 7 Q201 15, 200 23 Q150 24, 100 23 Q99 15, 100 7" stroke="hsl(35 25% 70% / 0.25)" strokeWidth="0.5" fill="none" {...sketchStroke} />
    
    {/* SRETNO text - slightly tilted for hand-written feel */}
    <text
      x="150"
      y="19"
      textAnchor="middle"
      className="font-display"
      fill="hsl(35 30% 88%)"
      fontSize="13"
      fontWeight="600"
      letterSpacing="3"
      filter="url(#textShadowSketch)"
      transform="rotate(-1, 150, 19)"
    >
      SRETNO
    </text>
    
    {/* Rails - sketchy wavy lines */}
    <path d="M112 94 Q118 85, 125 76 Q130 72, 134 70" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="2" fill="none" {...sketchStroke} />
    <path d="M188 94 Q182 85, 175 76 Q170 72, 166 70" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="2" fill="none" {...sketchStroke} />
    
    {/* Rail ties - quick sketch marks */}
    <path d="M118 86 Q150 85, 182 86" stroke="hsl(25 35% 50% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    <path d="M124 80 Q150 79, 176 80" stroke="hsl(25 35% 50% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
  </svg>
));

// Miners walking - Sketch style gestural figures
const MinersWalking = memo(() => (
  <svg
    viewBox="0 0 400 70"
    className="w-full h-auto max-w-2xl"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMax meet"
  >
    {/* Mountain silhouette - quick sketchy strokes */}
    <path d="M2 68 Q15 55, 35 58 Q55 48, 80 52 Q110 42, 145 48 Q180 38, 210 44 Q250 32, 290 40 Q330 35, 365 42 Q385 38, 398 48" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    <path d="M0 70 Q20 58, 45 60 Q75 50, 120 54 Q160 40, 200 46 Q245 35, 285 42 Q325 36, 360 44 Q390 40, 400 50" stroke="hsl(35 25% 75% / 0.1)" strokeWidth="1" fill="none" {...sketchStroke} />
    
    {/* Ground line - organic sketch */}
    <path d="M0 66 Q80 64, 160 66 Q240 68, 320 65 Q360 67, 400 65" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    
    {/* Miner 1 - gestural sketch walking right */}
    <g transform="translate(25, 12)">
      {/* Helmet - quick circle */}
      <path d="M5 6 Q8 2, 14 3 Q16 5, 15 8 Q12 10, 6 9 Q4 7, 5 6" stroke="hsl(35 25% 75% / 0.4)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      {/* Lamp */}
      <circle cx="16" cy="5" r="2" stroke="hsl(25 35% 55% / 0.45)" strokeWidth="1" fill="none" />
      {/* Head sketch */}
      <path d="M7 10 Q10 8, 13 10 Q14 14, 10 15 Q6 14, 7 10" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      {/* Body - quick gestural line */}
      <path d="M10 15 Q12 22, 14 32" stroke="hsl(35 25% 75% / 0.4)" strokeWidth="2" fill="none" {...sketchStroke} />
      {/* Arms with pickaxe over shoulder */}
      <path d="M11 18 Q6 22, 4 26" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M11 18 Q18 16, 28 10" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      {/* Pickaxe head - quick strokes */}
      <path d="M26 7 Q30 9, 28 13" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      {/* Legs - walking stride */}
      <path d="M14 32 Q10 42, 6 52" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M14 32 Q18 42, 22 50" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    </g>
    
    {/* Miner 2 - walking right with shovel */}
    <g transform="translate(90, 10)">
      <path d="M6 6 Q10 3, 14 5 Q15 8, 13 10 Q8 11, 6 8 Q5 6, 6 6" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <circle cx="15" cy="6" r="1.8" stroke="hsl(25 35% 55% / 0.4)" strokeWidth="1" fill="none" />
      <path d="M8 11 Q11 10, 12 12 Q12 16, 9 17 Q6 16, 8 11" stroke="hsl(35 25% 75% / 0.32)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M10 17 Q13 26, 15 35" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="2" fill="none" {...sketchStroke} />
      <path d="M11 20 Q5 25, 3 30" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M11 20 Q20 22, 28 18" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      {/* Shovel head */}
      <ellipse cx="30" cy="16" rx="4" ry="2.5" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1" fill="none" transform="rotate(-15, 30, 16)" />
      <path d="M15 35 Q10 45, 7 54" stroke="hsl(35 25% 75% / 0.32)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M15 35 Q20 45, 24 53" stroke="hsl(35 25% 75% / 0.32)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    </g>
    
    {/* Miner 3 - walking right, pickaxe resting */}
    <g transform="translate(160, 14)">
      <path d="M5 5 Q9 2, 13 4 Q14 7, 12 9 Q7 10, 5 7 Q4 5, 5 5" stroke="hsl(35 25% 75% / 0.32)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <circle cx="14" cy="5" r="1.8" stroke="hsl(25 35% 55% / 0.35)" strokeWidth="1" fill="none" />
      <path d="M7 10 Q10 9, 11 11 Q11 14, 8 15 Q5 14, 7 10" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M9 15 Q11 23, 12 30" stroke="hsl(35 25% 75% / 0.32)" strokeWidth="2" fill="none" {...sketchStroke} />
      <path d="M10 18 Q4 22, 2 27" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M10 18 Q15 15, 18 12" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M16 10 Q22 4, 28 0" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M26 -2 Q30 0, 28 4" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M12 30 Q8 40, 5 50" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M12 30 Q16 40, 20 48" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    </g>
    
    {/* Miner 4 - walking right with lantern */}
    <g transform="translate(230, 12)">
      <path d="M6 5 Q10 2, 14 4 Q15 7, 13 9 Q8 10, 6 7 Q5 5, 6 5" stroke="hsl(35 25% 75% / 0.38)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <circle cx="15" cy="5" r="1.8" stroke="hsl(25 35% 55% / 0.45)" strokeWidth="1" fill="none" />
      <path d="M8 10 Q11 9, 12 11 Q12 14, 9 15 Q6 14, 8 10" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M10 15 Q13 24, 14 33" stroke="hsl(35 25% 75% / 0.38)" strokeWidth="2" fill="none" {...sketchStroke} />
      <path d="M11 18 Q5 22, 3 28" stroke="hsl(35 25% 75% / 0.32)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M11 18 Q18 22, 22 26" stroke="hsl(35 25% 75% / 0.32)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      {/* Lantern - sketchy rectangle */}
      <path d="M21 24 Q25 23, 26 26 Q26 32, 24 34 Q20 34, 19 30 Q19 26, 21 24" stroke="hsl(25 35% 55% / 0.35)" strokeWidth="1" fill="none" {...sketchStroke} />
      <circle cx="22.5" cy="29" r="1.5" stroke="hsl(25 35% 55% / 0.25)" strokeWidth="0.8" fill="none" />
      <path d="M14 33 Q9 43, 6 52" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M14 33 Q19 43, 23 51" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    </g>
    
    {/* Miner 5 - walking right with pickaxe ready */}
    <g transform="translate(300, 11)">
      <path d="M5 5 Q9 2, 13 4 Q14 7, 12 9 Q7 10, 5 7 Q4 5, 5 5" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <circle cx="14" cy="5" r="1.8" stroke="hsl(25 35% 55% / 0.32)" strokeWidth="1" fill="none" />
      <path d="M7 10 Q10 9, 11 11 Q11 14, 8 15 Q5 14, 7 10" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M9 15 Q12 24, 14 34" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="2" fill="none" {...sketchStroke} />
      <path d="M10 18 Q4 23, 2 28" stroke="hsl(35 25% 75% / 0.26)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M10 18 Q20 14, 32 8" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M30 5 Q35 7, 33 11" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M14 34 Q9 44, 6 53" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M14 34 Q19 44, 24 52" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    </g>
    
    {/* Mine entrance on right - sketchy arch */}
    <g transform="translate(362, 0)">
      <path d="M2 65 Q1 50, 3 42 Q8 35, 18 34 Q28 35, 33 42 Q35 50, 34 65" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="2" fill="hsl(0 0% 5% / 0.7)" {...sketchStroke} />
      <path d="M5 65 Q4 52, 6 45 Q10 38, 18 37 Q26 38, 30 45 Q32 52, 31 65" stroke="hsl(35 25% 75% / 0.15)" strokeWidth="1" fill="none" {...sketchStroke} />
      {/* Beam sketches */}
      <path d="M6 65 Q5 55, 7 44" stroke="hsl(25 35% 50% / 0.3)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M30 65 Q31 55, 29 44" stroke="hsl(25 35% 50% / 0.3)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    </g>
  </svg>
));

// Mine cart on rails - Sketch style
const MineCart = memo(() => (
  <svg
    viewBox="0 0 350 80"
    className="w-56 sm:w-72 md:w-96 h-auto"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Rails - sketchy wavy lines */}
    <path d="M2 70 Q90 68, 175 71 Q260 69, 348 70" stroke="hsl(35 25% 75% / 0.22)" strokeWidth="2" fill="none" {...sketchStroke} />
    <path d="M2 75 Q90 77, 175 74 Q260 76, 348 75" stroke="hsl(35 25% 75% / 0.22)" strokeWidth="2" fill="none" {...sketchStroke} />
    
    {/* Rail ties - quick sketch marks */}
    {[...Array(16)].map((_, i) => (
      <path
        key={i}
        d={`M${15 + i * 21} 68 Q${16 + i * 21} 72, ${15 + i * 21} 77`}
        stroke="hsl(25 35% 50% / 0.2)"
        strokeWidth="2.5"
        fill="none"
        {...sketchStroke}
      />
    ))}
    
    {/* Miner pushing cart - gestural sketch */}
    <g transform="translate(75, 5)">
      {/* Helmet */}
      <path d="M4 4 Q8 1, 13 3 Q14 6, 12 8 Q7 9, 5 6 Q3 4, 4 4" stroke="hsl(35 25% 75% / 0.3)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <circle cx="4" cy="5" r="2" stroke="hsl(25 35% 50% / 0.28)" strokeWidth="1" fill="none" />
      {/* Head */}
      <path d="M6 9 Q10 8, 11 10 Q11 14, 8 15 Q5 14, 6 9" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      {/* Body leaning forward */}
      <path d="M9 15 Q14 25, 18 38" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="2" fill="none" {...sketchStroke} />
      {/* Arms pushing */}
      <path d="M10 18 Q5 23, 8 28" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M10 18 Q20 24, 28 28" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      {/* Legs */}
      <path d="M18 38 Q12 48, 8 58" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M18 38 Q22 48, 26 56" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    </g>
    
    {/* Mine cart body - sketchy trapezoid */}
    <g transform="translate(130, 20)">
      {/* Cart body - hand-drawn trapezoid */}
      <path d="M12 45 Q8 35, 3 22 Q2 20, 5 18 Q50 17, 95 18 Q98 20, 97 22 Q92 35, 88 45 Q50 46, 12 45" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="2" fill="hsl(35 25% 75% / 0.08)" {...sketchStroke} />
      {/* Secondary sketch line */}
      <path d="M15 43 Q10 33, 6 22 Q50 20, 94 22 Q90 33, 85 43" stroke="hsl(35 25% 75% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
      
      {/* Coal pile - organic sketchy mounds */}
      <path d="M12 20 Q22 8, 38 10 Q55 5, 70 10 Q85 6, 88 20" stroke="hsl(0 0% 20% / 0.5)" strokeWidth="1.5" fill="hsl(0 0% 8% / 0.75)" {...sketchStroke} />
      {/* Coal detail strokes */}
      <path d="M25 14 Q32 10, 40 13" stroke="hsl(0 0% 15% / 0.4)" strokeWidth="1" fill="none" {...sketchStroke} />
      <path d="M50 11 Q60 8, 72 12" stroke="hsl(0 0% 15% / 0.4)" strokeWidth="1" fill="none" {...sketchStroke} />
      <path d="M35 8 Q45 5, 55 8" stroke="hsl(0 0% 12% / 0.3)" strokeWidth="1" fill="none" {...sketchStroke} />
      
      {/* Cart reinforcement - quick lines */}
      <path d="M8 32 Q50 30, 92 32" stroke="hsl(35 25% 75% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
      <path d="M25 20 Q23 32, 22 44" stroke="hsl(35 25% 75% / 0.12)" strokeWidth="1" fill="none" {...sketchStroke} />
      <path d="M75 20 Q77 32, 78 44" stroke="hsl(35 25% 75% / 0.12)" strokeWidth="1" fill="none" {...sketchStroke} />
      
      {/* Wheels - imperfect circles */}
      <path d="M18 50 Q12 48, 12 54 Q12 60, 18 60 Q24 60, 24 54 Q24 48, 18 50" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="2" fill="hsl(0 0% 12%)" {...sketchStroke} />
      <circle cx="18" cy="54" r="2.5" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1" fill="none" />
      
      <path d="M82 50 Q76 48, 76 54 Q76 60, 82 60 Q88 60, 88 54 Q88 48, 82 50" stroke="hsl(35 25% 75% / 0.35)" strokeWidth="2" fill="hsl(0 0% 12%)" {...sketchStroke} />
      <circle cx="82" cy="54" r="2.5" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1" fill="none" />
    </g>
    
    {/* Falling coal pieces - quick dots */}
    <ellipse cx="252" cy="68" rx="2.5" ry="1.5" stroke="hsl(0 0% 15% / 0.4)" strokeWidth="1" fill="hsl(0 0% 10% / 0.5)" />
    <ellipse cx="262" cy="72" rx="2" ry="1.2" stroke="hsl(0 0% 15% / 0.35)" strokeWidth="1" fill="hsl(0 0% 12% / 0.4)" />
    <ellipse cx="246" cy="74" rx="2.2" ry="1.3" stroke="hsl(0 0% 15% / 0.35)" strokeWidth="1" fill="hsl(0 0% 11% / 0.4)" />
  </svg>
));

// Mining tools decorative border - Sketch style
const MiningTools = memo(() => (
  <svg
    viewBox="0 0 400 50"
    className="w-full h-auto max-w-xl"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Top decorative line - wavy sketch */}
    <path d="M25 9 Q100 6, 200 9 Q300 12, 375 8" stroke="hsl(35 25% 75% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
    <path d="M30 7 Q120 5, 200 7 Q280 10, 370 7" stroke="hsl(35 25% 75% / 0.1)" strokeWidth="0.8" fill="none" {...sketchStroke} />
    
    {/* Bottom decorative line */}
    <path d="M25 42 Q100 45, 200 42 Q300 39, 375 43" stroke="hsl(35 25% 75% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
    <path d="M30 44 Q120 46, 200 43 Q280 41, 370 44" stroke="hsl(35 25% 75% / 0.1)" strokeWidth="0.8" fill="none" {...sketchStroke} />
    
    {/* Pickaxe 1 - quick sketch strokes */}
    <g transform="translate(40, 14)">
      <path d="M2 22 Q10 12, 20 2" stroke="hsl(25 35% 50% / 0.35)" strokeWidth="2" fill="none" {...sketchStroke} />
      <path d="M0 24 Q8 14, 18 4" stroke="hsl(25 35% 50% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
      <path d="M18 0 Q24 2, 22 8" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M0 24 Q-2 20, 2 18" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    </g>
    
    {/* Dot ornament */}
    <circle cx="90" cy="25" r="2.5" stroke="hsl(25 35% 50% / 0.22)" strokeWidth="1" fill="none" />
    <circle cx="90" cy="25" r="1" stroke="hsl(25 35% 50% / 0.15)" strokeWidth="0.5" fill="none" />
    
    {/* Lamp 1 - sketchy rectangle */}
    <g transform="translate(110, 12)">
      <path d="M1 10 Q0 12, 1 24 Q6 25, 11 24 Q12 12, 11 10 Q6 9, 1 10" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M2 10 Q2 6, 4 4 Q8 4, 10 6 Q10 10, 10 10" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1" fill="none" {...sketchStroke} />
      <circle cx="6" cy="1" r="2" stroke="hsl(25 35% 55% / 0.25)" strokeWidth="1" fill="none" />
      <ellipse cx="6" cy="17" rx="2.5" ry="1.5" stroke="hsl(25 35% 55% / 0.18)" strokeWidth="0.8" fill="none" />
    </g>
    
    {/* Wavy ornament */}
    <path d="M150 22 Q156 17, 162 22 Q168 27, 174 22" stroke="hsl(35 25% 75% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
    
    {/* Shovel - quick sketch */}
    <g transform="translate(185, 12)">
      <path d="M10 24 Q9 14, 10 4" stroke="hsl(25 35% 50% / 0.35)" strokeWidth="2" fill="none" {...sketchStroke} />
      <path d="M8 22 Q8 14, 8 6" stroke="hsl(25 35% 50% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
      <ellipse cx="10" cy="2" rx="7" ry="3.5" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" transform="rotate(-5, 10, 2)" />
    </g>
    
    {/* Dot ornament */}
    <circle cx="220" cy="25" r="2.5" stroke="hsl(25 35% 50% / 0.22)" strokeWidth="1" fill="none" />
    <circle cx="220" cy="25" r="1" stroke="hsl(25 35% 50% / 0.15)" strokeWidth="0.5" fill="none" />
    
    {/* Helmet - sketchy dome */}
    <g transform="translate(240, 14)">
      <path d="M0 20 Q2 12, 10 8 Q18 12, 20 20" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M-1 20 Q20 21, 21 20" stroke="hsl(35 25% 75% / 0.25)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <circle cx="4" cy="14" r="2.5" stroke="hsl(25 35% 55% / 0.22)" strokeWidth="1" fill="none" />
    </g>
    
    {/* Wavy ornament */}
    <path d="M280 22 Q286 17, 292 22 Q298 27, 304 22" stroke="hsl(35 25% 75% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
    
    {/* Lamp 2 */}
    <g transform="translate(315, 12)">
      <path d="M1 10 Q0 12, 1 24 Q6 25, 11 24 Q12 12, 11 10 Q6 9, 1 10" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M2 10 Q2 6, 4 4 Q8 4, 10 6 Q10 10, 10 10" stroke="hsl(35 25% 75% / 0.2)" strokeWidth="1" fill="none" {...sketchStroke} />
      <circle cx="6" cy="1" r="2" stroke="hsl(25 35% 55% / 0.25)" strokeWidth="1" fill="none" />
      <ellipse cx="6" cy="17" rx="2.5" ry="1.5" stroke="hsl(25 35% 55% / 0.18)" strokeWidth="0.8" fill="none" />
    </g>
    
    {/* Pickaxe 2 - mirrored quick sketch */}
    <g transform="translate(345, 14)">
      <path d="M18 22 Q10 12, 0 2" stroke="hsl(25 35% 50% / 0.35)" strokeWidth="2" fill="none" {...sketchStroke} />
      <path d="M20 24 Q12 14, 2 4" stroke="hsl(25 35% 50% / 0.18)" strokeWidth="1" fill="none" {...sketchStroke} />
      <path d="M2 0 Q-4 2, -2 8" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
      <path d="M20 24 Q22 20, 18 18" stroke="hsl(35 25% 75% / 0.28)" strokeWidth="1.5" fill="none" {...sketchStroke} />
    </g>
  </svg>
));

TunnelEntrance.displayName = 'TunnelEntrance';
MinersWalking.displayName = 'MinersWalking';
MineCart.displayName = 'MineCart';
MiningTools.displayName = 'MiningTools';
MiningIllustration.displayName = 'MiningIllustration';

export default MiningIllustration;
