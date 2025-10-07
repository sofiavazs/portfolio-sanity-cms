import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'

if (!process.env.SANITY_STUDIO_PROJECT_ID) {
  throw new Error(
    'Missing Sanity project id. Please add SANITY_STUDIO_PROJECT_ID to your .env.local',
  )
}

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
