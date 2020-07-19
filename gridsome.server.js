// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type Post implements Node {
        id: ID!
        title: String
        date: Date
        timeToRead: String
        description: String
        cover_image: Image
        path: String
        tags: [Tag]
      }
    `)
  });
  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type MarkdownPage implements Node {
        id: ID!
        title: String
        slug: String
      }
    `)
  });
  api.loadSource(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type Form implements Node {
        id: ID!
        title: String
        content: String
        cover_image: Image
        buttons: [Form_Buttons]
      }
      type Form_Buttons {
        label: String
        link: String
      }
    `)
  });
}