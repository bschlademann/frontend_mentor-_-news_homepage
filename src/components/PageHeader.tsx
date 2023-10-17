import { PageHeaderProps } from "../types";


export const PageHeader = (props: PageHeaderProps) => {
    const {toggleOverlay} = props;
  return (
    <>
      <div className="page-overlay" id="overlay"></div>
      <div className="page-header">
        <img className="logo" src="/src/assets/images/logo.svg" alt="" />
        <nav>
          <input type="checkbox" className="toggler" onChange={toggleOverlay} />
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
    </>
  );
};
