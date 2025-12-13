import React from 'react'
import ContactPage from './ContactPage'
import { createMetadata } from '@/app/utils/metaTags';


export const metadata = createMetadata({
  title: "Contact ",
  description: "Contact page description ",
  endpoint: "contact",
  siteName: "contact",
});

const Contact = () => {
  return (
    <ContactPage/>
  )
}

export default Contact