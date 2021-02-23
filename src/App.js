/*
 * Now it would be great to have our title
 * and subtitle in a header component.
 *
 * This should be a styled-component!
 *
 * Don't forget to import 'styled-components/macro'!
 */

 import AppHeader from '.AppHeader'

export default function App() {
  return (
    <div>
      <AppHeader title="Hi Hacker" subtitle="How is it going?" />
    </div>
  )
}
