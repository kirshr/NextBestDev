import MobileMenuButton from "./MobileMenuButton";
import NavBarBranding from "./NavBarBranding";
import NavBarLinks from "./NavBarLinks";
import GitHubLink from "./GitHubLink";
import DeploymentLink from "./DeploymentLink";
import LoginLink from "./LoginLink";
function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-gray-700 via-gray-900 to-black border-b-2 px-2 py-2 flex justify-between shadow items-center">
      <NavBarBranding />
      <NavBarLinks />
      <div className="hidden md:flex gap-8 justify-center align-center">
        <figure className="flex flex-col items-center  ">
          <LoginLink />
          <figcaption className="text-[11px] text-cyan-50">Sign up</figcaption>
        </figure>
        <figure className="flex flex-col items-center">
          <DeploymentLink />
          <figcaption className="text-[11px] text-green-600">Deploy</figcaption>
        </figure>
        <figure className="flex flex-col items-center">
          <GitHubLink />
          <figcaption className="text-[11px] text-blue-600">GitHub</figcaption>
        </figure>
      </div>
      <MobileMenuButton />
    </nav>
  );
}
export default NavBar;
