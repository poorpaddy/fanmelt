import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import { Container } from './Styled'

export const Header = () => {
  const [additionalClass, setAdditionalClass] = useState('')
  useEffect(() => {
    window.addEventListener("scroll", checkHeader);

    return () => {
      window.removeEventListener("scroll", checkHeader);
    };
  }, [])

  const checkHeader = _.throttle(() => {
    console.log("checkHeader");

    // Detect scroll position
    let scrollPosition = Math.round(window.scrollY);

    // If we've scrolled 100px, add "sticky" class to the header
    if (scrollPosition > 100) setAdditionalClass('sticky')
    else setAdditionalClass('')
  }, 300);

  return (
    <Container className={additionalClass}>
      <img src="https://d3el26csp1xekx.cloudfront.net/staticDir/logo_icon_color_2019.svg" width="30" height="30" />

      <div className="nav">
        <div>Signup</div>
        <div>Login</div>
      </div>
    </Container>
  );
}