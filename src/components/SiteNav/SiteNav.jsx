import { navigate } from '../../lib/navigation.js'
import styles from './SiteNav.module.css'

const TABS = [
  { path: '/', label: 'Home' },
  { path: '/showcase', label: 'Shiny Showcase' },
  { href: 'https://index.teamhorde.com/', label: 'Index' },
]

export default function SiteNav({ active }) {
  return (
    <nav className={styles.nav}>
      {TABS.map((tab) => {
        const className = `${styles.tab} ${active === tab.path ? styles.tabActive : ''}`

        return tab.href ? (
          <a key={tab.href} className={className} href={tab.href}>
            {tab.label}
          </a>
        ) : (
          <button
            key={tab.path}
            type="button"
            className={className}
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}
