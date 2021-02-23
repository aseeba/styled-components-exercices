import styled from 'styled-components/macro'

export default function AppHeader({ title, subtitle }) {
  return (
    <Header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </Header>
  )
}

const Header = styled.header`
  background-color: darkturquoise;
  color: white;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
`