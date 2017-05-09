// @flow
import React from 'react'

type props = {
  heading: string,
  subHeading: string,
  btnCtaText: string,
  btnCtaUrl: string,
  imgUrl: string,
  imgCtaText: string,
  imgCtaUrl: string,
  content: string,
}

const HeroCarousel = ({
  heading,
  subHeading,
  btnCtaText,
  btnCtaUrl,
  imgUrl,
  imgCtaText,
  imgCtaUrl,
  content,
}: props) => (
  <div className="container container-callout">
    <div className="row">
      <div className="col-sm-4 col-sm-push-1 lift-1">
        {heading && <div className="h6 pusher-xs-btm-sm">{heading}</div>}
        {subHeading &&
          <h1 className="domd pusher-xs-top-md pusher-xs-btm-md pusher-sm-btm-lg">
            {subHeading}
          </h1>}
        {(content || btnCtaText) &&
          <div>
            <hr className="hr-small" />
            {content && <p>{content}</p>}
          </div>}
        {btnCtaText &&
          <a
            className="btn btn-hollow-primary pusher-xs-btm-lg"
            href={btnCtaUrl || '/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {btnCtaText}
          </a>}
      </div>
      <div className="col-sm-8">
        <img
          className="img-responsive"
          alt="hero"
          src={
            imgUrl || 'https://media.gentux.com/afBxlPasNQvg2@kaysWHap9MTPcj'
          }
        />
        {imgCtaText &&
          <a className="btn btn-link pusher-xs-btm-lg" href={imgCtaUrl || '/'}>
            {imgCtaText}
          </a>}
      </div>
    </div>
  </div>
)

export default HeroCarousel
