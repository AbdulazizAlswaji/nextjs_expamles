import headerStyles from '../styles/Header.module.css';



const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
        <p className={headerStyles.description}>Keep up to date  with the latest web dev</p>
      </h1>
    </div>
  )
}

export default Header
