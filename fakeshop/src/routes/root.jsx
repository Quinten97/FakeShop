import { DesktopNav } from "../components/Nav/DesktopNav";
import { MobileNav } from "../components/Nav/MobileNav";

export default function Root(props) {
  const { isMobile } = props;

  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>;
}
