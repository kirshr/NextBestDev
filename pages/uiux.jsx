import ContentPageLayout from "../components/layouts/ContentPageLayout";
import DeveloperCard from "../components/developers/DeveloperCard";
import { getDevelopers } from "../libs/getDevelopers";
function UiUxPage({ ui }) {
  return (
    <>
      {ui.map((dev) => (
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

export default UiUxPage;
UiUxPage.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout
      type="ui-ux developers"
      title="Design and Usability"
      tagline="We make it, we break it, we test it"
    >
      {page}
    </ContentPageLayout>
  );
};
export async function getStaticProps(content) {
  const devs = await getDevelopers();
  const uiDevs = devs.filter((dev) => dev.type === "ui ux");
  return {
    props: {
      ui: uiDevs,
    },
  };
}
