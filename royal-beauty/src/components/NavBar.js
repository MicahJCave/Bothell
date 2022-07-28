import StyleSheet from 'react'

const NavBar = () => {
  const styles = {
    color: 'white',
  }

  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg bg-dark">
          <div class="container-fluid">
            <a style={styles} class="navbar-brand" href="#">
              Royal Beauty
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    style={styles}
                    class="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a style={styles} class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a style={styles} class="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
