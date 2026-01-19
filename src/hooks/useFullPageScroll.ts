import { useState, useCallback, useEffect, useRef } from 'react';

interface UseFullPageScrollProps {
  totalSections: number;
  debounceTime?: number;
}

// Helper to check if touch is inside a scrollable element and if it can scroll
const getScrollableInfo = (target: EventTarget | null) => {
  if (!target || !(target instanceof HTMLElement)) return null;
  
  const scrollableParent = target.closest('[data-scrollable="true"]') as HTMLElement | null;
  if (!scrollableParent) return null;
  
  const { scrollTop, scrollHeight, clientHeight } = scrollableParent;
  const isAtTop = scrollTop <= 5;
  const isAtBottom = scrollTop + clientHeight >= scrollHeight - 5;
  const canScroll = scrollHeight > clientHeight;
  
  return { scrollableParent, isAtTop, isAtBottom, canScroll };
};

export const useFullPageScroll = ({ totalSections, debounceTime = 800 }: UseFullPageScrollProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);
  const touchStartTarget = useRef<EventTarget | null>(null);

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= totalSections || isScrolling.current) return;
    
    isScrolling.current = true;
    setCurrentSection(index);
    
    setTimeout(() => {
      isScrolling.current = false;
    }, debounceTime);
  }, [totalSections, debounceTime]);

  const scrollNext = useCallback(() => {
    scrollToSection(currentSection + 1);
  }, [currentSection, scrollToSection]);

  const scrollPrev = useCallback(() => {
    scrollToSection(currentSection - 1);
  }, [currentSection, scrollToSection]);

  // Wheel scroll handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if wheel is inside scrollable element
      const scrollInfo = getScrollableInfo(e.target);
      
      if (scrollInfo && scrollInfo.canScroll) {
        const isScrollingDown = e.deltaY > 0;
        const isScrollingUp = e.deltaY < 0;
        
        // Allow internal scroll if not at boundaries
        if ((isScrollingDown && !scrollInfo.isAtBottom) || (isScrollingUp && !scrollInfo.isAtTop)) {
          return; // Don't prevent default, let internal scroll happen
        }
      }
      
      e.preventDefault();
      if (isScrolling.current) return;

      if (e.deltaY > 0) {
        scrollNext();
      } else if (e.deltaY < 0) {
        scrollPrev();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrollNext, scrollPrev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollNext();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollPrev();
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(totalSections - 1);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollNext, scrollPrev, scrollToSection, totalSections]);

  // Touch swipe handler
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartTarget.current = e.target;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY.current - touchEndY;
      const threshold = 50;

      // Check if touch started in a scrollable element
      const scrollInfo = getScrollableInfo(touchStartTarget.current);
      
      if (scrollInfo && scrollInfo.canScroll) {
        const isSwipingUp = diff > threshold; // Swiping up = scroll down / next section
        const isSwipingDown = diff < -threshold; // Swiping down = scroll up / prev section
        
        // Only trigger section change if at boundary
        if (isSwipingUp && !scrollInfo.isAtBottom) {
          return; // Let internal scroll continue
        }
        if (isSwipingDown && !scrollInfo.isAtTop) {
          return; // Let internal scroll continue
        }
      }

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          scrollNext();
        } else {
          scrollPrev();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollNext, scrollPrev]);

  return {
    currentSection,
    scrollToSection,
    scrollNext,
    scrollPrev,
    isScrolling: isScrolling.current,
  };
};
