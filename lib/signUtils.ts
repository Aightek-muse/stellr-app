/**
 * Stellr Sign Utilities
 * 
 * Helper functions for zodiac sign calculations.
 */

export const signDateRanges: Record<string, string> = {
  aries: 'March 21 – April 19',
  taurus: 'April 20 – May 20',
  gemini: 'May 21 – June 20',
  cancer: 'June 21 – July 22',
  leo: 'July 23 – August 22',
  virgo: 'August 23 – September 22',
  libra: 'September 23 – October 22',
  scorpio: 'October 23 – November 21',
  sagittarius: 'November 22 – December 21',
  capricorn: 'December 22 – January 19',
  aquarius: 'January 20 – February 18',
  pisces: 'February 19 – March 20',
};

export const signElements: Record<string, string> = {
  aries: 'fire',
  taurus: 'earth',
  gemini: 'air',
  cancer: 'water',
  leo: 'fire',
  virgo: 'earth',
  libra: 'air',
  scorpio: 'water',
  sagittarius: 'fire',
  capricorn: 'earth',
  aquarius: 'air',
  pisces: 'water',
};

export const signModalities: Record<string, string> = {
  aries: 'cardinal',
  taurus: 'fixed',
  gemini: 'mutable',
  cancer: 'cardinal',
  leo: 'fixed',
  virgo: 'mutable',
  libra: 'cardinal',
  scorpio: 'fixed',
  sagittarius: 'mutable',
  capricorn: 'cardinal',
  aquarius: 'fixed',
  pisces: 'mutable',
};

/**
 * Get sign from element and modality combination
 */
export function getSign(element: string, modality: string): string {
  const elementModalityToSign: Record<string, Record<string, string>> = {
    fire: {
      cardinal: 'aries',
      fixed: 'leo',
      mutable: 'sagittarius',
    },
    earth: {
      cardinal: 'capricorn',
      fixed: 'taurus',
      mutable: 'virgo',
    },
    air: {
      cardinal: 'libra',
      fixed: 'aquarius',
      mutable: 'gemini',
    },
    water: {
      cardinal: 'cancer',
      fixed: 'scorpio',
      mutable: 'pisces',
    },
  };

  return elementModalityToSign[element]?.[modality] || 'aries';
}

/**
 * Capitalize sign name for display
 */
export function capitalizeSign(sign: string): string {
  return sign.charAt(0).toUpperCase() + sign.slice(1);
}

/**
 * Get element from sign
 */
export function getElementForSign(sign: string): string {
  return signElements[sign.toLowerCase()] || 'fire';
}

/**
 * Get modality from sign
 */
export function getModalityForSign(sign: string): string {
  return signModalities[sign.toLowerCase()] || 'cardinal';
}
