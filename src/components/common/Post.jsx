import React from 'react'
import PropTypes from 'prop-types'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

Post.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired
}

export function Post ({ image, title, content, tags }) {
  const tagsArray = tags ? tags.split(',').map(tag => tag.trim()) : []

  function getRandomColor () {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  return (
        <article className="post_item">
        <figure>
            <img src={image} alt="Simple article blog" />
        </figure>
        <span>Alec Whitten • 1 Jan 2023</span>
        <div className="post_title_icon">
            <h2>{title}</h2>
            <ArrowUpRightIcon className='post_item_icon' />
        </div>
        <p>{content}</p>
        <ul className='tags'>
            {tagsArray.map((tag, index) => (
                <li
                key={index}
                style={{ color: getRandomColor(), backgroundColor: 'white' }}
                >
                    {tag}
                </li>
            ))}
        </ul>
    </article>
  )
}
