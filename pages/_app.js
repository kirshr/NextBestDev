import DefaultLayout from "./../components/layouts/DefaultLayout";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default MyApp;
