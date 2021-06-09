import cs from 'classnames';
import React from 'react';

import { variantToClassMapping, variantToElementMapping } from './consts';
import { TypographyProps, Variant } from './types';

const Typography = React.forwardRef(
  (
    {
      variant = Variant.Body1,
      children,
      component,
      fontWeight,
      textTransform,
      customClassName,
      // This is needed for usage in custom Link component - https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component
      ...restProps
    }: TypographyProps,
    ref
  ) =>
    React.createElement(
      component || variantToElementMapping[variant],
      {
        className: cs(
          variantToClassMapping[variant],
          fontWeight,
          textTransform,
          customClassName
        ),
        ref,
        ...restProps,
      },
      children
    )
);

Typography.displayName = 'Typography';

export default Typography;
