import { rankedArticles } from "../data";
import { RankedArticle } from "./RankedArticle";

export const RankedArticleList = () => {
  return (
    <ol className="ranked-articles gap-2-rem">
      {rankedArticles.map((rankedArticle) => {
        const { imageSrc, rank, headline, text } = rankedArticle;
        return (
          <RankedArticle
            imageSrc={imageSrc}
            rank={rank}
            headline={headline}
            text={text}
          />
        );
      })}
    </ol>
  );
};
