import cn from 'classnames'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header className={styles._container}/>
          <section className={cn(styles.content, styles._container)}>
            <Banner className={styles.banner}/>
          </section>
          <Footer className={styles._container}/>
        </div>
      </div>
    </div>
  )
}

export default Home
