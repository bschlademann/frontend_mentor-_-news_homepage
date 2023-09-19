import "./App.css";

function App() {
  return (
    <main>
      <nav>
        <img src="/src/assets/images/logo.svg" alt="" />
        {/* 
        burger menu:
        Home
        New
        Popular
        Trending
        Categories
        */}
      </nav>
      <img src="/src/assets/images/image-web-3-mobile.jpg" alt="" />
      <h1>The Bright Future of Web 3.0?</h1>
      <div>
        <section>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </section>
        <div>READ MORE</div>
      </div>

      <div className="new-articles">
        <h2>New</h2>
        <section>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr />
          <h3>The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr />
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </section>
      </div>

      <div className="articles">
        <div>
          <img src="/src/assets/images/image-retro-pcs.jpg" alt="" />
          <div>01</div>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>

        <div>
          <img src="/src/assets/images/image-top-laptops.jpg" alt="" />
          <div>02</div>
          <h3> Top 10 Laptops of 2022</h3>
          <p> Our best picks for various needs and budgets.</p>
        </div>

        <div>
          <img src="/src/assets/images/image-gaming-growth.jpg" alt="" />
          <div>03</div>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
