import { SvgLogo } from "./../icons";
function NavBarBranding(className, ...props) {
  return (
    <figure className="flex items-center gap-2">
      <SvgLogo className="fill-amber-300" />
      <figcaption>
        <h1 className="text-amber-300 text-2xl">Next Best Dev</h1>
      </figcaption>
    </figure>
  );
}
export default NavBarBranding;
