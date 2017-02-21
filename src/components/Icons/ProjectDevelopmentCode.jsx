import React, { PropTypes as PT } from 'react'

function ProjectDevelopmentCode(props) {
  const c = props.color
  const s = props.size
  return (
    <svg className="Icon ProjectDevelopmentCode" width={s} height={s} viewBox="0 0 64 64">
      <g fill="none" stroke={c} strokeWidth="2" strokeMiterlimit="10">
        <path d="M30 40c0 1.656-1.344 3-3 3h-1c-1.656 0-3-1.344-3-3v-8c0-1.656 1.344-3 3-3h1c1.656 0 3 1.344 3 3v8zM41 40c0 1.656-1.344 3-3 3h-4V32v-3h4c1.656 0 3 1.344 3 3v8zM53 43h-7a1 1 0 0 1-1-1V30a1 1 0 0 1 1-1h7M45 36h6M19 40v1a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V31a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1"/>
        <path d="M1 1h62v62H1zM1 9h62M4 5h2M8 5h2M12 5h2M17 1v8M20 5h40"/><path d="M5 13h54v46H5zM27 23h2M31 23h2M35 23h2M27 49h2M31 49h2M35 49h2"/>
      </g>
    </svg>
  )
}

ProjectDevelopmentCode.defaultProps = {
  color: 'black',
  size: 64
}

ProjectDevelopmentCode.propTypes = {
  color: PT.string,
  size: PT.oneOfType([ PT.number, PT.string ])
}

export default ProjectDevelopmentCode
