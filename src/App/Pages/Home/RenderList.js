import React from 'react'
import styled from 'styled-components'

const StyledLi = styled.li`
  font-size: 1.2rem;
  list-style: circle;
  padding-bottom: 1rem;
  &:hover {
    color: #848484;
  }
`

const RenderList = ({ data }) => {
  return <ul>{data && data.map((item) => <StyledLi key={item.id}>{item.name}</StyledLi>)}</ul>
}

export default RenderList
