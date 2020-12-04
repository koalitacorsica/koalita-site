export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fca57fd2f922f00cb032439',
                  title: 'Sanity Studio',
                  name: 'koalita-site-studio',
                  apiId: '9a5e3987-1720-47e2-85c3-63b4b903f149'
                },
                {
                  buildHookId: '5fca57fd2b7eb50089bd3536',
                  title: 'Blog Website',
                  name: 'koalita-site',
                  apiId: 'e258da57-a7e2-48d4-87f6-815bae47a778'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/koalitacorsica/koalita-site',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://koalita-site.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
