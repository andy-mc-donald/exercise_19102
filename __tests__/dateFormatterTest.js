import {format} from '../src/dateFormatter';

const November = 10; 
const December = 11; //js Date object month is indexed from 0

it('when the system date and the date to format are the same day formats as "TODAY"', () => {
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime(); //Same day different time
  expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
});

it('when the system-date and the date-to-format are not the same, return date-to-format to string', () => {
  const systemDateTime = new Date(2019, November, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2019, December, 15, 12, 50).getTime(); 
  expect(format(dateTimeToFormat, systemDateTime)).toBe(new Intl.DateTimeFormat('en-GB').format(dateTimeToFormat));
});

it('when the system-date and the date-to-format are not the same, return dateTime in DD/MM/YYYY format', () => {
  const systemDateTime = new Date(2019, November, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2019, December, 15, 12, 50).getTime(); 
  expect(format(dateTimeToFormat, systemDateTime)).toBe('15/12/2019');
});