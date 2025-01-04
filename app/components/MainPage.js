import React, { useEffect } from "react"

function MainPage() {
  return (
    <>
      <body className="show-spinner no-footer">
        <div className="landing-page">
          <div className="mobile-menu">
            <a href="#home" className="logo-mobile scrollTo">
              <span></span>
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#features" className="scrollTo">
                  FEATURES
                </a>
              </li>
              <li className="nav-item">
                <a href="#layouts" className="scrollTo">
                  LAYOUTS
                </a>
              </li>
              <li className="nav-item">
                <a href="#components" className="scrollTo">
                  COMPONENTS
                </a>
              </li>
              <li className="nav-item">
                <a href="#apps" className="scrollTo">
                  APPS
                </a>
              </li>
              <li className="nav-item">
                <a href="#themes" className="scrollTo">
                  THEMES
                </a>
              </li>
              <li className="nav-item">
                <div className="separator"></div>
              </li>
              <li className="nav-item pl-4">
                <a className="btn btn-outline-semi-light btn-sm pr-4 pl-4" target="_top" href="https://1.envato.market/5kAb">
                  BUY
                </a>
              </li>
            </ul>
          </div>

          <div className="main-container">
            <nav className="landing-page-nav">
              <div className="container d-flex align-items-center justify-content-between">
                <a className="navbar-logo pull-left scrollTo" href="#home">
                  <span className="white"></span>
                  <span className="dark"></span>
                </a>
                <ul className="navbar-nav d-none d-lg-flex flex-row">
                  <li className="nav-item">
                    <a href="#features" className="scrollTo">
                      FEATURES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#layouts" className="scrollTo">
                      LAYOUTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#components" className="scrollTo">
                      COMPONENTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#apps" className="scrollTo">
                      APPS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#themes" className="scrollTo">
                      THEMES
                    </a>
                  </li>
                  <li className="nav-item pl-4">
                    <a className="btn btn-outline-semi-light btn-sm pr-4 pl-4" target="_top" href="https://1.envato.market/5kAb">
                      BUY
                    </a>
                  </li>
                </ul>
                <a href="#" className="mobile-menu-button">
                  <i className="simple-icon-menu"></i>
                </a>
              </div>
            </nav>

            <div className="content-container" id="home">
              <div className="section home">
                <div className="container">
                  <div className="row home-row">
                    <div className="col-12 d-block d-md-none">
                      <a target="_blank" href="/Dashboard.Default.html">
                        <img alt="mobile hero" className="mobile-hero" src="img/landing-page/home-hero-mobile.png" />
                      </a>
                    </div>

                    <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                      <div className="home-text">
                        <div className="display-1">
                          MAGIC IS IN <br />
                          THE DETAILS
                        </div>
                        <p className="white mb-5">
                          Dore is the combination of good design, quality code and attention for details.
                          <br />
                          <br />
                          We used same design language for components, layouts, apps and other parts of the template. <br />
                          <br />
                          Hope you enjoy it!
                        </p>
                        <a className="btn btn-secondary btn-xl mr-2 mb-2" target="_blank" href="/Dashboard.Default.html">
                          VIEW NOW <i className="simple-icon-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6  d-none d-md-block">
                      <a target="_blank" href="/Dashboard.Default.html">
                        <img alt="hero" src="img/landing-page/home-hero.png" />
                      </a>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 p-0">
                      <div className="owl-container">
                        <div className="owl-carousel home-carousel">
                          <div className="card">
                            <div className="card-body text-center">
                              <div>
                                <i className="iconsminds-mouse-3 large-icon"></i>
                                <h5 className="mb-3 font-weight-semibold">Right Click Menu</h5>
                              </div>
                              <div>
                                <p className="detail-text">Increases overall usability of the project by providing additional actions menu.</p>
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card-body text-center">
                              <div>
                                <i className="iconsminds-electric-guitar large-icon"></i>
                                <h5 className="mb-3 font-weight-semibold">Video Player</h5>
                              </div>
                              <div>
                                <p className="detail-text">Carefully themed multimedia players powered by Video.js library with Youtube support.</p>
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card-body text-center">
                              <div>
                                <i className="iconsminds-keyboard large-icon"></i>
                                <h5 className="mb-3 font-weight-semibold">Keyboard Shortcuts</h5>
                              </div>
                              <div>
                                <p className="detail-text">Easily configurable keyboard shortcuts plugin that highly improves user experience.</p>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-body text-center">
                              <div>
                                <i className="iconsminds-three-arrow-fork large-icon"></i>
                                <h5 className="mb-3 font-weight-semibold">Two Panels Menu</h5>
                              </div>
                              <div>
                                <p className="detail-text">Three states two panels icon menu that looks good, auto resizes and does the job well.</p>
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card-body text-center">
                              <div>
                                <i className="iconsminds-deer large-icon"></i>
                                <h5 className="mb-3 font-weight-semibold">Icons Mind</h5>
                              </div>
                              <div>
                                <p className="detail-text">1040 icons in 53 different categories, designed pixel perfect and ready for your project.</p>
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card-body text-center">
                              <div>
                                <i className="iconsminds-palette large-icon"></i>
                                <h5 className="mb-3 font-weight-semibold">20 Color Schemes</h5>
                              </div>
                              <div>
                                <p className="detail-text">Colors, icons and design harmony that creates excellent themes to cover entire project.</p>
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card-body text-center">
                              <div>
                                <i className="iconsminds-air-balloon-1 large-icon"></i>
                                <h5 className="mb-3 font-weight-semibold">4 Applications</h5>
                              </div>
                              <div>
                                <p className="detail-text">Applications that mostly made of components are the way to get started to create something similar.</p>
                              </div>
                            </div>
                          </div>

                          <div className="card">
                            <div className="card-body text-center">
                              <div>
                                <i className="iconsminds-resize large-icon"></i>
                                <h5 className="mb-3 font-weight-semibold">Extra Responsive</h5>
                              </div>
                              <div>
                                <p className="detail-text">Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <a className="btn btn-circle btn-outline-semi-light hero-circle-button scrollTo" href="#features" id="homeCircleButton">
                      <i className="simple-icon-arrow-down"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="container" id="features">
                  <div className="row">
                    <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                      <h1>Features At a Glance</h1>
                      <p>We tried to create an admin theme that we would like to use ourselves so we listed our priorities. We would like to have a theme that is not over complicated to use, does the job well, contains must have components and looks really nice.</p>
                    </div>
                  </div>

                  <div className="row feature-row">
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                      <div className="d-flex">
                        <div className="feature-icon-container">
                          <div className="icon-background">
                            <i className="fas fa-fw fa-ban"></i>
                          </div>
                        </div>
                        <div className="feature-text-container">
                          <h2>Pleasant Design</h2>
                          <p>
                            As a web developer we enjoy to work on something looks nice. It is not an absolute necessity but it really motivates us that final product will look good for user point of view. <br />
                            <br />
                            So we put a lot of work into colors, icons, composition and design harmony. Themed components and layouts with same design language. <br />
                            <br />
                            We kept user experience principles always at the heart of the design process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative">
                      <div className="background-item-1"></div>
                      <img alt="feature" className="feature-image-right feature-image-charts position-relative" src="img/landing-page/features/plesant-design.png" />
                    </div>
                  </div>

                  <div className="row feature-row">
                    <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                      <img alt="feature" className="feature-image-left feature-image-charts" src="img/landing-page/features/extra-responsive.png" />
                    </div>

                    <div className="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2">
                      <div className="d-flex">
                        <div className="feature-icon-container">
                          <div className="icon-background">
                            <i className="fas fa-fw fa-ban"></i>
                          </div>
                        </div>
                        <div className="feature-text-container">
                          <h2>Extra Responsive</h2>
                          <p>
                            Xxs breakpoint is for smaller screens that has a resolution lower than 420px. Xs works between 576px and 420px. Xxl breakpoint is for larger screens that has a resolution higher than 1440px. Xl works between 1200px and 1440px.
                            {/* <br>
                      <br> */}
                            With this approach we were able to create better experiences for smaller and larger screens.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row feature-row">
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                      <div className="d-flex">
                        <div className="feature-icon-container">
                          <div className="icon-background">
                            <i className="fas fa-fw fa-ban"></i>
                          </div>
                        </div>
                        <div className="feature-text-container">
                          <h2>Superfine Charts</h2>
                          <p>
                            Using charts is a good way to visualize data but they often look ugly and break the rhythm of design. <br />
                            <br />
                            We concentrated on a single chart library and tried to create charts that look good with color, opacity, border and shadow. <br />
                            <br />
                            Used certain plugins and created some to make charts even more useful and beautiful.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 ">
                      <img alt="feature" className="feature-image-right feature-image-charts" src="img/landing-page/features/superfine-charts.png" />
                    </div>
                  </div>

                  <div className="row feature-row">
                    <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                      <img alt="feature" className="feature-image-left feature-image-charts" src="img/landing-page/features/layouts-for-the-job.png" />
                    </div>

                    <div className="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2">
                      <div className="d-flex">
                        <div className="feature-icon-container">
                          <div className="icon-background">
                            <i className="fas fa-fw fa-ban"></i>
                          </div>
                        </div>
                        <div className="feature-text-container">
                          <h2>Layouts for the Job</h2>
                          <p>
                            Layouts are the real thing, they need to be accurate and right for the job. They should be functional for both user and developer. <br />
                            <br />
                            We created lots of different layouts for different jobs.
                            <br />
                            <br />
                            Listing pages with view mode changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication and error layouts which has a different design than the other pages were our main focus. We also created details page with tabs that can hold many components.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row feature-row">
                    <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                      <div className="d-flex">
                        <div className="feature-icon-container">
                          <div className="icon-background">
                            <i className="fas fa-fw fa-ban"></i>
                          </div>
                        </div>
                        <div className="feature-text-container">
                          <h2>Smart Menu</h2>
                          <p>
                            Instead of good old single panel menus with accordion structure that looks over complicated, we created 2 panels and categorized pages accordingly.
                            {/* <br>
                      <br> */}
                            The default menu auto hides sub panel when resolution is under some breakpoint to open some space. You may also hide menu completely or use only main panel open only.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 ">
                      <img alt="feature" className="feature-image-right feature-image-charts" src="img/landing-page/features/smart-menu.png" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="section background">
                <div className="container" id="layouts">
                  <div className="row">
                    <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                      <h1>Structures & Layouts</h1>
                      <p>
                        We did our best to create layouts for various needs that developers might have and best experience for users.
                        {/* <br> */}
                        They are clean and slick. They function well and look good at the same time.
                      </p>
                    </div>
                  </div>

                  <div className="row pt-5">
                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/menu-default.jpg" />
                      <h4 className="text-center">Menu Default</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/menu-subhidden.jpg" />
                      <h4 className="text-center">Menu Subhidden</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/menu-hidden.jpg" />
                      <h4 className="text-center">Menu Hidden</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/image-list.jpg" />
                      <h4 className="text-center">Image List</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/thumb-list.jpg" />
                      <h4 className="text-center">Thumb List</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/data-list.jpg" />
                      <h4 className="text-center">Data List</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/details.jpg" />
                      <h4 className="text-center">Details</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5 semi-rounded">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/authentication.jpg" />
                      <h4 className="text-center">Authentication</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/search-result.jpg" />
                      <h4 className="text-center">Search Results</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/spa.jpg" />
                      <h4 className="text-center">Single Page Application</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded" src="img/landing-page/layouts/data-list-app-menu-hidden.jpg" />
                      <h4 className="text-center">Data List App Menu Hidden</h4>
                    </div>

                    <div className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5">
                      <img className="img-fluid border-radius depth-2 mb-3 semi-rounded " src="img/landing-page/layouts/tabs.jpg" />
                      <h4 className="text-center">Tabs</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section mb-0">
                <div className="container" id="components">
                  <div className="row mb-5">
                    <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                      <h1>Components</h1>
                      <p>
                        We used most popular and well managed open source components with bootstrap components. Combined them into even more useful ones. Themed them with same design principles and created a design harmony between components and layouts.
                        {/* <br>
                  <br> */}
                        From carousels to charts, switches to list we tried to provide components that we like to use on our development processes.
                      </p>
                    </div>
                  </div>
                </div>
                <img className="components-image mb-5 pb-5" src="img/landing-page/components.jpg" />
              </div>

              <div className="section background">
                <div className="container" id="apps">
                  <div className="row">
                    <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center mb-4">
                      <h1>Applications</h1>

                      <p className="section-text">
                        With the help of components and layouts, we created four different applications. They are a good way to get you started if you want to build something similar.
                        {/* <br> */}
                      </p>
                    </div>
                  </div>

                  <div className="row screenshots">
                    <div className="col-12 text-center mb-4">
                      <ul className="nav nav-tabs justify-content-center mb-4" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" data-toggle="tab" href="#library" role="tab">
                            <p>Library</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" data-toggle="tab" href="#survey" role="tab">
                            <p>Survey</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" data-toggle="tab" href="#chat" role="tab">
                            <p>Chat</p>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" data-toggle="tab" href="#todo" role="tab">
                            <p>Todo</p>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade show active justify-content-center" id="library" role="tabpanel">
                          <a target="_blank" href="/Apps.MediaLibrary.html">
                            <img alt="app image" className="app-image" src="img/landing-page/applications/library.jpg" />
                          </a>
                        </div>
                        <div className="tab-pane fade justify-content-center" id="survey" role="tabpanel">
                          <a target="_blank" href="/Apps.Survey.List.html">
                            <img alt="app image" className="app-image" src="img/landing-page/applications/survey.jpg" />
                          </a>
                        </div>
                        <div className="tab-pane fade justify-content-center" id="chat" role="tabpanel">
                          <a target="_blank" href="/Apps.Chat.html">
                            <img alt="app image" className="app-image" src="img/landing-page/applications/chat.jpg" />
                          </a>
                        </div>
                        <div className="tab-pane fade justify-content-center" id="todo" role="tabpanel">
                          <a target="_blank" href="/Apps.Todo.List.html">
                            <img alt="app image" className="app-image" src="img/landing-page/applications/todo.jpg" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section mb-0">
                <div className="container" id="themes">
                  <div className="row mb-5">
                    <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                      <h1>Themes</h1>
                      <p>We carefully choosed colors and created 10 different themes with dark and light versions. You may also create your own themes easily since all the theme related styling is managed by Sass variables.</p>
                    </div>
                  </div>

                  <div className="row pt-3">
                    <div className="col-12 text-center mb-3">
                      <h4 className="text-center">Navy Blue</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left bluenavy-light-1"></div>
                        <div className="color-center bluenavy-light-2"></div>
                        <div className="color-right bluenavy-light-3"></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left bluenavy-dark-1"></div>
                        <div className="color-center bluenavy-dark-2"></div>
                        <div className="color-right bluenavy-dark-3"></div>
                      </div>
                    </div>
                    <div className="col-12 mb-5"></div>

                    <div className="col-12 text-center mb-3">
                      <h4 className="text-center">Olympic Blue</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left blueolympic-light-1"></div>
                        <div className="color-center blueolympic-light-2"></div>
                        <div className="color-right blueolympic-light-3"></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left blueolympic-dark-1"></div>
                        <div className="color-center blueolympic-dark-2"></div>
                        <div className="color-right blueolympic-dark-3"></div>
                      </div>
                    </div>
                    <div className="col-12 mb-5"></div>

                    <div className="col-12 text-center mb-3">
                      <h4 className="text-center">Yale Blue</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left blueyale-light-1"></div>
                        <div className="color-center blueyale-light-2"></div>
                        <div className="color-right blueyale-light-3"></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left blueyale-dark-1"></div>
                        <div className="color-center blueyale-dark-2"></div>
                        <div className="color-right blueyale-dark-3"></div>
                      </div>
                    </div>
                    <div className="col-12 mb-5"></div>

                    <div className="col-12 text-center mb-3">
                      <h4 className="text-center">Moss Green</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left greenmoss-light-1"></div>
                        <div className="color-center greenmoss-light-2"></div>
                        <div className="color-right greenmoss-light-3"></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left greenmoss-dark-1"></div>
                        <div className="color-center greenmoss-dark-2"></div>
                        <div className="color-right greenmoss-dark-3"></div>
                      </div>
                    </div>
                    <div className="col-12 mb-5"></div>

                    <div className="col-12 text-center mb-3">
                      <h4 className="text-center">Lime Green</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left greenlime-light-1"></div>
                        <div className="color-center greenlime-light-2"></div>
                        <div className="color-right greenlime-light-3"></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left greenlime-dark-1"></div>
                        <div className="color-center greenlime-dark-2"></div>
                        <div className="color-right greenlime-dark-3"></div>
                      </div>
                    </div>
                    <div className="col-12 mb-5"></div>

                    <div className="col-12 text-center mb-3">
                      <h4 className="text-center">Carrot Orange</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left carrotorange-light-1"></div>
                        <div className="color-center carrotorange-light-2"></div>
                        <div className="color-right carrotorange-light-3"></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left carrotorange-dark-1"></div>
                        <div className="color-center carrotorange-dark-2"></div>
                        <div className="color-right carrotorange-dark-3"></div>
                      </div>
                    </div>
                    <div className="col-12 mb-5"></div>

                    <div className="col-12 text-center mb-3">
                      <h4 className="text-center">Ruby Red</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left rubyred-light-1"></div>
                        <div className="color-center rubyred-light-2"></div>
                        <div className="color-right rubyred-light-3"></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left rubyred-dark-1"></div>
                        <div className="color-center rubyred-dark-2"></div>
                        <div className="color-right rubyred-dark-3"></div>
                      </div>
                    </div>
                    <div className="col-12 mb-5"></div>

                    <div className="col-12 text-center mb-3">
                      <h4 className="text-center">Monster Purple</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left monsterpurple-light-1"></div>
                        <div className="color-center monsterpurple-light-2"></div>
                        <div className="color-right monsterpurple-light-3"></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left monsterpurple-dark-1"></div>
                        <div className="color-center monsterpurple-dark-2"></div>
                        <div className="color-right monsterpurple-dark-3"></div>
                      </div>
                    </div>
                    <div className="col-12 mb-5"></div>

                    <div className="col-12 text-center mb-3">
                      <h4 className="text-center">Steel Grey</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left steelgrey-light-1"></div>
                        <div className="color-center steelgrey-light-2"></div>
                        <div className="color-right steelgrey-light-3"></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left steelgrey-dark-1"></div>
                        <div className="color-center steelgrey-dark-2"></div>
                        <div className="color-right steelgrey-dark-3"></div>
                      </div>
                    </div>
                    <div className="col-12 mb-5"></div>

                    <div className="col-12 text-center mb-3">
                      <h4 className="text-center">Granola Yellow</h4>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left granolayellow-light-1"></div>
                        <div className="color-center granolayellow-light-2"></div>
                        <div className="color-right granolayellow-light-3"></div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                      <div className="depth-2 color-container">
                        <div className="color-left granolayellow-dark-1"></div>
                        <div className="color-center granolayellow-dark-2"></div>
                        <div className="color-right granolayellow-dark-3"></div>
                      </div>
                    </div>
                    <div className="col-12 mb-5"></div>
                    <div className="col-12 mb-5"></div>
                  </div>
                </div>
              </div>

              <div className="section background background-no-bottom mb-0 pb-0">
                <div className="container">
                  <div className="row">
                    <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                      <h1>Enjoying so Far?</h1>
                      <p>Purchase Dore to get a fresh start with your new project.</p>
                    </div>

                    <div className="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                      <div className="text-center mb-3">
                        <a className="btn btn-secondary btn-xl" target="_top" href="https://1.envato.market/5kAb">
                          BUY NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section footer mb-0">
                <div className="container">
                  <div className="row footer-row">
                    <div className="col-12 text-right">
                      <a className="btn btn-circle btn-outline-semi-light footer-circle-button scrollTo" href="#home" id="footerCircleButton">
                        <i className="simple-icon-arrow-up"></i>
                      </a>
                    </div>
                    <div className="col-12 text-center footer-content">
                      <a href="#home" className="scrollTo">
                        <img className="footer-logo" alt="footer logo" src="logos/white-full.svg" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="separator mt-5"></div>
                <div className="container copyright pt-5 pb-5">
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="col-12 text-center">
                      <p className="mb-0">2020 © ColoredStrategies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  )
}

export default MainPage
