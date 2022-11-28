import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import LoginButton from "./LoginButton";
function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-gray-700 via-gray-900 to-black border-b-2 px-2 py-2 flex justify-between shadow items-center">
      <NavBarBranding />
      <NavBarLinks />
      <LoginButton className="text-amber-300" />
      <MobileMenuButton />
    </nav>
  );
}
export default NavBar;
