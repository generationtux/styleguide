// @flow
import React from 'react'

type props = {
  heading: string,
  content: string,
  btnCtaText: string,
  btnCtaUrl: string,
  imgUrl: string,
}

const TwoUpImgRight = ({
  heading,
  content,
  btnCtaText,
  btnCtaUrl,
  imgUrl,
}: props) => (
  <div className="
        container
        buffer-xs-top-xl buffer-md-top-xxl
        buffer-xs-btm-xl buffer-md-btm-xxl
      ">
    <div className="row align-vertical">
      <div className="col-sm-6 col-sm-push-6 text-center">
        <img
          alt="content"
          className="shadow-level-4 img-responsive"
          src={imgUrl}
        />
      </div>
      <div className="col-sm-4 col-sm-pull-5">
        {heading &&
          <h2 className="h3 pusher-xs-top-lg pusher-sm-top-md">{heading}</h2>}
        {content &&
          <p>
            {content}
          </p>}
        {btnCtaText &&
          <p>
            <a href={btnCtaUrl} className="btn btn-primary">{btnCtaText}</a>
          </p>}
      </div>
    </div>
  </div>
)

export default TwoUpImgRight
