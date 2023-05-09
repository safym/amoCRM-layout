import cn from 'classnames'

import styles from './Subtitle.module.scss'

const Subtitle = ({ className, children }) => {
  return <p className={cn(styles.subtitle, className)}>{children}</p>
}

export default Subtitle
