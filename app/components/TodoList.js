import React, { useEffect } from "react"
import AppMenu from "./AppMenu"
import Page from "./Page"
import Menu from "./Menu"

function TodoList() {
  return (
    <>
      {/* "menu-sub-hidden show-spinner right-menu" */}
      <Page title="Todo List" menuSubHidden={true} rightMenu={true}>
        <Menu activeApplications="active" />
        <main>
          <div className="container-fluid">
            <div className="row app-row">
              <div className="col-12">
                <div className="mb-2">
                  <h1>Todo</h1>
                  <div className="top-right-button-container">
                    <button type="button" className="btn btn-outline-primary btn-lg top-right-button  mr-1" data-toggle="modal" data-backdrop="static" data-target="#exampleModal">
                      ADD NEW
                    </button>
                    <div className="modal fade modal-right" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Add New
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control" placeholder="" />
                              </div>
                              <div className="form-group">
                                <label>Details</label>
                                <textarea className="form-control" rows="2"></textarea>
                              </div>

                              <div className="form-group">
                                <label>Category</label>
                                <select className="form-control select2-single" data-width="100%">
                                  <option label="&nbsp;">&nbsp;</option>
                                  <option value="Flexbox">Flexbox</option>
                                  <option value="Sass">Sass</option>
                                  <option value="React">React</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label>Labels</label>
                                <select className="form-control select2-multiple" multiple="multiple" data-width="100%">
                                  <option value="New Framework">New Framework</option>
                                  <option value="Education">Education</option>
                                  <option value="Personal">Personal</option>
                                </select>
                              </div>

                              <div className="form-group">
                                <label>Status</label>
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                  <label className="custom-control-label" htmlFor="customCheck1">
                                    Completed
                                  </label>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" data-dismiss="modal">
                              Cancel
                            </button>
                            <button type="button" className="btn btn-primary">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-group">
                      <div className="btn btn-primary btn-lg pl-4 pr-0 check-button">
                        <label className="custom-control custom-checkbox mb-0 d-inline-block">
                          <input type="checkbox" className="custom-control-input" id="checkAll" />
                          <span className="custom-control-label">&nbsp;</span>
                        </label>
                      </div>
                      <button type="button" className="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
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
                </div>

                <div className="mb-2">
                  <a className="btn pt-0 pl-0 d-inline-block d-md-none" data-toggle="collapse" href="#displayOptions" role="button" aria-expanded="true" aria-controls="displayOptions">
                    Display Options
                    <i className="simple-icon-arrow-down align-middle"></i>
                  </a>
                  <div className="collapse d-md-block" id="displayOptions">
                    <div className="d-block d-md-inline-block">
                      <div className="btn-group float-md-left mr-1 mb-1">
                        <button className="btn btn-outline-dark btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Order By
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </div>
                      </div>
                      <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                        <input placeholder="Search..." />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="separator mb-5"></div>

                <div className="list disable-text-selection" data-check-all="checkAll">
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <a className="list-item-heading mb-0 truncate w-40 w-xs-100 mt-0" href="Apps.Todo.Details.html">
                          <i className="simple-icon-refresh heading-icon"></i>

                          <span className="align-middle d-inline-block">Book train tickets</span>
                        </a>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">Personal</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">11.08.2018</p>
                        <div className="w-15 w-xs-100">
                          <span className="badge badge-pill badge-secondary">ON HOLD</span>
                        </div>
                      </div>
                      <label className="custom-control custom-checkbox mb-0 align-self-center mr-4 mb-1">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </div>
                  </div>

                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <a className="list-item-heading mb-0 truncate w-40 w-xs-100 mt-0" href="Apps.Todo.Details.html">
                          <i className="simple-icon-refresh heading-icon"></i>
                          <span className="align-middle d-inline-block">Complete weekly delivery</span>
                        </a>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">Store</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">14.07.2018</p>
                        <div className="w-15 w-xs-100">
                          <span className="badge badge-pill badge-secondary">PROCESSED</span>
                        </div>
                      </div>
                      <label className="custom-control custom-checkbox mb-0 align-self-center mr-4 mb-1">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
                    </div>
                  </div>

                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <a className="list-item-heading mb-0 truncate w-40 w-xs-100 mt-0" href="Apps.Todo.Details.html">
                          <i className="simple-icon-check heading-icon"></i>
                          <span className="align-middle d-inline-block">Take photos of cakes</span>
                        </a>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">Store</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">09.04.2018</p>
                        <div className="w-15 w-xs-100">
                          <span className="badge badge-pill badge-secondary">ON HOLD</span>
                        </div>
                      </div>
                      <label className="custom-control custom-checkbox mb-0 align-self-center mr-4 mb-1">
                        <input type="checkbox" className="custom-control-input" />
                        <span className="custom-control-label">&nbsp;</span>
                      </label>
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

export default TodoList
