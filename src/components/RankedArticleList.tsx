import { rankedArticles } from "../data";
import { RankedArticle } from "./RankedArticle";

export const RankedArticleList = () => {
  return (
    <ol className="ranked-articles gap-2-rem">
      {rankedArticles.map((article, index) => {
        const { imageSrc, imageAlt, rank, headline, text } = article;
        return (
          <RankedArticle
            index={index}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            rank={rank}
            headline={headline}
            text={text}
          />
        );
      })}
    </ol>
  );
};
