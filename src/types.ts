export type RankedArticle = {
  imageSrc: string;
  imageAlt: string;
  rank: number;
  headline: string;
  text: string;
};

export type RankedArticleProps = { article: RankedArticle; index: number };

export type PageHeaderProps = {
  toggleOverlay: () => void;
};
