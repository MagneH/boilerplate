import isPropValid from '@emotion/is-prop-valid';

export const propValidationConfig = {
  shouldForwardProp: (prop: string | number) => isPropValid(prop.toString()) && !['error'].includes(prop.toString()),
};
