import Link from "next/link";
import { GitHubIcon } from "./../icons/";
function GitHubLink() {
  return (
    <Link
      href="https://github.com/kirshr/NextBestDev"
      passHref={true}
      target="_blank"
    >
      {" "}
      <GitHubIcon />
    </Link>
  );
}

export default GitHubLink;
