import cn from 'classnames'

import styles from './Title.module.scss'

const Title = ({ className, children, size }) => {
  return (
    <h1
      className={cn(
        styles.title,
        { [styles.xxl]: size === 'xxl', [styles.lg]: size === 'lg' },
        className
      )}
    >
      {children}
    </h1>
  )
}

export default Title
