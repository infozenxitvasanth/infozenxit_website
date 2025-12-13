import React from 'react'
import AboutPage from './AboutPage'
import { createMetadata } from '@/app/utils/metaTags';


export const metadata = createMetadata({
  title: "About — MySite",
  description: "About page description ",
  endpoint: "about",
  siteName: "MySite",
});

const About = () => {
  return (
   <AboutPage/>
  )
}

export default About