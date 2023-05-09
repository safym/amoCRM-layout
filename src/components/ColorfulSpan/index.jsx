import cn from 'classnames'

import styles from './ColorfulSpan.module.scss'

const ColorfulSpan = ({ children, className }) => {
  return (
    <span className={cn(styles.colorfulSpan, className)}>
      {children}
    </span>
  )
}

export default ColorfulSpan
