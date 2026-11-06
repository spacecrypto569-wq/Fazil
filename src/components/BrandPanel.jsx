export default function BrandPanel() {
  return (
    <section className="brand">
      <header className="brand__top">
        <a className="logo" href="/" aria-label="Fazil Tattoos home">
          <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#ff4d6d" />
                <stop offset="1" stopColor="#ff9f43" />
              </linearGradient>
            </defs>
            <path
              d="M16 2l3.4 9.6L29 15l-9.6 3.4L16 28l-3.4-9.6L3 15l9.6-3.4z"
              fill="url(#logoGrad)"
            />
          </svg>
          <span className="logo__word">
            Fazil<span>Tattoos</span>
          </span>
        </a>
      </header>

      <div className="brand__body">
        <h1 className="brand__headline">
          Vote your <em>favourite</em> tattoo artist.
        </h1>
        <p className="brand__sub">
          Four studios, one title. Pick the artist whose work you would wear for
          life.
        </p>

        <div className="collage" aria-hidden="true">
          <figure className="collage__card collage__card--a">
            <img src="/imgs/ocean.jpeg" alt="" />
          </figure>
          <figure className="collage__card collage__card--b">
            <img src="/imgs/rockin.jpeg" alt="" />
          </figure>
          <figure className="collage__card collage__card--c">
            <img src="/imgs/rnj.jpeg" alt="" />
          </figure>
          <span className="collage__badge collage__badge--heart">♥</span>
          <span className="collage__badge collage__badge--star">★</span>
        </div>
      </div>

      <footer className="brand__foot">
        <span>Community Poll · 2026</span>
        <span className="brand__dot" />
        <span>4 studios nominated</span>
      </footer>
    </section>
  );
}
