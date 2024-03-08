import React, { useState } from 'react'
import ToggleTheme from '../buttons/ToggleTheme.jsx'

function Header () {
  const [isDark, setIsDark] = useState(false)
  const handleChange = () => {
    setIsDark(!isDark)
  }

  return (
        <section className="top_section">
            <header className="top_header">
                <span className="logo">Your Name</span>
                <nav>
                    <ul>
                        <li>Blog</li>
                        <li>Project</li>
                        <li>About</li>
                        <li>Newsletter</li>
                    </ul>
                </nav>
                <div>
                    <ToggleTheme handleChange={ handleChange } isChecked={isDark} />
                </div>
            </header>

            <div className="hero">
                <h1>The Blog</h1>
            </div>
        </section>
  )
}

export default Header
