export default function Hero() {
  return (
    <header className='hero transitioning'>
      <h1 className='logo-font hero-title'>
        Sennar Academy
      </h1>
      <p className='hero-tagline'>
        A clean visual explorer for academic structures.
      </p>

      <div className='hero-buttons'>
        <a
          href='/departments'
          className='hero-btn primary'
        >
          View Departments
        </a>
        <a
          href='/subjects'
          className='hero-btn secondary'
        >
          Browse Subjects
        </a>
      </div>
    </header>
  )
}
