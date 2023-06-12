import React, { ReactElement } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import styles from './Logo.module.scss';
import DefaultProps from '@/typings/DefaultProps';

interface ILogo extends DefaultProps {
  altMessage?: string;
  srcLogo: string;
}

const Logo = ({
  altMessage = '',
  srcLogo,
  className,
  ...restProps
}: ILogo): ReactElement => (
  <Image
    className={cx(styles.logo, styles.container, className)}
    src={srcLogo}
    alt={altMessage}
    width={100}
    height={100}
  />
);

export default Logo;
