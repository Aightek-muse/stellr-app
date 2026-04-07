import React from 'react';
import { Moon as MoonIcon } from 'lucide-react-native';
import { tokens } from '../../lib/tokens';

interface MoonProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

/**
 * Moon icon component.
 * 
 * - Default size: 24px (lg)
 * - Default color: lavender
 * - Stroke width: 1.5px
 */
export function Moon({ 
  size = tokens.icons.sizes.lg, 
  color = tokens.colors.lavender,
  strokeWidth = 1.5,
}: MoonProps) {
  return (
    <MoonIcon 
      size={size} 
      color={color} 
      strokeWidth={strokeWidth} 
    />
  );
}
