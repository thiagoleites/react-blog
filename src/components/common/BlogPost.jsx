import React from 'react'
import PropTypes from 'prop-types'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

const tagColors = {
  Design: '#6941C6',
  Research: '#3538CD',
  Presentation: '#C11574',
  Interface: '#C11574'
}

BlogPost.propTypes = {
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  articleClass: PropTypes.string
}
function BlogPost ({ image, author, date, title, content, tags, articleClass }) {
  const rendereizarTags = (tags, limite) => {
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

  return (
    <article className={`blog-post ${articleClass}`}>
      <figure>
        <img src={image} alt="Titulo da imagem" />
      </figure>

      <span className="author">{author} • {date}</span>
      <div className="title_icon">
        <h3 className="title">{title}</h3>
        <ArrowUpRightIcon className="size_icon_arrow" />
      </div>
      <p>{content}</p>
      {rendereizarTags(tags, 3)}
    </article>
  )
}

export default BlogPost
