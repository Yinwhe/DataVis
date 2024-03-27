import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Contents } from "./components/contents";

export default function Home() {
  return (
    <body id="body" className="visual-intro-active">
      <Header />
      <Contents />
      <div id="source_popup"></div>
    </body>
  );
}
