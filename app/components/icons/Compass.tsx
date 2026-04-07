import React from 'react';
import { Compass as CompassIcon } from 'lucide-react-native';
import { tokens } from '../../lib/tokens';

interface CompassProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

/**
 * Compass icon component.
 * 
 * - Default size: 24px (lg)
 * - Default color: gold
 * - Stroke width: 1.5px
 */
export function Compass({ 
  size = tokens.icons.sizes.lg, 
  color = tokens.colors.gold,
  strokeWidth = 1.5,
}: CompassProps) {
  return (
    <CompassIcon 
      size={size} 
      color={color} 
      strokeWidth={strokeWidth} 
    />
  );
}
