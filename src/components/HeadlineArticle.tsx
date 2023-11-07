import "./HeadlineArticle.css";
export const HeadlineArticle = () => {
  return (
    <div className="headline-article">
  <img
  className="hero-image"
  srcSet="./images/image-web-3-mobile.jpg 686w, ./images/image-web-3-desktop.jpg 1460w"
  sizes="(max-width: 1149px) 686px, 1460px"
  src="./images/logo.svg"
  alt=""
/>

      <h1>The Bright Future of Web 3.0?</h1>
      <div>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <div className="button">READ MORE</div>
      </div>
    </div>
  );
};
