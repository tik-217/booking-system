import "@/styles/globals.scss";
import { Lora, Merriweather, Noto_Serif } from "next/font/google";
import type { AppProps } from "next/app";
import arm from "antd/locale/ru_RU";
import "dayjs/locale/ru";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const lora = Lora({ subsets: ["cyrillic"] });
const merriweather = Merriweather({
  subsets: ["cyrillic"],
  weight: ["300", "400"],
});
const noto_serif = Noto_Serif({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  variable: "--noto_serif",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <div className={lora.className}>
    // <div className={merriweather.className}>
    <Provider store={store}>
      <div
        className={`${noto_serif.className} ${merriweather.className} ${lora.className}`}
      >
        <ConfigProvider locale={arm}>
          <Component {...pageProps} />
        </ConfigProvider>
      </div>
    </Provider>
  );
}
