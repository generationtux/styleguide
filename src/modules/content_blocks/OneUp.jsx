// @flow
import React from 'react'

type props = {
  heading: string,
  content: string,
  btnCtaUrl: string,
  btnCtaText: string,
  imgUrl: string,
}

const OneUp = ({ heading, content, btnCtaText, btnCtaUrl, imgUrl }: props) => (
  <div className="
        container
        buffer-xs-top-xl buffer-md-top-xxl
        buffer-xs-btm-xl buffer-md-btm-xxl
      ">
    <div className="row align-vertical">
      <div className="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
        {
          imgUrl &&
            <img
              alt="content"
              className="shadow-level-4 img-responsive"
              src={imgUrl}
            />
        }
        {heading &&
          <h2 className="h3 pusher-xs-top-lg pusher-xs-btm-sm">{heading}</h2>}
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

export default OneUp
