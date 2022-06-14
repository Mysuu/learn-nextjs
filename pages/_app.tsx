import "../styles/globals.css";
import { EmptyLayOut } from "@/components/layout";
import { AppPropsWithLayout } from "@/models/index";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayOut;

  return (
    <Layout>
      <Component {...pageProps} />
      {/* chuyển trang chỉ thay đổi cái element của Component, cái Layout sẽ giữ nguyên*/}
    </Layout>
  );
}

export default MyApp;
