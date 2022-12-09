const useTime = (dateStr: string) => {
  const date = new Date(dateStr);
  const h = date.getHours();
  const m = date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes();
  const s = date.getSeconds() < 10 ? `0${date.getSeconds()}`: date.getSeconds();

  return {
    time: `${h}:${m}:${s}`,
  };
};

export default useTime;
