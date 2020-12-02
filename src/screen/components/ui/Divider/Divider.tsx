import { HTMLAttributes } from 'react';

import mergeClassNames from '@utils/mergeClassNames';

import styles from './Divider.module.css';

const Divider = ({ className, ...rest }: Props) => (
  <div {...rest} className={mergeClassNames(styles.container, className)} />
);

interface Props extends HTMLAttributes<HTMLElement> {}

export default Divider;
