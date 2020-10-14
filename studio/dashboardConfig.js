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
                  buildHookId: '5f869e6f761aa967477072be',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-mcifj7r3',
                  apiId: 'f81b4203-c24b-4939-be07-bef6acacc09b'
                },
                {
                  buildHookId: '5f869e6f30389c65e0277b5f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-43rnsk99',
                  apiId: 'a12d054b-e30c-4575-b102-629d7ca18ea2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zyj1022/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-43rnsk99.netlify.app', category: 'apps'}
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
