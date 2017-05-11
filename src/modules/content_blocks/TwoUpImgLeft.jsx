// @flow
import React from 'react'

type props = {
  heading: string,
  content: string,
  btnCtaText: string,
  btnCtaUrl: string,
  imgUrl: string,
}

const TwoUpImgLeft = ({
  heading,
  content,
  btnCtaText,
  btnCtaUrl,
  imgUrl,
}: props) => (
  <div className="container
        buffer-xs-top-xl buffer-md-top-xxl
        buffer-xs-btm-xl buffer-md-btm-xxl
      ">
    <div className="row align-vertical">
      <div className="col-sm-6 text-center">
        { imgUrl &&
          <img
            alt="content"
            className="shadow-level-4 img-responsive"
            src={imgUrl}
          />}
      </div>
      <div className="col-sm-4 col-sm-offset-1">
        {heading &&
          <h2 className="h3 pusher-xs-top-lg pusher-sm-top-md">{heading}</h2>}
        {content &&
          <p dangerouslySetInnerHTML={{__html: content}} />}
        {btnCtaText &&
          <p>
            <a href={btnCtaUrl} className="btn btn-primary">{btnCtaText}</a>
          </p>}
      </div>
    </div>
  </div>
)

export default TwoUpImgLeft
