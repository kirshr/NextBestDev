import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";
import { getDevelopers } from "../libs/getDevelopers";
function FullStack({ devs }) {
  return (
    <>
      {devs.map((dev) => (
        <DeveloperCard
          key={dev.uid}
          fullName={dev.fullName}
          avatar={dev.avatar}
          jobTitle={dev.jobTitle}
          experience={dev.experience}
          availability={dev.availability}
          uid={dev.uid}
        />
      ))}
    </>
  );
}
export default FullStack;
FullStack.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout
      type="Full Stack Developers"
      title="From top to bottom"
      tagline="We do it all!"
    >
      {page}
    </ContentPageLayout>
  );
};
export async function getStaticProps(content) {
  const devs = await getDevelopers();
  const fullStackDev = devs.filter((dev) => dev.type === "full stack");
  console.log(fullStackDev);
  return {
    props: {
      devs: fullStackDev,
    },
  };
}
