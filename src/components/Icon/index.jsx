import cn from 'classnames'

import { ReactComponent as Telegram } from '../../assets/icons/telegram.svg'
import { ReactComponent as Viber } from '../../assets/icons/viber.svg'
import { ReactComponent as Whatsapp } from '../../assets/icons/whatsapp.svg'

import styles from './Icon.module.scss'

const iconMap = {
  telegram: Telegram,
  viber: Viber,
  whatsapp: Whatsapp,
}

const Icon = ({ iconName, className }) => {
  const Icon = iconMap[iconName]

  return <Icon className={cn(styles.icon, className)}/>
}

export default Icon
