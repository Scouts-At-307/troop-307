// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Troop 307',
  siteDescription: 'Boy Scout Troop chartered by Saxe Gotha Presbyterian Church in Lexington, South Carolina.',

  siteUrl: 'https://scoutsat307.sly.io',

  templates: {
    MarkdownPage: '/:slug',
    Post: '/posts/:title',
    Tag: '/tag/:id',
  },

  plugins: [
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin',
        htmlTitle: 'Admin - Troop 307',
        modulePath: 'src/admin/index.js',
      },
    },
    {
      // Create pages from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'MarkdownPage',
        path: 'content/pages/*.md',
      },
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        pathPrefix: '/posts',
        coverField: 'cover_image',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
    {
      // Create forms from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Form',
        path: 'content/forms/*.md',
        coverField: 'cover_image',
      },
    },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: { 
        contentTypes: ['Form', 'Post'],
      },
    },
  ],

  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
      ],
    },
  },
};
