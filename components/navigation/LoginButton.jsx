import Link from "next/link";

function LoginButton({ className, ...props }) {
  return (
    <Link
      href="signin"
      className={`hidden md:flex md:justify-end text-amber-300 px-2 w-[188.3px]`}
    >
      Login
    </Link>
  );
}
export default LoginButton;
