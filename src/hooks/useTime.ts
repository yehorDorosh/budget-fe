const useTime = (dateStr: string) => {
  const defaultResult = {
    time: '--:--:--',
    date: '--.--.--',
    dateTime: '****-**-** **:**:**',
  };

  if (!dateStr) return defaultResult;
  const date = new Date(dateStr);
  const isValidDate = !isNaN(date.getTime());
  if (!isValidDate) return defaultResult;

  const h = date.getHours();
  const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  return {
    time: `${h}:${m}:${s}`,
    date: `${day}.${month}.${year}`,
    dateTime: `${year}-${month}-${day} ${h}:${m}:${s}`,
  };
};

export default useTime;
