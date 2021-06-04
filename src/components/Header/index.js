import Link from 'next/link';
import styles from './header.module.css';
import { useRouter } from 'next/router';

const navItems = [
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/products',
    label: 'Products',
  },
  {
    path: '/blog',
    label: 'Blog',
  },
];

const Header = ({ bgImage }) => {
  
  const router = useRouter();

  return (
    <header
        className={styles.header}
        style={bgImage && { backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles['header-wrapper']}>
        <Link href='/'>
          <a className={styles['header-logo']}>UP</a>
        </Link>
        <nav className={styles['header-nav']}>
          {navItems.map(({ path, label }) => (
            <Link key={path} href={path}>
              <a
                className={`${styles['header-link']} ${
                  router && router.pathname.includes(path)
                    ? styles['header-link-active']
                    : ''
                }`}
              >
                {label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;