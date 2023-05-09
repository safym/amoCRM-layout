import cn from 'classnames'

import Icon from '../Icon'
import Link from '../Link'
import Logo from '../Logo'

import styles from './Header.module.scss'

const Header = ({ className }) => {
  return (
    <header className={cn(styles.header, className)}>
      <Link className={styles.logo}>
        <Logo />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link>Услуги</Link>
          </li>
          <li className={styles.listItem}>
            <Link>Виджеты</Link>
          </li>
          <li className={styles.listItem}>
            <Link>Интеграции</Link>
          </li>
          <li className={styles.listItem}>
            <Link>Кейсы</Link>
          </li>
          <li className={styles.listItem}>
            <Link>Сертификаты</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.contacts}>
        <ul className={styles.list}>
          <li className={styles.phoneNumber}>
            <Link>+7 555 555-55-55</Link>
          </li>
          <li className={styles.listItem}>
            <Link>
              <Icon iconName="telegram" />
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link>
              <Icon iconName="viber" />
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.icon}>
              <Icon iconName="whatsapp" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
