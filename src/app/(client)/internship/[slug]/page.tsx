"use client"
import { useParams } from 'next/navigation'
import FeaturesAndForm from '../../components/FeaturesAndForm'

const InternshipProgramPage = () => {
    let params =useParams()
  return (
    <div>InternshipProgramPage {params.slug}
    <FeaturesAndForm/>
    </div>
  )
}

export default InternshipProgramPage