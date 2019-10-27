Intl = require("intl");

export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  let date = new Intl.DateTimeFormat('en-GB').format(dateToFormatTimeMillis);
  let sysDate = new Intl.DateTimeFormat('en-GB').format(systemDateTimeMillis);

  if (date === sysDate) {
    return "TODAY";
  } else {
    return date;
  }
};
