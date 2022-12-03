import ContentPageLayout from "../components/layouts/ContentPageLayout";
function UiUxPage() {
  return <p>UI UX Page</p>;
}

export default UiUxPage;
UiUxPage.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout type='ui-ux developers' title='The Next Big Thing' tagline="Reusability is our design language">
      {page}
    </ContentPageLayout>
  )
}