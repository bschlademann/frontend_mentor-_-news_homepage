import "./App.css";
import { HeadlineArticle } from "./components/HeadlineArticle";
import { PageHeader } from "./components/PageHeader";
import { RankedArticleList } from "./components/RankedArticleList";

function App() {
  const toggleOverlay = () => {
    const toggler = document.querySelector(".toggler");
    const overlay = document.getElementById("overlay");

    if (toggler instanceof HTMLInputElement && overlay) {
      toggler.addEventListener("change", () => {
        overlay.style.opacity = toggler.checked ? "0.4" : "0";
      });
    } else {
      console.error("Toggler or overlay element not found.");
    }
  };

  return (
    <main className="flex-column gap-2-rem">
      <PageHeader toggleOverlay={toggleOverlay} />

      <HeadlineArticle />

        <div className="new-articles gap-2-rem">
          <h2>New</h2>
          <section>
            <div>
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <hr />
            <div>
              <h3>The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <hr />
            <div>
              <h3>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </section>
        </div>

      <RankedArticleList />
    </main>
  );
}

export default App;
