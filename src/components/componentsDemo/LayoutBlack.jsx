import { HeaderBlack } from "./Header";

function LayoutBlack({ children }) {
  return (
    <div>
      <HeaderBlack />
      <main>{children}</main>
    </div>
  );
}

export default LayoutBlack;