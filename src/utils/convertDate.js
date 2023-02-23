export function convertDate(date) {
  let updatedDate = '01/01/1999';
  if (date) {
    const articleDate = new Date(date);
    const year = articleDate.getFullYear();
    const month = () => {
      let artMonth = articleDate.getMonth() + 1;
      return artMonth <= 9 ? '0' + artMonth : artMonth;
    };
    const day = () => {
      let artDay = articleDate.getDate();
      return artDay <= 9 ? '0' + artDay : artDay;
    };
    updatedDate = `${year}/${month()}/${day()}`;
  }
  return updatedDate;
}
