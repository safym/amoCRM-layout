import cn from 'classnames'

import styles from './Link.module.scss'

const Link = ({ className, children, url = '#' }) => {
  return (
    <a className={cn(styles.link, className)} href={url}>
      {children}
    </a>
  )
}

export default Link
