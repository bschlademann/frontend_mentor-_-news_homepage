import { RankedArticleProps } from "../types";

export const RankedArticle = (props: RankedArticleProps) => {
  const { imageSrc, imageAlt, rank, headline, text } = props;
  const paddedRank = rank.toString().padStart(2, "0");
  return (
    <li>
      <img src={imageSrc} alt={imageAlt} />
      <div>
        <div>{paddedRank}</div>
        <h3>{headline}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
};