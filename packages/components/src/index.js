import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 26px;
  color: yellow;
  margin: 0;
  text-align: ${props => props.align || 'left'};
`
