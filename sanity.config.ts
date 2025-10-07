import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas/schema'

if (!process.env.SANITY_PROJECT_ID) {
  throw new Error('Missing Sanity project id. Please add it to your environment variables')
}

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
