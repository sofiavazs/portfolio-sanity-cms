import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dates',
      title: 'Dates',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        defineField({
          name: 'project',
          title: 'Project',
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'dates', title: 'Dates', type: 'string'},
            {name: 'jobTitle', title: 'Role', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
          ],
        }),
      ],
    }),
  ],
})
