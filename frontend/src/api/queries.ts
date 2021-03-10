import { useQuery, gql } from '@apollo/client';

export const FACILITIES_QUERY = gql`
  {
    allCanonicalFacilities {
      nodes {
        createdAt
        hidden
        hifldid
        id
        hidden
        longitude
        latitude
        hifldByHifldid {
          capacity
          city
          country
          county
          countyfips
          zip
          status
          telephone
          state
          population
          name
          sourcedate
          source
        }
        companyFacilitiesByCanonicalFacilityId {
          nodes {
            id
            facilityInternal
            company
            ratesByCompanyFacilityId {
              nodes {
                amountAdditional
                amountInitial
                company
                durationAdditional
                durationInitial
                inState
                notes
                pctTax
                phone
                service
                uid
                updated
              }
            }
          }
        }
      }
    }
  }
`;
