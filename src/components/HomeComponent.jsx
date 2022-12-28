import React from 'react'
import Base from './layout/Base'
import HeroComponent from './HeroComponent'
import BecameSectionComponent from './BecameSectionComponent'
import AboutUsSectionComponent from './AboutUsSectionComponent'
import PartnerSectionComponent from './PartnerSectionComponent'

function HomeComponent () {
  return (
    <Base>
      <HeroComponent />
      <BecameSectionComponent />
      <AboutUsSectionComponent />
      <PartnerSectionComponent />
    </Base>
  )
}

export default HomeComponent
