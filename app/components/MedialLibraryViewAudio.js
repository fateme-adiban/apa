import React, { useEffect } from "react"

function MedialLibraryViewAudio() {
  return (
    <body className="menu-sub-hidden">
      <main>
        <div className="container-fluid library-app">
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <h1>Media Library</h1>
                <div className="text-zero top-right-button-container">
                  <button type="button" className="btn btn-primary btn-lg top-right-button mr-1">
                    ADD NEW
                  </button>
                  <div className="btn-group">
                    <div className="btn btn-primary btn-lg pl-4 pr-0 check-button">
                      <label className="custom-control custom-checkbox mb-0 d-inline-block">
                        <input type="checkbox" className="custom-control-input" id="checkAll" />
                        <span className="custom-control-label"></span>
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
                <nav className="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                  <ol className="breadcrumb pt-0">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Library</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Data
                    </li>
                  </ol>
                </nav>
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
                  <div className="float-md-right">
                    <span className="text-muted text-small">Displaying 1-10 of 210 items </span>
                    <button className="btn btn-outline-dark btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      20
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        10
                      </a>
                      <a className="dropdown-item active" href="#">
                        20
                      </a>
                      <a className="dropdown-item" href="#">
                        30
                      </a>
                      <a className="dropdown-item" href="#">
                        50
                      </a>
                      <a className="dropdown-item" href="#">
                        100
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="separator mb-5"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-xl-4">
              <div className="card preview-area preview-area-audio d-flex flex-column flex-xl-column">
                <div className="position-relative">
                  <div className="audio-view">
                    <audio id="myAudio" className="video-js audio" controls preload="auto" data-setup="{}">
                      <source src="http://contentdownload.elitenet.dk/published/4peterbillelarsensonatas.mp3" type="audio/mp3" />
                    </audio>
                  </div>
                </div>
                <div className="card-body">
                  <p className="text-muted text-small mb-1">Name</p>
                  <p className="mb-3">commercial-back.mp3</p>
                  <p className="text-muted text-small mb-1">Length</p>
                  <p className="mb-3">03:22</p>
                  <p className="text-muted text-small mb-1">Size</p>
                  <p className="mb-0">2.024 KB</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8 list disable-text-selection" data-check-all="checkAll">
              <div className="row">
                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center media-thumbnail-icon" href="Apps.MediaLibrary.ViewFolder.html">
                      <i className="iconsminds-folder-open"></i>
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewFolder.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">Cakes</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">14.11.2018</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center media-thumbnail-icon" href="Apps.MediaLibrary.ViewFolder.html">
                      <i className="iconsminds-folder-open"></i>
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewFolder.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">Desserts</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">18.11.2018</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center media-thumbnail-icon" href="Apps.MediaLibrary.ViewAudio.html">
                      <i className="iconsminds-guitar"></i>
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewAudio.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">commercial-back.mp3</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">02.10.2018</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container active-default">
                    <a className="d-flex align-self-center media-thumbnail-icon" href="Apps.MediaLibrary.ViewAudio.html">
                      <i className="iconsminds-guitar"></i>
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewAudio.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">ambiance.mp3</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">22.12.2018</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center media-thumbnail-icon" href="Apps.MediaLibrary.ViewVideo.html">
                      <i className="iconsminds-camera-4"></i>
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewVideo.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">big-buck-bunny.mp4</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">07.10.2018</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/bebinca-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">bebinca-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:04</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container ">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/cheesecake-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">cheesecake-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:05</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/chocolate-cake-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">chocolate-cake-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:08</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/coconut-cake.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">coconut-cake.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:15</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/cremeschnitte-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">cremeschnitte-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:23</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/fat-rascal-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">fat-rascal-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:27</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/financier-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">financier-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:32</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/fruitcake-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">fruitcake-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:33</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/genoise-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">genoise-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:35</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/gingerbread-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">gingerbread-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:38</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/magdalena-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">magdalena-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:39</p>
                      </div>
                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-6 col-12">
                  <div className="card d-flex flex-row mb-4 media-thumb-container">
                    <a className="d-flex align-self-center" href="Apps.MediaLibrary.ViewImage.html">
                      <img src="img/products/parkin-thumb.jpg" alt="uploaded image" className="list-media-thumbnail responsive border-0" />
                    </a>
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column justify-content-between min-width-zero align-items-lg-center">
                        <a href="Apps.MediaLibrary.ViewImage.html" className="w-100">
                          <p className="list-item-heading mb-1 truncate">parkin-thumb.jpg</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-100 truncate">16.09.2018 14:39</p>
                      </div>

                      <div className="pl-1 align-self-center">
                        <label className="custom-control custom-checkbox mb-0">
                          <input type="checkbox" className="custom-control-input" />
                          <span className="custom-control-label"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-8 offset-0 offset-xl-4">
              <nav className="mt-4 mb-3">
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item ">
                    <a className="page-link first" href="#">
                      <i className="simple-icon-control-start"></i>
                    </a>
                  </li>
                  <li className="page-item ">
                    <a className="page-link prev" href="#">
                      <i className="simple-icon-arrow-left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item ">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item ">
                    <a className="page-link next" href="#" aria-label="Next">
                      <i className="simple-icon-arrow-right"></i>
                    </a>
                  </li>
                  <li className="page-item ">
                    <a className="page-link last" href="#">
                      <i className="simple-icon-control-end"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}

export default MedialLibraryViewAudio
