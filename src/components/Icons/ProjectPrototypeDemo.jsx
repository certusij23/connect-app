import React, { PropTypes as PT } from 'react'

function ProjectPrototypeDemo(props) {
  const c = props.color
  const s = props.size
  return (
    <svg className="Icon ProjectDemo" width={s} height={s} viewBox="0 0 64 64">
      <path fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" d="M15 7h36M15 57h36M15 30v28a5 5 0 0 0 5 5h26a5 5 0 0 0 5-5V48M51 20V6a5 5 0 0 0-5-5H20a5 5 0 0 0-5 5v4M51 34v-8M21 21H6l-5 5V13h20z"/>
      <path fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" d="M63 45H35v-8h23l5-5zM6 17h2M10 17h2M14 17h2M40 41h12M54 41h4M19 49h4v4h-4zM27 49h4v4h-4zM35 49h4v4h-4zM43 49h4v4h-4z"/>
      <circle cx="33" cy="27" r="6" fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10"/>
      <path fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" d="M32 41H19V30M47 26v8M24 13h23v7M18 45h2M22 45h2M26 45h2M30 45h2M42 23h22M64 17H54M64 13H54"/>
      <path d="M7 38v-9a2 2 0 0 1 2-2h15" fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10"/>
      <circle cx="7" cy="45" r="4" fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10"/>
      <path fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" d="M44 27h-2M24 38h-2M26 17h-2M4 53h2M8 53h2"/>
    </svg>
  )
}

ProjectPrototypeDemo.defaultProps = {
  color: 'black',
  size: 64
}

ProjectPrototypeDemo.propTypes = {
  color: PT.string,
  size: PT.oneOfType([ PT.number, PT.string ])
}

export default ProjectPrototypeDemo
