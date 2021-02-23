/*
 * Now it would be great to have our title
 * and subtitle in a header component.
 *
 * This should be a styled-component!
 *
 * Don't forget to import 'styled-components/macro'!
 */

 import AppHeader from './AppHeader'
 import styled from 'styled-components/macro'
 import Button from './Button'

export default function App() {
  return (
    <div>
      <AppHeader title="Hi Hacker" subtitle="How is it going?" />
      <Button>Button</Button>
    </div>
  )
}

const FilterButton = styled(Button)`
background-color: white;
color: darkturquoise;
`