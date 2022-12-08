function consoleLogError(e: unknown) {
  if (e instanceof Error) console.log(e.message);
  else console.log(e);
}

export default consoleLogError;
