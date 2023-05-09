import cn from 'classnames'

import styles from './Feature.module.scss'

const Feature = ({ className, children, title }) => {
  return (
    <div className={cn(styles.feature, className)}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{children}</p>
    </div>
  )
}

export default Feature
