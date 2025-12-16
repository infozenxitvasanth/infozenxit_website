import React from 'react'
import AboutPage from './AboutPage'
import { createMetadata } from '@/app/utils/metaTags';


export const metadata = createMetadata({
  title: "InfoZenX IT - Business Website & App Solutions",
  description: "AProfessional IT services, web development, mobile apps, and digital transformation solutions",
  endpoint: "about",
  siteName: "InfoZenX IT - Business Website & App Solutions",
});

const About = () => {
  return (
   <AboutPage/>
  )
}

export default About