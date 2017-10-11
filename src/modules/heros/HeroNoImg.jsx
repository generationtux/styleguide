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
          pt-4 pt-md-5
          pb-5 pb-lg-6
        ">
      <div className="row align-vertical">
        <div className="col-sm-11 col-sm-offset-1 col-md-8">
          <h1>
            {heading &&
              <div className="h5 mt-4 mt-sm-0 mb-1">
                {heading}
              </div>}
            {subHeading && <div dangerouslySetInnerHTML={{__html: subHeading}} className="h1 domd" />}
          </h1>
          {content &&
            <p className="mt-3" dangerouslySetInnerHTML={{__html: content}} />}
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
