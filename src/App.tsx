import "./App.css";
import { HeadlineArticle } from "./components/HeadlineArticle";
import { NewArticles } from "./components/NewArticles";
import { PageHeader } from "./components/PageHeader";
import { RankedArticleList } from "./components/RankedArticleList";

function App() {
  const toggleOverlay = () => {
    const toggler = document.querySelector(".toggler");
    const overlay = document.getElementById("overlay");

    if (toggler instanceof HTMLInputElement && overlay) {
      toggler.addEventListener("change", () => {
        overlay.style.visibility = toggler.checked ? "visible" : "hidden";
      });
    } else {
      console.error("Toggler or overlay element not found.");
    }
  };

  return (
    <main className="flex-column gap-2-rem">
      <PageHeader toggleOverlay={toggleOverlay} />
      <HeadlineArticle />
      <NewArticles />
      <RankedArticleList />
    </main>
  );
}

export default App;
