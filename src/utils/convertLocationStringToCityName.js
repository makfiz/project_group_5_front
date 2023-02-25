export const convertLocationStringToCityName = location =>
  location.split(',')[0] ? location.split(',')[0] : 'unknown';
