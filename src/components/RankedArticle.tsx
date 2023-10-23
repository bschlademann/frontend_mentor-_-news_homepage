import "./RankedArticle.css"
import { RankedArticleProps } from "../types";

export const RankedArticle = (props: RankedArticleProps) => {
  const { article, index } = props;
  const { imageSrc, imageAlt, rank, headline, text } = article;
  const paddedRank = rank.toString().padStart(2, "0");
  return (
    <li key={index}>
      <img src={imageSrc} alt={imageAlt} />
      <div>
        <div>{paddedRank}</div>
        <h3>{headline}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
};
