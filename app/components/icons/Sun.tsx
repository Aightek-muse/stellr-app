import React from 'react';
import { Sun as SunIcon } from 'lucide-react-native';
import { tokens } from '../../lib/tokens';

interface SunProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

/**
 * Sun icon component.
 * 
 * - Default size: 24px (lg)
 * - Default color: gold
 * - Stroke width: 1.5px
 */
export function Sun({ 
  size = tokens.icons.sizes.lg, 
  color = tokens.colors.gold,
  strokeWidth = 1.5,
}: SunProps) {
  return (
    <SunIcon 
      size={size} 
      color={color} 
      strokeWidth={strokeWidth} 
    />
  );
}
