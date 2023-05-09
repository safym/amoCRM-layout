import cn from 'classnames'

import Link from '../Link'
import Icon from '../Icon'

import styles from './Footer.module.scss'

const Footer = ({ className }) => {
  return (
    <footer className={cn(styles.footer, className)}>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <h4 className={styles.title}>О компании</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link>Партнёрская программа</Link>
            </li>
            <li className={styles.listItem}>
              <Link>Вакансии</Link>
            </li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h4 className={styles.title}>Меню</h4>
          <div className={styles.columns}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link>Расчёт стоимости</Link>
              </li>
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
                <Link>Наши клиенты</Link>
              </li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link>Кейсы</Link>
              </li>
              <li className={styles.listItem}>
                <Link>Благодарственные письма</Link>
              </li>
              <li className={styles.listItem}>
                <Link>Сертификаты</Link>
              </li>
              <li className={styles.listItem}>
                <Link>Блог на Youtube</Link>
              </li>
              <li className={styles.listItem}>
                <Link>Вопрос / Ответ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contact}>
          <h4 className={styles.title}>Контакты</h4>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <Link>+7 555 555-55-55</Link>
            </li>
            <li className={styles.contactItem}>
              <div className={styles.social}>
                <Link className={styles.socialItem}>
                  <Icon iconName="telegram" />
                </Link>
                <Link className={styles.socialItem}>
                  <Icon iconName="viber" />
                </Link>
                <Link className={styles.socialItem}>
                  <Icon iconName="whatsapp" />
                </Link>
              </div>
            </li>
            <li className={styles.contactItem}>
              <Link className={styles.contactItem}>
                Москва, Путевой проезд 3с1, к 902
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link className={styles.bottomLink}>
          ©WELBEX 2022. Все права защищены.
        </Link>
        <Link className={styles.bottomLink}>
          Москва, Путевой проезд 3с1, к 902
        </Link>
      </div>
    </footer>
  )
}

export default Footer
