import "./App.css";
import { RankedArticleList } from "./components/RankedArticleList";

function App() {

  const toggleOverlay = () => {
    const toggler = document.querySelector('.toggler');
    const overlay = document.getElementById('overlay');
  
    if (toggler instanceof HTMLInputElement && overlay) {
      toggler.addEventListener('change', () => {
        overlay.style.opacity = toggler.checked ? '0.4' : '0';
      });
    } else {
      console.error('Toggler or overlay element not found.');
    }
  }

  return (
    <main className="flex-column gap-2-rem">
      <div className="page-overlay" id="overlay"></div>
      <div className="page-header gap-2-rem">
        <img className="logo" src="/src/assets/images/logo.svg" alt="" />
        <nav>
          <input type="checkbox" className="toggler" onChange={toggleOverlay}/>
          <div className="hamburger">
            <div></div>
          </div>
          <div className="menu">
            <div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">New</a>
                </li>
                <li>
                  <a href="#">Popular</a>
                </li>
                <li>
                  <a href="#">Trending</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="headline-article gap-2-rem">
        <img
          className="hero-image"
          src="/src/assets/images/image-web-3-mobile.jpg"
          alt=""
        />
        <h1>The Bright Future of Web 3.0?</h1>
        <div className="gap-2-rem">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className="button">READ MORE</div>
        </div>

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
      </div>

      <RankedArticleList />
    </main>
  );
}

export default App;
