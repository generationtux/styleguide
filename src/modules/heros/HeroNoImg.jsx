// @flow
import React from 'react'

type props = {
  heading: string,
  subHeading: string,
  content: string,
  btnCtaText: string,
  btnCtaUrl: string,
}
const HeroNoImg = ({
  heading,
  subHeading,
  content,
  btnCtaText,
  btnCtaUrl,
}: props) => (
  <div className="bg-gray-lighter">
    <section className="
          container
          buffer-xs-top-lg buffer-md-top-xl
          buffer-xs-btm-xl buffer-sm-btm-xl buffer-lg-btm-xxl
        ">
      <div className="row align-vertical">
        <div className="col-sm-11 col-sm-offset-1 col-md-8">
          <h1>
            {heading &&
              <div className="h6 pusher-xs-top-lg pusher-sm-top-clear pusher-xs-btm-xs">
                {heading}
              </div>}
            {subHeading && <div dangerouslySetInnerHTML={{__html: subHeading}} className="h1 domd" />}
          </h1>
          {content &&
            <p className="pusher-xs-top-md" dangerouslySetInnerHTML={{__html: content}} />}
          {btnCtaText &&
            <p>
              <a href={btnCtaUrl} className="btn btn-primary">{btnCtaText}</a>
            </p>}
        </div>
      </div>
    </section>
  </div>
)

export default HeroNoImg
