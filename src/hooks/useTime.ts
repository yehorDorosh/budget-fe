const useTime = (dateStr: string) => {
  const date = new Date(dateStr);
  const isValidDate = date instanceof Date && !isNaN(date.getTime());
  if (!isValidDate) {
    return {
      time: '--:--:--',
      date: '--.--.--'
    };
  }

  const h = date.getHours();
  const m = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes();
  const s = date.getSeconds() < 10 ? `0${date.getSeconds()}`: date.getSeconds();
  const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const year = date.getFullYear();
  return {
    time: `${h}:${m}:${s}`,
    date: `${day}.${month}.${year}`,
  };
};

export default useTime;
