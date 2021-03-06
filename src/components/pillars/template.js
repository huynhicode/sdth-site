import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

import { PillarInfo, LeadsSection, PillarSection } from './styles'

const PillarTemplate = ({ data, icon }) => (
  <div style={{margin: '0 auto', maxWidth: '1200px'}}>
    <PillarInfo>
      <Img fluid={icon.childImageSharp.fluid} />
      <div>
        <h1>{data.pageTitle}</h1>
        <aside>Pillar of Excellence</aside>
      </div>
    </PillarInfo>

    <PillarSection>
      <h2>Purpose</h2>
      <div dangerouslySetInnerHTML={{ __html: data.purpose }} />
    </PillarSection>

    <PillarSection>
      <h2>How do we challenge to status quo?</h2>
      <div dangerouslySetInnerHTML={{ __html: data.challenge }} />
    </PillarSection>

    {data.leads && data.leads[0].name.length > 0 && (
      <LeadsSection>
        <h2>Pillar Leads</h2>
        {data.leads.map((lead, i) => (
          <div key={i} className="lead">
            <div>
              <img
                src={require(`../../images/${lead.photo}.jpg`)}
                width="250"
                alt={lead.name}
                style={{ borderRadius: '100%' }}
              />
              <div>
                <span>{lead.name}</span>
                <span className="email">{lead.email}</span>
              </div>
            </div>
            <span style={{ padding: '.5rem' }}>
              <h5>Biography</h5>
              <div dangerouslySetInnerHTML={{ __html: lead.bio }} />
            </span>
          </div>
        ))}
      </LeadsSection>
    )}

    {/* <section>>
      <h2>Goals</h2>
      <div dangerouslySetInnerHTML={{ __html: data.goals }} />
    </section> */}
  </div>
)

PillarTemplate.propTypes = {
  data: PropTypes.object,
}

export default PillarTemplate
