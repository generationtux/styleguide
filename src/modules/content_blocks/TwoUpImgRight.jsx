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
        pt-4 bt-md-6
        pb-4 pb-md-6
      ">
    <div className="row align-vertical">
      <div className="col-sm-6 col-sm-push-6 text-center">
        {
          imgUrl &&
            <img
              alt="content"
              className="shadow-level-4 img-responsive"
              src={imgUrl}
            />
        }
      </div>
      <div className="col-sm-4 col-sm-pull-5">
        {heading &&
          <h2 className="h3 mt-4 mt-sm-3 mb-2">{heading}</h2>}
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

export default TwoUpImgRight
