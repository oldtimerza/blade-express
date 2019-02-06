export const isEmpty = value => {
  const result = !value || value === "";
  return result;
};

export const isNumeric = value => {
  const result = /^\d*$/.test(value);
  return result;
};

export const isMeasurement = value => {
  const result = /\d+(cm|mm|m)/.test(value);
  return result;
};

export const isWeight = value => {
  const result = /\d+(g|kg)/.test(value);
  return result;
};
