import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description , imageurl , newsurl, author, date, source} = this.props;
    return (
      <div>
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left :'80%',zIndex:'1'}}>{source}</span>
          <img src={!imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/a49c/live/0136d750-dcb4-11ef-bb39-7b9a8de7bf71.jpg":imageurl}
          className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-outline-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
