import "./App.css";

function App() {
  return (
    <main className="flex-column gap-2-rem">
      <div className="page-header gap-2-rem">
        <img className="logo" src="/src/assets/images/logo.svg" alt="" />
        {/* <nav>
          <a href="">Home</a>
          <a href="">New</a>
          <a href="">Popular</a>
          <a href="">Trending</a>
          <a href="">Categories</a>
        </nav> */}
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

      <ol className="ranked-articles gap-2-rem">
        <li>
          <img src="/src/assets/images/image-retro-pcs.jpg" alt="" />
          <div>
            <div>01</div>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </li>

        <li>
          <img src="/src/assets/images/image-top-laptops.jpg" alt="" />
          <div>
            <div>02</div>
            <h3> Top 10 Laptops of 2022</h3>
            <p> Our best picks for various needs and budgets.</p>
          </div>
        </li>

        <li>
          <img src="/src/assets/images/image-gaming-growth.jpg" alt="" />
          <div>
            <div>03</div>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </li>
      </ol>
    </main>
  );
}

export default App;
