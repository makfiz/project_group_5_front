export const renameNoticesCategory = name =>
  name === 'lost_found' ? name.replace('_', '/') : name.replaceAll('_', ' ');
