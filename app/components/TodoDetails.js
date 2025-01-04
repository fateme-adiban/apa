import React, { useEffect } from "react"
import AppMenu from "./AppMenu"
import Page from "./Page"
import Menu from "./Menu"

function TodoDetails() {
  return (
    <>
      {/* "menu-sub-hidden show-spinner right-menu" */}
      <Page title="Todo Details" menuSubHidden={true} rightMenu={true}>
        <Menu activeApplications="active" />
        <main>
          <div className="container-fluid">
            <div className="row app-row">
              <div className="col-12" data-check-all="checkAll">
                <div className="mb-2">
                  <h1>
                    <i className="simple-icon-refresh heading-icon"></i>
                    <span className="align-middle d-inline-block pt-1">Creating Wireframes</span>
                  </h1>
                  <div className="float-md-right">
                    <button type="button" className="btn btn-lg btn-outline-primary dropdown-toggle dropdown-toggle-split top-right-button top-right-button-single" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      ACTIONS
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </div>
                  </div>
                </div>

                <ul className="nav nav-tabs separator-tabs ml-0 mb-5" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">
                      DETAILS
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link " id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third" aria-selected="false">
                      CONTRIBUTIONS
                    </a>
                  </li>
                </ul>
                <div className="tab-content mb-4">
                  <div className="tab-pane show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                    <div className="row">
                      <div className="col-lg-4 col-12 mb-4">
                        <div className="card mb-4">
                          <div className="position-absolute card-top-buttons">
                            <button className="btn btn-header-light icon-button">
                              <i className="simple-icon-pencil"></i>
                            </button>
                          </div>
                          <div className="card-body">
                            <p className="list-item-heading mb-4">Summary</p>
                            <p className="text-muted text-small mb-2">Info</p>
                            <p className="mb-3">
                              Creating a wireframe will be the first step in the development process and it’s one that should not be treated lightly. If we are able to properly define a wireframe for our project, then we can share it with your entire.
                              <br></br>
                              <br></br>Development team and we can benefit from their feedback and ideas and work towards refining our final product.
                            </p>

                            <p className="text-muted text-small mb-2">Date</p>
                            <p className="mb-3">12.05.2018 - 18.05.2018</p>
                            <p className="text-muted text-small mb-2">Asigned To</p>
                            <div className="mb-3">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Sarah Kortney">
                                <img alt="Profile Picture" src="img/profiles/l-1.jpg" className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall" />
                              </a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Latarsha Gama">
                                <img alt="Profile Picture" src="img/profiles/l-4.jpg" className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall" />
                              </a>
                            </div>
                            <p className="text-muted text-small mb-2">Labels</p>
                            <div>
                              <p className="d-sm-inline-block mb-1">
                                <a href="#">
                                  <span className="badge badge-pill badge-outline-theme-3 mb-1">EDUCATION</span>
                                </a>
                              </p>
                              <p className="d-sm-inline-block  mb-1">
                                <a href="#">
                                  <span className="badge badge-pill badge-outline-secondary mb-1">PERSONAL</span>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body d-flex justify-content-between align-items-center">
                            <h6 className="mb-0">Project Status</h6>
                            <div role="progressbar" className="progress-bar-circle position-relative" data-color="#922c88" data-trailcolor="#d7d7d7" aria-valuemax="100" aria-valuenow="40" data-show-percent="true"></div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-8">
                        <div className="card">
                          <div className="position-absolute card-top-buttons">
                            <button className="btn btn-header-light icon-button">
                              <i className="simple-icon-refresh"></i>
                            </button>
                          </div>
                          <div className="card-body">
                            <p className="list-item-heading mb-4">Process</p>

                            <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                              <a href="#">
                                <img alt="Profile Picture" src="img/profiles/l-1.jpg" className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall" />
                              </a>
                              <div className="pl-3">
                                <a href="#">
                                  <p className="font-weight-medium mb-2">Joisse Kaycee</p>
                                  <p className="text-semi-muted mb-1">Of course you want a great mobile UX, but do you know what UX actually is?</p>
                                  <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                </a>
                              </div>
                            </div>
                            <div className="d-flex flex-row mb-3 pb-3 border-bottom ">
                              <a href="#">
                                <img alt="Profile Picture" src="img/profiles/l-4.jpg" className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall" />
                              </a>
                              <div className="pl-3">
                                <a href="#">
                                  <p className="font-weight-medium mb-2">Williemae Lagasse</p>
                                  <p className="text-semi-muted mb-1">Now you’ve defined what you want to do and what it involves. You have a clear destination in mind.</p>
                                  <p className="text-muted mb-0 text-small">04.04.2018 - 01:45</p>
                                </a>
                              </div>
                            </div>

                            <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                              <a href="#">
                                <img alt="Profile Picture" src="img/profiles/l-7.jpg" className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall" />
                              </a>
                              <div className="pl-3">
                                <a href="#">
                                  <p className="font-weight-medium mb-2">Laree Munsch</p>
                                  <p className="text-semi-muted mb-1">Creating a wireframe will be the first step in the development process and it’s one that should not be treated lightly.</p>
                                  <p className="text-muted mb-0 text-small">15.08.2018 - 14:12</p>
                                </a>
                              </div>
                            </div>
                            <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                              <a href="#">
                                <img alt="Profile Picture" src="img/profiles/l-6.jpg" className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall" />
                              </a>
                              <div className="pl-3">
                                <a href="#">
                                  <p className="font-weight-medium mb-2">Latarsha Gama</p>
                                  <p className="text-semi-muted mb-1">Without a wireframe, you’ll end up lost and with digital writer’s block. This is how you’ll figure out what works and what doesn’t early on in the process.</p>
                                  <p className="text-muted mb-0 text-small">18.09.2018 - 02:50</p>
                                </a>
                              </div>
                            </div>
                            <div className="d-flex flex-row mb-3 pb-3 border-bottom ">
                              <a href="#">
                                <img alt="Profile Picture" src="img/profiles/l-6.jpg" className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall" />
                              </a>
                              <div className="pl-3">
                                <a href="#">
                                  <p className="font-weight-medium mb-2">Latarsha Gama</p>
                                  <p className="text-semi-muted mb-1">Creating a wireframe will be the first step in the development process and it’s one that should not be treated lightly.Development team and we can benefit from their feedback and ideas and work towards refining our final product.</p>
                                  <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                </a>
                              </div>
                            </div>

                            <div className="d-flex flex-row">
                              <a href="#">
                                <img alt="Profile Picture" src="img/profiles/l-1.jpg" className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall" />
                              </a>
                              <div className="pl-3">
                                <a href="#">
                                  <p className="font-weight-medium mb-2">Joisse Kaycee </p>
                                  <p className="text-semi-muted mb-1">No more waiting, no more anticipation, no more overdone metaphors about maps or journeys. Now it’s time to wire that frame!</p>
                                  <p className="text-muted mb-0 text-small">22.04.2018 - 10:03</p>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                    <div className="row">
                      <div className="col-lg-4 col-12 mb-4">
                        <div className="card mb-4">
                          <div className="card-body">
                            <p className="list-item-heading mb-4">Overview</p>
                            <div className="mb-4">
                              <p className="mb-2">
                                Pull Requests
                                <span className="float-right text-muted">12/18</span>
                              </p>
                              <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-theme-2" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>

                              <table className="table table-sm table-borderless">
                                <tbody>
                                  <tr>
                                    <td className="p-0 pb-1 w-10">
                                      <span className="log-indicator border-theme-1 align-middle"></span>
                                    </td>
                                    <td className="p-0 pb-1">
                                      <span className="font-weight-medium text-muted text-small">3 Merged Requests</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-0 pb-1 w-10">
                                      <span className="log-indicator border-theme-2 align-middle"></span>
                                    </td>
                                    <td className="p-0 pb-1">
                                      <span className="font-weight-medium text-muted text-small">2 Proposed Requests</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div>
                              <p className="mb-2">
                                Issues
                                <span className="float-right text-muted">24/32</span>
                              </p>
                              <div className="progress mb-3">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                <div className="progress-bar bg-theme-2" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>

                              <table className="table table-sm table-borderless">
                                <tbody>
                                  <tr>
                                    <td className="p-0 pb-1 w-10">
                                      <span className="log-indicator border-theme-1 align-middle"></span>
                                    </td>
                                    <td className="p-0 pb-1">
                                      <span className="font-weight-medium text-muted text-small">24 Closed</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-0 pb-1 w-10">
                                      <span className="log-indicator border-theme-2 align-middle"></span>
                                    </td>
                                    <td className="p-0 pb-1">
                                      <span className="font-weight-medium text-muted text-small">6 Active</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-body">
                            <h6 className="mb-4">Frequency</h6>
                            <div className="dashboard-donut-chart chart">
                              <canvas id="frequencyChart"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-lg-8">
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="d-flex flex-row mb-2  mb-4">
                              <a className="d-flex" href="#">
                                <img alt="Profile Picture" src="img/profiles/l-1.jpg" className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall" />
                              </a>
                              <div className=" d-flex flex-grow-1 min-width-zero">
                                <div className="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                  <div className="min-width-zero">
                                    <a href="#">
                                      <p className="mb-0 truncate">Sarah Kortney</p>
                                    </a>
                                    <p className="text-muted mb-0 text-small">315 Commits</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-line-chart">
                              <canvas id="contributionChart1"></canvas>
                            </div>
                          </div>
                        </div>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="d-flex flex-row mb-2  mb-4">
                              <a className="d-flex" href="#">
                                <img alt="Profile Picture" src="img/profiles/l-4.jpg" className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall" />
                              </a>
                              <div className=" d-flex flex-grow-1 min-width-zero">
                                <div className="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                  <div className="min-width-zero">
                                    <a href="#">
                                      <p className="mb-0 truncate">Latarsha Gama</p>
                                    </a>
                                    <p className="text-muted mb-0 text-small">482 Commits</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-line-chart">
                              <canvas id="contributionChart2"></canvas>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex flex-row mb-2  mb-4">
                              <a className="d-flex" href="#">
                                <img alt="Profile Picture" src="img/profiles/l-3.jpg" className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall" />
                              </a>
                              <div className=" d-flex flex-grow-1 min-width-zero">
                                <div className="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                  <div className="min-width-zero">
                                    <a href="#">
                                      <p className="mb-0 truncate">Williemae Lagasse</p>
                                    </a>
                                    <p className="text-muted mb-0 text-small">102 Commits</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dashboard-line-chart">
                              <canvas id="contributionChart3"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AppMenu />
        </main>
      </Page>
    </>
  )
}

export default TodoDetails
