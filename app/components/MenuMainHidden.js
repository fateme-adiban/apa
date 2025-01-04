import React, { useEffect } from "react"

function MenuMainHidden() {
  return (
    <body id="app-container" class="menu-main-hidden show-spinner">
      <div class="menu">
        <div class="main-menu">
          <div class="scroll">
            <ul class="list-unstyled">
              <li class="active">
                <a href="#menu">
                  <i class="iconsminds-three-arrow-fork"></i> Menu
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="sub-menu">
          <div class="scroll">
            <ul class="list-unstyled" data-link="menu" id="menuTypes">
              <li>
                <a href="#" data-toggle="collapse" data-target="#collapseMenuTypes" aria-expanded="true" aria-controls="collapseMenuTypes" class="rotate-arrow-icon">
                  <i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Menu Types</span>
                </a>
                <div id="collapseMenuTypes" class="collapse show" data-parent="#menuTypes">
                  <ul class="list-unstyled inner-level-menu">
                    <li>
                      <a href="Menu.Default.html">
                        <i class="simple-icon-control-pause"></i> <span class="d-inline-block">Default</span>
                      </a>
                    </li>
                    <li>
                      <a href="Menu.Subhidden.html">
                        <i class="simple-icon-arrow-left mi-subhidden"></i> <span class="d-inline-block">Subhidden</span>
                      </a>
                    </li>
                    <li>
                      <a href="Menu.Hidden.html">
                        <i class="simple-icon-control-start mi-hidden"></i> <span class="d-inline-block">Hidden</span>
                      </a>
                    </li>
                    <li class="active">
                      <a href="Menu.Mainhidden.html">
                        <i class="simple-icon-control-rewind mi-hidden"></i> <span class="d-inline-block">Mainhidden</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" data-toggle="collapse" data-target="#collapseMenuLevel" aria-expanded="true" aria-controls="collapseMenuLevel" class="rotate-arrow-icon collapsed">
                  <i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Menu Levels</span>
                </a>
                <div id="collapseMenuLevel" class="collapse" data-parent="#menuTypes">
                  <ul class="list-unstyled inner-level-menu">
                    <li>
                      <a href="#">
                        <i class="simple-icon-layers"></i> <span class="d-inline-block">Sub Level</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="collapse" data-target="#collapseMenuLevel2" aria-expanded="true" aria-controls="collapseMenuLevel2" class="rotate-arrow-icon collapsed">
                        <i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Another Level</span>
                      </a>
                      <div id="collapseMenuLevel2" class="collapse">
                        <ul class="list-unstyled inner-level-menu">
                          <li>
                            <a href="#">
                              <i class="simple-icon-layers"></i> <span class="d-inline-block">Sub Level</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" data-toggle="collapse" data-target="#collapseMenuDetached" aria-expanded="true" aria-controls="collapseMenuDetached" class="rotate-arrow-icon collapsed">
                  <i class="simple-icon-arrow-down"></i> <span class="d-inline-block">Detached</span>
                </a>
                <div id="collapseMenuDetached" class="collapse">
                  <ul class="list-unstyled inner-level-menu">
                    <li>
                      <a href="#">
                        <i class="simple-icon-layers"></i> <span class="d-inline-block">Sub Level</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="dont-close-menu">
                  <a href="#">
                    <i class="simple-icon-arrow-right"></i> <span class="d-inline-block">Keep Sub Open</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  )
}

export default MenuMainHidden
