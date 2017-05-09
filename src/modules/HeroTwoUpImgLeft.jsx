// @flow
import React from 'react'

type props = {
  heading: string,
  subHeading: string,
  content: string,
  btnCtaText: string,
  btnCtaUrl: string,
  imgUrl: string,
}

const HeroTwoUpImgLeft = ({
  heading,
  subHeading,
  content,
  btnCtaText,
  btnCtaUrl,
  imgUrl,
}: props) => (
  <div className="bg-gray-lighter">
    <section className="
          container-fluid
          bg-offset-base bg-offset-leftbottom-5-2
          buffer-xs-top-lg buffer-md-top-xl
          buffer-xs-btm-lg buffer-sm-btm-xl buffer-lg-btm-xxl
        ">
      <div className="row align-vertical">
        <div className="col-sm-8 col-md-5 col-lg-4 col-lg-offset-1">
          <img
            alt="hero"
            className="shadow-level-4 img-responsive"
            src={
              imgUrl || 'https://media.gentux.com/afBxlPasNQvg2@kaysWHap9MTPcj'
            }
          />
        </div>
        <div className="col-sm-12 col-md-7 col-lg-6 buffer-lg-left-xl">
          <h1 className="domd">
            {heading &&
              <div className="h6 pusher-xs-top-lg pusher-sm-top-clear pusher-xs-btm-xs">
                {heading}
              </div>}
            {subHeading && subHeading}
          </h1>
          {content && <p className="pusher-xs-top-md">{content}</p>}
          {btnCtaText &&
            <p>
              <a href={btnCtaUrl} className="btn btn-primary">{btnCtaText}</a>
            </p>}
        </div>
      </div>
    </section>
  </div>
)

export default HeroTwoUpImgLeft
