export const addCommas = (str: string) => {
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
