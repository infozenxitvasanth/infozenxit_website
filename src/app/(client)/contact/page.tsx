import React from 'react'
import ContactPage from './ContactPage'
import { createMetadata } from '@/app/utils/metaTags';



export const metadata = createMetadata({
  title: "InfoZen IT - Business Website & App Solutions",
  description: "AProfessional IT services, web development, mobile apps, and digital transformation solutions",
  endpoint: "contact",
  siteName: "InfoZen IT - Business Website & App Solutions",
});

const Contact = () => {
  return (
    <ContactPage/>
  )
}

export default Contact