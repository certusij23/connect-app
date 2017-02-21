import React, { PropTypes as PT } from 'react'

function ProjectDevelopmentIdeation(props) {
  const c = props.color
  const s = props.size
  return (
    <svg className="Icon ProjectDevelopmentIdeation" width={s} height={s} viewBox="0 0 64 64">
      <g fill="none" stroke={c} strokeWidth="2" strokeMiterlimit="10">
        <circle cx="32" cy="26" r="9"/>
        <path d="M22 44h20M22 48h20M22 52h6l2 3h4l2-3h6"/>
        <path d="M39 52V39c5-2 8-7.101 8-13 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 5.965 3 11 8 13v13"/>
        <path d="M20 26h6l4-4 4 8 4-4h6"/>
        <path d="M27 6l5-5C18.753 1 7.446 9.309 3.008 21M58 27l5 5c0-13.248-8.311-24.555-20.003-28.993M37 58l-5 5c13.247 0 24.554-8.309 28.992-20M6 37l-5-5c0 13.246 8.308 24.552 19.997 28.991"/>
      </g>
    </svg>
  )
}

ProjectDevelopmentIdeation.defaultProps = {
  color: 'black',
  size: 64
}

ProjectDevelopmentIdeation.propTypes = {
  color: PT.string,
  size: PT.oneOfType([ PT.number, PT.string ])
}

export default ProjectDevelopmentIdeation
