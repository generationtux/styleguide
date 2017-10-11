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
          pt-4 pt-md-5
          pb-4 pb-sm-5 pb-lg-6
        ">
      <div className="row align-vertical">
        <div className="col-sm-8 col-md-5 col-lg-4 col-lg-offset-1">
        {
          imgUrl &&
            <img
              alt="hero"
              className="shadow-level-4 img-responsive"
              src={imgUrl}
            />
        }
        </div>
        <div className="col-sm-12 col-md-7 col-lg-6 pl-lg-5">
          <h1 className="domd">
            {heading &&
              <div className="h5 mt-3 mt-sm-0 mb-1">
                {heading}
              </div>}
             {
                subHeading &&
                  <div dangerouslySetInnerHTML={{__html: subHeading}} />
              }
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

export default HeroTwoUpImgLeft
