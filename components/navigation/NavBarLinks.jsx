import Link from "next/link";
function NavBarLinks() {
  return (
    <ul className=" hidden  md:flex gap-4 text-amber-300 font-bold  text-sm uppercase px-2  ">
      <li>
        <Link href="/">home</Link>
      </li>
      <li>
        <Link href="/frontend">front end</Link>
      </li>
      <li>
        <Link href="/uiux">ui/ux</Link>
      </li>
      <li>
        <Link href="/fullstack">full stack</Link>
      </li>
      <li>
        <Link href="/backend">back end</Link>
      </li>
    </ul>
  );
}

export default NavBarLinks;
