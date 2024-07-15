import { HeaderWhite } from "./Header";
// import styles from "./Header.module.css";

function LayoutWhite({ children }) {
  return (
    <div >
      <HeaderWhite />
      <main>{children}</main>
    </div>
  );
}

export default LayoutWhite;