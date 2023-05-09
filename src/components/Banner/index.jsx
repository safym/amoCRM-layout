import cn from 'classnames'

import Title from '../Title'
import ColorfulSpan from '../ColorfulSpan'
import Subtitle from '../Subtitle'
import Feature from '../Feature'
import Button from '../Button'

import styles from './Banner.module.scss'

const Banner = ({ className }) => {
  return (
    <div className={cn(styles.banner, className)}>
      <div className={styles.wrapper}>
        <div className={styles.leftColumn}>
          <Title size="xxl" className={styles.mainTitle}>
            Зарабатывайте
            <br />
            больше
            <br />
            <ColorfulSpan>с WELBEX</ColorfulSpan>
          </Title>
          <Subtitle>
            Развиваем и контролируем
            <br /> продажи за вас
          </Subtitle>
        </div>

        <div className={styles.rightColumn}>
          <Title size="lg" className={styles.featureTitle}>
            Вместе с{' '}
            <ColorfulSpan className={styles.uppercase}>
              бесплатной консультацией
            </ColorfulSpan>{' '}
            мы дарим:
          </Title>
          <div className={styles.features}>
            <Feature className={styles.widgets} title="Виджеты">
              30 готовых решений
            </Feature>
            <Feature className={styles.dashboard} title="Dashboard">
              с показателями вашего бизнеса
            </Feature>
            <Feature className={styles.audit} title="Skype Аудит">
              отдела продаж и CRM системы
            </Feature>
            <Feature className={styles.days} title="35 дней">
              использования CRM
            </Feature>
          </div>
          <Button className={styles.button}>Получить консультацию</Button>
        </div>
      </div>
    </div>
  )
}

export default Banner
