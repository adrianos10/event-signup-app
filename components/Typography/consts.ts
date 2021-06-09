import { Variant } from './types';
import styles from './Typography.module.css';

export const variantToElementMapping: MappedObject<string, Variant> = {
  [Variant.Heading1]: 'h1',
  [Variant.Body1]: 'p',
  [Variant.Body2]: 'p',
  [Variant.Button]: 'span',
};

export const variantToClassMapping: MappedObject<string, Variant> = {
  [Variant.Heading1]: styles['heading-1'],
  [Variant.Body1]: styles['body-1'],
  [Variant.Body2]: styles['body-2'],
  [Variant.Button]: styles['button-text'],
};
