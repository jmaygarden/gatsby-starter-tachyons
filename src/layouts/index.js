import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import 'tachyons'

import svg_logo from './jkm-logo.svg'
import svg_gmail from './gmail.js'
import svg_stackoverflow from './stackoverflow.js'
import svg_github from './github.js'
import svg_linkedin from './linkedin.js'
import svg_twitter from './twitter.js'

const Header = () => (
  <div className="fl w-100 tc">
    <h1>
      <Link to="/">
        <img src={svg_logo} alt="Judge Maygarden" />
      </Link>
    </h1>
    <div className="nowrap mid-gray">
      <a className="link dim dib" href="mailto:judge@jmaygarden.com">
        <div className="w2 pv1 pr2">
          {svg_gmail()}
        </div>
      </a>
      <a className="link dim dib" href="https://stackoverflow.com/users/1491/judge-maygarden">
        <div className="w2 pv1 pr2">
          {svg_stackoverflow()}
        </div>
      </a>
      <a className="link dim dib" href="https://github.com/jmaygarden">
        <div className="w2 pv1 pr2">
          {svg_github()}
        </div>
      </a>
      <a className="link dim dib" href="http://www.linkedin.com/in/judgemaygarden">
        <div className="w2 pv1 pr2">
          {svg_linkedin()}
        </div>
      </a>
      <a className="link dim dib" href="https://twitter.com/JudgeMaygarden">
        <div className="w2 pv1 pr2">
          {svg_twitter()}
        </div>
      </a>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div className="helvetica mid-gray">
    <Helmet
      title="Judge Maygarden"
      meta={[
        { name: 'description', content: 'Judge Maygarden' },
        { name: 'keywords', content: 'software, engineering' },
      ]}
    />
    <div className="cf">
      <Header />
      <div className="fl w-100">
        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
