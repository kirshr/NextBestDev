import { DeveloperBioLayout } from "../../components/layouts";
import {
  BioHeader,
  BioNavigation,
  BioTopic,
} from "../../components/developer-bio";
import { getDevelopers } from "../../libs/getDevelopers";
import { generateRandomTitle } from "../../libs/generateRandomTitle.js";

function SingleDeveloperPage({ avatar, fullName, company, heading, ...bio }) {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <BioNavigation avatar={avatar} fullName={fullName} />
      <BioHeader company={company} fullName={fullName} heading={heading} />
      <BioTopic topic="About Me" />
    </div>
  );
}
export default SingleDeveloperPage;
export async function getStaticPaths() {
  const devs = await getDevelopers();
  const paths = devs.map((dev) => ({ params: { uid: dev.uid } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const devs = await getDevelopers();
  const dev = devs.find((dev) => dev.uid === params.uid);
  const bio = { ...dev, heading: generateRandomTitle() };

  return {
    props: bio,
  };
}
SingleDeveloperPage.getLayout = function getLayout(page) {
  return <DeveloperBioLayout>{page}</DeveloperBioLayout>;
};
