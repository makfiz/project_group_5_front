import { formatDistanceToNowStrict } from 'date-fns';
import converter from 'number-to-words';
import moment from 'moment';

export const calculateAndConvertAge = dateOfBirth => {
  if (!moment(dateOfBirth, 'DD/MM/YYYY').isValid()) {
    return 'unknown';
  }

  const date = moment(dateOfBirth, 'DD/MM/YYYY').toDate();
  const ageWithDigit = formatDistanceToNowStrict(date);
  const ageInRow = ageWithDigit.split(' ');
  const ageInWord = converter.toWords(parseInt(ageInRow[0]));
  ageInRow.splice(0, 1, ageInWord);
  return ageInRow.join(' ');
};
