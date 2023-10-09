export type RankedArticle = {
  index: number;
  imageSrc: string;
  imageAlt: string,
  rank: number;
  headline: string;
  text: string;
};

export type RankedArticleProps = RankedArticle;