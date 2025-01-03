// dateUtils.ts

export const calculateExpiredDateDetails = (
  timePriod: string,
  expiredDate: string
) => {
  const currentDate = new Date(); // Current date
  const baseDate = new Date(timePriod); // Start date

  const baseDay = baseDate.getDate(); // วัน
  const baseMonth = baseDate.getMonth() + 1; // เดือน (ต้อง +1 เพราะ getMonth() เริ่มที่ 0)
  const baseYear = baseDate.getFullYear(); // ปี

  const expiredDays = parseInt(expiredDate, 10); // Convert expiredDate to an integer

  // Calculate the expired date (end date)
  const expiredDateInt = new Date(baseDate);
  expiredDateInt.setDate(baseDate.getDate() + expiredDays);

  // Separate the expired date into day, month, and year
  const expiredDay = expiredDateInt.getDate();
  const expiredMonth = expiredDateInt.getMonth() + 1; // Month is 0-indexed
  const expiredYear = expiredDateInt.getFullYear();

  // Calculate the difference between the current date and the expired date in milliseconds
  const timeDifference = expiredDateInt.getTime() - currentDate.getTime();

  // Calculate the number of days remaining
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Calculate the percentage of time elapsed
  const elapsedPercentage = ((daysRemaining / expiredDays) * 100).toFixed(2);

  return {
    baseDay,
    baseMonth,
    baseYear,
    expiredDay,
    expiredMonth,
    expiredYear,
    daysRemaining,
    elapsedPercentage,
  };
};
