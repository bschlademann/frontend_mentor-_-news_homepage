import "./App.css";
import { HeadlineArticle } from "./components/HeadlineArticle";
import { NewArticles } from "./components/NewArticles";
import { PageHeader } from "./components/PageHeader";
import { RankedArticleList } from "./components/RankedArticleList";
import { toggleOverlay } from "./domain";

function App() {
  return (
    <main>
      <PageHeader toggleOverlay={toggleOverlay} />
      <HeadlineArticle />
      <NewArticles />
      <RankedArticleList />
    </main>
  );
}

export default App;
