import React from 'react'
import {Col} from "react-bootstrap"

export default function ProjectCard({title, description, imgUrl, url}) {
  return (
    <Col size={12} sm={6} md={4} className="my-2">
      <div className='proj-imgbx m-1'>
        <a href={url}>
        <img src={imgUrl} style={{objectFit:'cover'}}/>
        </a>
        <div className='proj-txtx'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
