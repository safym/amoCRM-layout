import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg'

import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <LogoSvg className={styles.logo} />
      <span className={styles.subtitle}>
        крупный интегратор CRM
        <br />
        в Росcии и ещё 8 странах
      </span>
    </div>
  )
}

export default Logo
