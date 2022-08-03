import styles from "./Header.module.css";
import accountImg from "./account.svg";
import Logo from "./Logo";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.headerDataContainer}>
        <ul>
          <li>
            <a href="#" className={styles.logo}>
              <Logo />
            </a>
          </li>
          <li>
            <a href="#">Каталог</a>
          </li>
          <li>
            <a href="#">Акції</a>
          </li>
          <li>
            <a href="#">Магазини</a>
          </li>
          <li>
            <a href="tel:#">
              <i class="fa-solid fa-phone"></i> 0 800 888 888
            </a>
          </li>
          <li>
            <a href="#">
              <img src={accountImg} alt="Your account" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
