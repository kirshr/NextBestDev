import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";
import { getDevelopers } from "../libs/getDevelopers";
function Backend({ devs }) {
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
export default Backend;
Backend.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout
      type="backend developers"
      title="In the shadows we code"
      tagline="So in the light, you can enjoy"
    >
      {page}
    </ContentPageLayout>
  );
};
export async function getStaticProps(content) {
  const devs = await getDevelopers();
  const backEnd = devs.filter((dev) => dev.type === "back end");
  return {
    props: {
      devs: backEnd,
    },
  };
}
