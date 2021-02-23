import styled from 'styled-components/macro'

export default function AppHeader({ title, subtitle, isVisible }) {
    return (
    <Header isVisible={isVisible}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Header>
  )
}

const Header = styled.header`
  background-color: darkturquoise;
  color: white;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
  width: 100vw;

  p {
  ${(props) => (props.isVisible ? '' : 'display: none;')}
  }
`