import React from "react";
import menuItems from "../data/menuItems.json";

const App = () => {
  return (
    <>
      <header>
        <div className="container">
          <input type="checkbox" name="check" id="check" />

          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                {menuItems.map((menuItem, index) => (
                  <li key={index} className="nav-link" style={{ "--i": `.${index + 1}s` }}>
                    {menuItem && menuItem.label && menuItem.link ? (
                      <a href={menuItem.link}>
                        {menuItem.label}
                        {menuItem.submenu && menuItem.submenu.length > 0 && (
                          <i className="fas fa-caret-down"></i>
                        )}
                      </a>
                    ) : null}
                    {menuItem.submenu && menuItem.submenu.length > 0 && (
                      <div className="dropdown">
                        <ul>
                          {menuItem.submenu.map((subMenuItem, subIndex) => (
                            <li key={subIndex} className="dropdown-link">
                              {subMenuItem && subMenuItem.label && subMenuItem.link ? (
                                <a href={subMenuItem.link}>{subMenuItem.label}</a>
                              ) : null}
                              {subMenuItem.submenu && subMenuItem.submenu.length > 0 && (
                                <>
                                  <i className="fas fa-caret-down"></i>
                                  <div className="dropdown second">
                                    <ul>
                                      {subMenuItem.submenu.map((thirdMenuItem, thirdIndex) => (
                                        <li key={thirdIndex} className="dropdown-link">
                                          {thirdMenuItem && thirdMenuItem.label && thirdMenuItem.link ? (
                                            <a href={thirdMenuItem.link}>{thirdMenuItem.label}</a>
                                          ) : null}
                                        </li>
                                      ))}
                                      <div className="arrow"></div>
                                    </ul>
                                  </div>
                                </>
                              )}
                            </li>
                          ))}
                          <div className="arrow"></div>
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="log-sign" style={{ "--i": "1.8s" }}>
              <a href="/" className="btn transparent">
                Book
              </a>
            </div>
          </div>

          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="overlay"></div>
        </section>
      </main>
    </>
  );
};

export default App;
