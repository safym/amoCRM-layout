import cn from 'classnames'

import styles from './Button.module.scss'

const Button = ({ className, children, onClick }) => {
  return (
    <a className={cn(styles.button, className)} onClick={() => onClick}>
      {children}
    </a>
  )
}

export default Button

