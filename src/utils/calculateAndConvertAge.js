import { formatDistanceToNowStrict } from 'date-fns';
import converter from 'number-to-words';

export const calculateAndConvertAge = dateOfBirth => {
  const ageWithDigit = formatDistanceToNowStrict(dateOfBirth);
  const ageInRow = ageWithDigit.split(' ');
  const ageInWord = converter.toWords(parseInt(ageInRow[0]));
  ageInRow.splice(0, 1, ageInWord);
  return ageInRow.join(' ');
};
