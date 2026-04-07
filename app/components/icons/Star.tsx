import React from 'react';
import { Star as StarIcon } from 'lucide-react-native';
import { tokens } from '../../lib/tokens';

interface StarProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

/**
 * Star icon component.
 * 
 * - Default size: 24px (lg)
 * - Default color: gold
 * - Stroke width: 1.5px
 */
export function Star({ 
  size = tokens.icons.sizes.lg, 
  color = tokens.colors.gold,
  strokeWidth = 1.5,
}: StarProps) {
  return (
    <StarIcon 
      size={size} 
      color={color} 
      strokeWidth={strokeWidth} 
    />
  );
}
