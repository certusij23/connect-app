import React from 'react'

function ProjectWireframes(props) {
  const s = props.size
  return (
    <svg className="Icon ProjectWireframes" width={s} height={s} viewBox="0 0 64 60">
      <g fill="none" stroke={props.color} strokeWidth="2" strokeMiterlimit="10">
        <path d="M56 47a7 7 0 1 0-7-7V8H1v39h55z"/>
        <path d="M63 40V8a7 7 0 1 0-14 0M56 12v2M56 16v2M56 20v2M1 51h62v8H1zM11 59v-3M15 59v-3M19 59v-3M23 59v-3M27 59v-3M31 59v-3M35 59v-3M39 59v-3M43 59v-3M47 59v-3M51 59v-3M55 59v-3M59 59v-3M4 55h2M5 13h4M23 13h4M17 13h4M29 13h4M35 13h4M41 13h4M6 17h38v7H6zM6 28h10v6H6zM20 28h10v6H20zM34 28h10v6H34zM5 38h12M5 42h12M19 38h12M19 42h12M33 38h12M33 42h12"/>
      </g>
    </svg>
  )
}

export default ProjectWireframes
