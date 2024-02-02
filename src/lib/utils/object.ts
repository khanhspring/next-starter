export const toString = (val?: unknown) => {
  if (val === undefined || val === null) return undefined;
  return val + '';
};

export const isNumeric = (val?: string | number) => {
  if (val === undefined || val === null) return false;
  return !isNaN(+val) && !isNaN(parseFloat(val + ''));
};

export const isInRange = (val: number, min: number, max: number) => {
  return val <= max && val >= min;
};

export const isNil = (val?: unknown) => {
  return val === undefined || val === null;
};
