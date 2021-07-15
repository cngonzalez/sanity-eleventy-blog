export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f05c820a09131094978e0a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-zrcnm1vu',
                  apiId: '6ef0090e-4854-4b72-9c36-b411bce3f30d'
                },
                {
                  buildHookId: '60f05c82e62a150f049889ae',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-6k25ve4g',
                  apiId: '19cb66b4-cc33-477a-8c98-176c46d73413'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cngonzalez/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-6k25ve4g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
