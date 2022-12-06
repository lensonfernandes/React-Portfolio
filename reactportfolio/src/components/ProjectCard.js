import React from 'react'
import {Col} from "react-bootstrap"

export default function ProjectCard({title, description, imgUrl, url}) {
  return (
    <Col size={12} sm={6} md={4}>
      <div className='proj-imgbx'>
        <a href={url}>
        <img src={imgUrl} />
        </a>
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
