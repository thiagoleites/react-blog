import React, { useState } from 'react'
import { Footer } from '../common/Footer.jsx'
import ToggleTheme from '../buttons/ToggleTheme.jsx'
import image0 from '../../assets/images/image0.png'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import BlogPost from '../common/BlogPost.jsx'

const tagColors = {
  Design: '#6941C6',
  Research: '#3538CD',
  Presentation: '#C11574',
  Interface: '#C11574'
}

function rendereizarTags (tags, limite) {
  const tagsExibidas = tags.slice(0, limite)

  return (
        <ul className="tags">
            {tagsExibidas.map((tag, index) => (
                <li
                    key={index}
                    style={{ color: tagColors[tag], backgroundColor: 'white' }}
                >
                    {tag}
                </li>
            ))}
        </ul>
  )
}

function Master () {
  const [isDark, setIsDark] = useState(false)
  const handleChange = () => {
    setIsDark(!isDark)
  }

  return (
        <>
            <main className="App" data-theme={isDark ? 'light' : 'dark'}>
                <div className="container">
                    <section className="top_section">
                        <header className="top_header">
                            <span className="logo">Your Name</span>
                            <div className="navigation">
                                <nav>
                                    <ul>
                                        <li>Blog</li>
                                        <li>Project</li>
                                        <li>About</li>
                                        <li>Newsletter</li>
                                    </ul>
                                </nav>
                                <ToggleTheme
                                    handleChange={handleChange}
                                    isChecked={isDark}
                                />
                            </div>
                        </header>

                        <div className="hero">
                            <h1>The Blog</h1>
                        </div>
                    </section>

                    <section className="posts">
                        <h2>Recent blog posts</h2>
                        <div className="articles_posts">
                            <article className="post_one">
                                <figure>
                                    <img src={image1} alt="Titulo da imagem" />
                                </figure>

                                <span className="author">
                                    Olivia Rhye • 1 Jan 2023
                                </span>
                                <div className="title_icon">
                                    <h3 className="title">
                                        UX review presentations
                                    </h3>
                                    <ArrowUpRightIcon className="size_icon_arrow" />
                                </div>
                                <p>
                                    How to yuou create compelling presentations
                                    tahta wow your colleageues and impress your
                                    managers?
                                </p>
                                {rendereizarTags(['Design', 'Research', 'Presentation'], 3)}
                            </article>

                            <article className="post_two">
                                <div className="grid_post">
                                    <figure>
                                        <img
                                            src={image2}
                                            alt="Titulo da imagem"
                                        />
                                    </figure>
                                    <div>
                                        <span>Phoenix Baker • 1 Jan 2023</span>
                                        <h3>UX review pres entations</h3>

                                        <p>
                                            Linear helps streamline software
                                            projects, sprints, tasks, and bug
                                            tracking. Here’s how to get...
                                        </p>
                                        {rendereizarTags(['Design', 'Research'], 2)}
                                    </div>
                                </div>
                            </article>

                            <article className="post_three">
                                <div className="grid_post">
                                    <figure>
                                        <img
                                            src={image3}
                                            alt="Titulo da imagem"
                                        />
                                    </figure>

                                    <div>
                                        <span>Lana Steiner • 1 Jan 2023</span>
                                        <h3>UX review pres entations</h3>
                                        <p>
                                            The rise of RESTful APIs has been
                                            met by a rise in tools for creating,
                                            testing, and manag...
                                        </p>
                                        {rendereizarTags(['Design', 'Research'], 2)}
                                    </div>
                                </div>
                            </article>

                            <article className="post_four">
                                <div className="grid_post">
                                    <figure>
                                        <img
                                            src={image0}
                                            alt="Titulo da imagem"
                                        />
                                    </figure>

                                    <div>
                                        <span>Lana Steiner • 1 Jan 2023</span>
                                        <h3>Grid system for better Design User Interface</h3>
                                        <p>
                                        A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
                                        </p>
                                        {rendereizarTags(['Design', 'Interface'], 2)}
                                    </div>
                                </div>
                            </article>

                        </div>
                    </section>
                </div>
                <Footer />
            </main>
        </>
  )
}

export default Master
