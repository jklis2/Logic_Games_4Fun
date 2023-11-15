export const sortAndLimitRecords = (records, newRecord) => {
  const newRecords = [...records, newRecord];
  newRecords.sort((a, b) => a - b);
  if (newRecords.length > 5) {
    newRecords.length = 5;
  }
  return newRecords;
};
