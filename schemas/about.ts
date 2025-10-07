import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
    }),
    defineField({
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({name: 'tech', title: 'Tech', type: 'array', of: [{type: 'string'}]}),
  ],
})
