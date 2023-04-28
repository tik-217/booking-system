// react/next
import type { AppProps } from "next/app";
import Head from "next/head";

// styles
import "@/styles/generalStyles/globals.scss";
import { Roboto_Slab } from "next/font/google";

// antd
import arm from "antd/locale/ru_RU";
import "dayjs/locale/ru";
import { ConfigProvider } from "antd";

// store
import { Provider } from "react-redux";
import { store } from "@/store/store";

// fonts
const robotoSlab = Roboto_Slab({
  subsets: ["cyrillic"],
  weight: ["100", "300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=0.5"
        />
      </Head>
      <Provider store={store}>
        <div className={`${robotoSlab.className} `}>
          <ConfigProvider locale={arm}>
            <Component {...pageProps} />
          </ConfigProvider>
        </div>
      </Provider>
    </>
  );
}
