/*
 * Now it would be great to have our title
 * and subtitle in a header component.
 *
 * This should be a styled-component!
 *
 * Don't forget to import 'styled-components/macro'!
 */

 import AppHeader from './AppHeader'
 import Button from './Button'
 import { useState } from 'react'

export default function App() {
  const [isVisible, setIsVisible] = useState(true)
  
  return (
    <div>
      <AppHeader 
      isVisible={isVisible}
      title={'Hi Hacker!'} 
      subtitle={'How is it going?'} 
      />
      <Button onClick={() => setIsVisible(!isVisible)}>Click me!</Button>
    </div>
  )
}