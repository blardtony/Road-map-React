import {NavLink} from "react-router-dom";

const Header = () => {
  return(
    <header>
      <NavLink to="/" className={({isActive}) => {
        return isActive ? "active" : "";
      }}>
        Home
      </NavLink>
      <NavLink to="/counter" className={({isActive}) => {
        return isActive ? "active" : "";
      }}>
        Counter
      </NavLink>
      <NavLink to="/accordion" className={({isActive}) => {
        return isActive ? "active" : "";
      }}>
        Accordion
      </NavLink>
      <NavLink to="/list" className={({isActive}) => {
        return isActive ? "active" : "";
      }}>
        List
      </NavLink>
      <NavLink to="/subscription" className={({isActive}) => {
        return isActive ? "active" : "";
      }}>
        Subscription
      </NavLink>
    </header>
  )
}

export default Header;