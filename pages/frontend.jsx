import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";
import { getDevelopers } from "../libs/getDevelopers";
function FrontEnd({ devs }) {
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
        />
      ))}
    </>
  );
}
export default FrontEnd;
FrontEnd.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout
      type="front-end developers"
      title="What you see is what you get"
      tagline="And what you get, is awesome!"
    >
      {page}
    </ContentPageLayout>
  );
};
export async function getStaticProps(content) {
  const devs = await getDevelopers();
  const frontEndDevs = devs.filter((dev) => dev.type === "front end");
  return {
    props: {
      devs: frontEndDevs,
    },
  };
}
