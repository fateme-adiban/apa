import React, { useEffect } from "react"
import Page from "./Page"
import Menu from "./Menu"
import AppMenu from "./AppMenu"

function Servey() {
  return (
    // "menu-sub-hidden show-spinner right-menu"
    <Page title="Survey" menuSubHidden={true} rightMenu={true}>
      <Menu activeApplications="active" />
      <main>
        <div className="container-fluid">
          <div className="row app-row ">
            <div className="col-12 survey-app">
              <div className="mb-2">
                <h1>Developer Survey</h1>
                <div className="text-zero top-right-button-container">
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
                  <a className="nav-link" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third" aria-selected="false">
                    RESULTS
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
                          <p className="text-muted text-small mb-2">Name</p>
                          <p className="mb-3">Developer Survey</p>
                          <p className="text-muted text-small mb-2">Welcome Message</p>
                          <p className="mb-3">
                            As a software professional, you are an innovator, problem solver, researcher, and a creative. Your job is to take big ideas and make them a reality. With the right support, the possibilities are endless.
                            {/* <br>
                                                <br> When roadblocks are removed and you’re allowed do your best work,
                                                you change
                                                the world. */}
                          </p>

                          <p className="text-muted text-small mb-2">Date</p>
                          <p className="mb-3">12.05.2018 - 18.05.2018</p>

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
                    </div>

                    <div className="col-12 col-lg-8">
                      <div className="sortable-survey">
                        <div>
                          <div className="card question d-flex mb-4 edit-quesiton">
                            <div className="d-flex flex-grow-1 min-width-zero">
                              <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                <div className="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                                  <span className="heading-number d-inline-block">1</span>
                                  Age
                                </div>
                              </div>
                              <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                <button className="btn btn-outline-theme-3 icon-button edit-button">
                                  <i className="simple-icon-pencil"></i>
                                </button>
                                <button className="btn btn-outline-theme-3 icon-button view-button">
                                  <i className="simple-icon-eye"></i>
                                </button>
                                <button className="btn btn-outline-theme-3 icon-button rotate-icon-click rotate" type="button" data-toggle="collapse" data-target="#q1" aria-expanded="true" aria-controls="q1">
                                  <i className="simple-icon-arrow-down with-rotate-icon"></i>
                                </button>
                              </div>
                            </div>
                            <div className="question-collapse collapse show" id="q1">
                              <div className="card-body pt-0">
                                <div className="edit-mode">
                                  <div className="form-group mb-3">
                                    <label>Title</label>
                                    <input className="form-control" type="text" defaultValue="Age" />
                                  </div>
                                  <div className="form-group mb-5">
                                    <label>Question</label>
                                    <input className="form-control" type="text" defaultValue="How old are you?" />
                                  </div>

                                  <div className="separator mb-4"></div>

                                  <div className="form-group">
                                    <label className="d-block">Answer Type</label>
                                    <select className="form-control select2-single" data-width="100%">
                                      <option label="&nbsp;">&nbsp;</option>
                                      <option defaultValue="0">Text Input</option>
                                      <option defaultValue="1" selected>
                                        Single Select
                                      </option>
                                      <option defaultValue="2">Multiple Select</option>
                                      <option defaultValue="3">Checkbox</option>
                                      <option defaultValue="4">Radiobutton</option>
                                    </select>
                                  </div>

                                  <div className="form-group">
                                    <label className="d-block">Answers</label>
                                    <div className="answers mb-3 sortable">
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="18-24" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="24-30" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="30-40" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="40-50" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="50+" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button type="button" className="btn btn-outline-primary btn-sm mb-2">
                                        <i className="simple-icon-plus btn-group-icon"></i>
                                        Add Answer
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="view-mode">
                                  <label>How old are you?</label>
                                  <select className="form-control select2-single" data-width="100%">
                                    <option label="&nbsp;">&nbsp;</option>
                                    <option defaultValue="0">18-24</option>
                                    <option defaultValue="1">24-30</option>
                                    <option defaultValue="2">30-40</option>
                                    <option defaultValue="3">40-50</option>
                                    <option defaultValue="4">50+</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="card question d-flex mb-4 edit-quesiton">
                            <div className="d-flex flex-grow-1 min-width-zero">
                              <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                <div className="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                                  <span className="heading-number d-inline-block">2</span>
                                  Gender
                                </div>
                              </div>
                              <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                <button className="btn btn-outline-theme-3 icon-button edit-button">
                                  <i className="simple-icon-pencil"></i>
                                </button>
                                <button className="btn btn-outline-theme-3 icon-button view-button">
                                  <i className="simple-icon-eye"></i>
                                </button>
                                <button className="btn btn-outline-theme-3 icon-button rotate-icon-click" type="button" data-toggle="collapse" data-target="#q2" aria-expanded="false" aria-controls="q2">
                                  <i className="simple-icon-arrow-down with-rotate-icon"></i>
                                </button>
                              </div>
                            </div>

                            <div className="collapse question-collapse" id="q2">
                              <div className="card-body pt-0">
                                <div className="edit-mode">
                                  <div className="form-group mb-3">
                                    <label>Title</label>
                                    <input className="form-control" type="text" defaultValue="Gender" />
                                  </div>
                                  <div className="form-group mb-5">
                                    <label>Question</label>
                                    <input className="form-control" type="text" defaultValue="What is your gender?" />
                                  </div>

                                  <div className="separator mb-4"></div>
                                  <div className="form-group">
                                    <label className="d-block">Answer Type</label>
                                    <select className="form-control select2-single" data-width="100%">
                                      <option label="&nbsp;">&nbsp;</option>
                                      <option defaultValue="0">Text Input</option>
                                      <option defaultValue="1">Single Select</option>
                                      <option defaultValue="2">Multiple Select</option>
                                      <option defaultValue="3">Checkbox</option>
                                      <option defaultValue="4" selected>
                                        Radiobutton
                                      </option>
                                    </select>
                                  </div>

                                  <div className="form-group">
                                    <label className="d-block">Answers</label>
                                    <div className="answers mb-3 sortable">
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="Male" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="Female" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="Other" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button type="button" className="btn btn-outline-primary btn-sm mb-2">
                                        <i className="simple-icon-plus btn-group-icon"></i>
                                        Add Answer
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-mode">
                                  <label>What is your gender?</label>
                                  <div className="mb-4">
                                    <div className="custom-control custom-radio">
                                      <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                      <label className="custom-control-label" htmlFor="customRadio1">
                                        Male
                                      </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                      <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                      <label className="custom-control-label" htmlFor="customRadio2">
                                        Female
                                      </label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                      <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                      <label className="custom-control-label" htmlFor="customRadio3">
                                        Other
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="card question d-flex mb-4 edit-quesiton">
                            <div className="d-flex flex-grow-1 min-width-zero">
                              <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                <div className="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                                  <span className="heading-number d-inline-block">3</span>
                                  Work
                                </div>
                              </div>
                              <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                <button className="btn btn-outline-theme-3 icon-button edit-button">
                                  <i className="simple-icon-pencil"></i>
                                </button>
                                <button className="btn btn-outline-theme-3 icon-button view-button">
                                  <i className="simple-icon-eye"></i>
                                </button>
                                <button className="btn btn-outline-theme-3 icon-button rotate-icon-click" type="button" data-toggle="collapse" data-target="#q3" aria-expanded="false" aria-controls="q3">
                                  <i className="simple-icon-arrow-down with-rotate-icon"></i>
                                </button>
                              </div>
                            </div>

                            <div className="collapse question-collapse" id="q3">
                              <div className="card-body pt-0">
                                <div className="edit-mode">
                                  <div className="form-group mb-3">
                                    <label>Title</label>
                                    <input className="form-control" type="text" defaultValue="Work" />
                                  </div>
                                  <div className="form-group mb-5">
                                    <label>Question</label>
                                    <input className="form-control" type="text" defaultValue="What is your employment status?" />
                                  </div>

                                  <div className="separator mb-4"></div>
                                  <div className="form-group">
                                    <label className="d-block">Answer Type</label>
                                    <select className="form-control select2-single" data-width="100%">
                                      <option label="&nbsp;">&nbsp;</option>
                                      <option defaultValue="0">Text Input</option>
                                      <option defaultValue="1" selected>
                                        Single Select
                                      </option>
                                      <option defaultValue="2">Multiple Select</option>
                                      <option defaultValue="3">Checkbox</option>
                                      <option defaultValue="4">Radiobutton</option>
                                    </select>
                                  </div>

                                  <div className="form-group">
                                    <label className="d-block">Answers</label>
                                    <div className="answers mb-3 sortable">
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="Employed htmlFor wages" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="Self-employed" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="Out of work and looking htmlFor work" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="Retired" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button type="button" className="btn btn-outline-primary btn-sm mb-2">
                                        <i className="simple-icon-plus btn-group-icon"></i>
                                        Add Answer
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-mode">
                                  <label>What is your employment status?</label>
                                  <select className="form-control select2-single" data-width="100%">
                                    <option label="&nbsp;">&nbsp;</option>
                                    <option defaultValue="0">Employed htmlFor wages</option>
                                    <option defaultValue="1">Self-employed</option>
                                    <option defaultValue="2">Out of work and looking htmlFor work</option>
                                    <option defaultValue="3">Retired</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="card question d-flex mb-4 edit-quesiton">
                            <div className="d-flex flex-grow-1 min-width-zero">
                              <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                                <div className="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
                                  <span className="heading-number d-inline-block">4</span>
                                  Coding
                                </div>
                              </div>
                              <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                                <button className="btn btn-outline-theme-3 icon-button edit-button">
                                  <i className="simple-icon-pencil"></i>
                                </button>
                                <button className="btn btn-outline-theme-3 icon-button view-button">
                                  <i className="simple-icon-eye"></i>
                                </button>
                                <button className="btn btn-outline-theme-3 icon-button rotate-icon-click" type="button" data-toggle="collapse" data-target="#q4" aria-expanded="false" aria-controls="q4">
                                  <i className="simple-icon-arrow-down with-rotate-icon"></i>
                                </button>
                              </div>
                            </div>

                            <div className="collapse question-collapse" id="q4">
                              <div className="card-body pt-0">
                                <div className="edit-mode">
                                  <div className="form-group mb-3">
                                    <label>Title</label>
                                    <input className="form-control" type="text" defaultValue="Coding" />
                                  </div>

                                  <div className="form-group mb-5">
                                    <label>Question</label>
                                    <input className="form-control" type="text" defaultValue="What programming languages do you use?" />
                                  </div>

                                  <div className="separator mb-4"></div>
                                  <div className="form-group">
                                    <label className="d-block">Answer Type</label>
                                    <select className="form-control select2-single" data-width="100%">
                                      <option label="&nbsp;">&nbsp;</option>
                                      <option defaultValue="0">Text Input</option>
                                      <option defaultValue="1">Single Select</option>
                                      <option defaultValue="2">Multiple Select</option>
                                      <option defaultValue="3" selected>
                                        Checkbox
                                      </option>
                                      <option defaultValue="4">Radiobutton</option>
                                    </select>
                                  </div>

                                  <div className="form-group">
                                    <label className="d-block">Answers</label>
                                    <div className="answers mb-3 sortable">
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="Python" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill ">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="JavaScript" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill ">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="PHP" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill ">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="Java" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill ">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="mb-1 position-relative">
                                        <input className="form-control" type="text" defaultValue="C#" />
                                        <div className="input-icons">
                                          <span className="badge badge-pill handle pr-0 mr-0">
                                            <i className="simple-icon-cursor-move"></i>
                                          </span>
                                          <span className="badge badge-pill ">
                                            <i className="simple-icon-ban"></i>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button type="button" className="btn btn-outline-primary btn-sm mb-2">
                                        <i className="simple-icon-plus btn-group-icon"></i>
                                        Add Answer
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="view-mode">
                                  <label>What programming languages do you use?</label>
                                  <div className="mb-4">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="lang1" />
                                      <label className="custom-control-label" htmlFor="lang1">
                                        Python
                                      </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="lang2" />
                                      <label className="custom-control-label" htmlFor="lang2">
                                        JavaScript
                                      </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="lang3" />
                                      <label className="custom-control-label" htmlFor="lang3">
                                        PHP
                                      </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="lang4" />
                                      <label className="custom-control-label" htmlFor="lang4">
                                        Java
                                      </label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="lang5" />
                                      <label className="custom-control-label" htmlFor="lang5">
                                        C#
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <button type="button" className="btn btn-outline-primary btn-sm mb-2">
                          <i className="simple-icon-plus btn-group-icon"></i>
                          Add Question
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                  <div className="row">
                    <div className="col-lg-4 col-12 mb-4">
                      <div className="card mb-4">
                        <div className="card-body">
                          <p className="list-item-heading mb-4">Quota</p>
                          <div className="mb-4">
                            <p className="mb-2">Gender</p>

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
                                    <span className="font-weight-medium text-muted text-small">105/125 Male</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-0 pb-1 w-10">
                                    <span className="log-indicator border-theme-2 align-middle"></span>
                                  </td>
                                  <td className="p-0 pb-1">
                                    <span className="font-weight-medium text-muted text-small">90/125 Female</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="mb-4">
                            <p className="mb-2">Education</p>
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
                                    <span className="font-weight-medium text-muted text-small">139/125 College</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-0 pb-1 w-10">
                                    <span className="log-indicator border-theme-2 align-middle"></span>
                                  </td>
                                  <td className="p-0 pb-1">
                                    <span className="font-weight-medium text-muted text-small">95/125 High School</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div>
                            <p className="mb-2">Age</p>
                            <div className="progress mb-3">
                              <div className="progress-bar" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                              <div className="progress-bar bg-theme-2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              <div className="progress-bar bg-theme-3" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>

                            <table className="table table-sm table-borderless">
                              <tbody>
                                <tr>
                                  <td className="p-0 pb-1 w-10">
                                    <span className="log-indicator border-theme-1 align-middle"></span>
                                  </td>
                                  <td className="p-0 pb-1">
                                    <span className="font-weight-medium text-muted text-small">50/75 18-24</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-0 pb-1 w-10">
                                    <span className="log-indicator border-theme-2 align-middle"></span>
                                  </td>
                                  <td className="p-0 pb-1">
                                    <span className="font-weight-medium text-muted text-small">40/75 24-30</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-0 pb-1 w-10">
                                    <span className="log-indicator border-theme-3 align-middle"></span>
                                  </td>
                                  <td className="p-0 pb-1">
                                    <span className="font-weight-medium text-muted text-small">60/75 30-40</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-8">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h6 className="mb-4">How old are you?</h6>
                          <div className="dashboard-donut-chart chart">
                            <canvas id="ageChart"></canvas>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-4">
                        <div className="card-body">
                          <h6 className="mb-4">What is your gender?</h6>
                          <div className="dashboard-donut-chart chart">
                            <canvas id="genderChart"></canvas>
                          </div>
                        </div>
                      </div>

                      <div className="card mb-4">
                        <div className="card-body">
                          <h6 className="mb-4">What is your employment status?</h6>
                          <div className="dashboard-donut-chart chart">
                            <canvas id="workChart"></canvas>
                          </div>
                        </div>
                      </div>

                      <div className="card ">
                        <div className="card-body">
                          <h6 className="mb-4">What programming languages do you use?</h6>
                          <div className="dashboard-donut-chart chart">
                            <canvas id="codingChart"></canvas>
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
  )
}

export default Servey
