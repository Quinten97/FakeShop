import { MobileLogin } from "../components/login/MobileLogin";
import { DesktopLogin } from "../components/login/DesktopLogin";
export default function Login(props) {
  const { isMobile } = props;
  return <>{isMobile ? <MobileLogin /> : <DesktopLogin />}</>;
}
