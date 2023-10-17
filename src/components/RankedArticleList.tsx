import { rankedArticles } from "../data";
import { RankedArticle } from "./RankedArticle";

export const RankedArticleList = () => {
  return (
    <ol className="ranked-articles">
      {rankedArticles.map((article, index) => {
        return <RankedArticle article={article} index={index} />;
      })}
    </ol>
  );
};
