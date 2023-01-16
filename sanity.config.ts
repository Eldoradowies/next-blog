import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import Logo from './components/Logo'
import StudioNavbar from './components/StudioNavbar'
import { getDefaultDocumentNode } from './structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  name: 'FutureConnect_Studio',
  title: 'FutureConnect Studio',
  projectId,
  dataset,
  plugins: [deskTool(
    {
    defaultDocumentNode: getDefaultDocumentNode, 
  }
  ), visionTool()],
  schema: {
    types: schemaTypes,
  },
   studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
 theme: myTheme,
})
