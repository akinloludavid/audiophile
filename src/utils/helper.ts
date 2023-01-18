export const shortenProductName = (str: string) => {
  return str
    .split(" ")
    .filter((el, idx, arr) => idx !== arr.length - 1)
    .join(" ");
};
