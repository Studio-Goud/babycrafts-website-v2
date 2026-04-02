import { useState, useEffect } from 'react';

// Dynamische beeldjes counter
// Base: 1300 op 2 april 2026
// Gemiddelde: 1.5 per dag (wisselt tussen 1 en 2)

const BASE_COUNT = 1300;
const BASE_DATE = new Date('2026-04-02').getTime();
const AVG_PER_DAY = 1.5;

export const getDynamicStatueCount = (): number => {
  const now = Date.now();
  const daysElapsed = Math.floor((now - BASE_DATE) / (1000 * 60 * 60 * 24));
  const additionalStatues = Math.floor(daysElapsed * AVG_PER_DAY);
  return BASE_COUNT + additionalStatues;
};

// Formatter voor mooie weergave (bv. "1.347" of "1347+")
export const formatStatueCount = (count: number, withPlus: boolean = true): string => {
  const formatted = count.toLocaleString('nl-NL');
  return withPlus ? `${formatted}+` : formatted;
};

// React hook voor live updates (elke minuut check)
export const useDynamicStatueCount = (withPlus: boolean = true): string => {
  const [count, setCount] = useState(() => formatStatueCount(getDynamicStatueCount(), withPlus));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(formatStatueCount(getDynamicStatueCount(), withPlus));
    }, 60000); // Update elke minuut
    
    return () => clearInterval(interval);
  }, [withPlus]);
  
  return count;
};