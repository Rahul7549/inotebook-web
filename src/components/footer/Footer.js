import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {


  hrefLink = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Fimage-colorful-galaxy-sky-generative-ai_37741252.htm&psig=AOvVaw3b4CCa0mYW5sItSn4b3kdr&ust=1696824697080000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjBhN3K5YEDFQAAAAAdAAAAABAE'

  render() {
    return (
      <div>
        <div className="footer-styles card">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <Link href="#" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
      </div>
    )
  }
}
