import React from 'react'

function Header() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>First-Fiddle</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" href="./style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
  {/*nav div start*/}
  {/* nav div start */}
  <ul
    className="nav justify-content-center"
    style={{ backgroundColor: "#212529" }}
  >
    <li className="nav-item">
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <i className="fa-solid fa-bars-staggered aa" />
      </button>
      <div
        style={{ background: "#181e2394" }}
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ cursor: "pointer", color: "red" }}
          />
          <div className="offcanvas-body">
            <ul className="menu">
              <img
                src="https://firstfiddle.in/_next/image?url=%2Fimages%2Fheader%2Flogo-01.png&w=256&q=75"
                alt=""
                className="menu image"
                width="150px"
                height="100px"
              />
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about"> About</a>
              </li>
             
              <li>
                <a href="#"> Team</a>
              </li>
              <li>
                <a href="/contact"> Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <img
      src="https://firstfiddle.in/_next/image?url=%2Fimages%2Fheader%2Flogo-01.png&w=256&q=75"
      alt=""
      className="navlogo"
    />
    <li className="nav-item">
      <a className="nav-link" href="/about">
        ABOUT
      </a>
    </li>
    <li className="nav-item">
      <button className="main-btn" data-bs-target="#b" data-bs-toggle="modal">
        <a className="nav-link " href="/franchies" tabIndex={-1} aria-disabled="true">
          Franchise white us
        </a>
      </button>
    </li>
  </ul>
  {/* nav end */}
</>

  )
}

export default Header