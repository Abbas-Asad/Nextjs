import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skHIZMnhlOQ8MSViPOUHJTYcEH1sPvMw3VUIhJEvO3U1G63gWZzweRZteSXFuROU1bzTUZrSTZPqqkuqFL863VPSl9ylbUI0ZpsP8Ke7Au27ajyy8cEHk4O6KQEiaA9THwSYydE42R2a9VUp2U5vtEEjx2BDGReqkuq2jgRm2Pgr0DY1fzRh"
})
