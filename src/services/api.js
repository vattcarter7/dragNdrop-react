export function loadLists() {
  return [
    {
      title: 'Tasks',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Study NodeJS module 01',
          labels: ['#7159c1'],
          user:
            'https://avatars1.githubusercontent.com/u/56813230?s=460&u=25dde2e9881d6d2640c73e4e85283c050ffa48a9&v=4'
        },
        {
          id: 2,
          content:
            'Create video for Youtube teaching how to create drag and drop',
          labels: ['#7159c1'],
          user:
            'https://avatars1.githubusercontent.com/u/56813230?s=460&u=25dde2e9881d6d2640c73e4e85283c050ffa48a9&v=4'
        },
        {
          id: 3,
          content: 'Study module 03 from React Native',
          labels: ['#7159c1'],
          user:
            'https://avatars1.githubusercontent.com/u/56813230?s=460&u=25dde2e9881d6d2640c73e4e85283c050ffa48a9&v=4'
        },
        {
          id: 4,
          content:
            'Record Class "NextJS: Using server-side rendering with ReactJS"',
          labels: ['#54e1f7'],
          user:
            'https://avatars1.githubusercontent.com/u/56813230?s=460&u=25dde2e9881d6d2640c73e4e85283c050ffa48a9&v=4'
        },
        {
          id: 5,
          content: 'Record tests and deploy ReactJS',
          labels: ['#54e1f7'],
          user:
            'https://avatars1.githubusercontent.com/u/56813230?s=460&u=25dde2e9881d6d2640c73e4e85283c050ffa48a9&v=4'
        }
      ]
    },
    {
      title: 'Doing',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Remake drag and drop',
          labels: [],
          user:
            'https://avatars1.githubusercontent.com/u/56813230?s=460&u=25dde2e9881d6d2640c73e4e85283c050ffa48a9&v=4'
        }
      ]
    },
    {
      title: 'Slow',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Save on Geolocation and Maps with React Native',
          labels: ['#7159c1'],
          user:
            'https://avatars1.githubusercontent.com/u/56813230?s=460&u=25dde2e9881d6d2640c73e4e85283c050ffa48a9&v=4'
        },
        {
          id: 8,
          content: 'Record tests and deploy ReactJS',
          labels: ['#54e1f7'],
          user:
            'https://avatars1.githubusercontent.com/u/56813230?s=460&u=25dde2e9881d6d2640c73e4e85283c050ffa48a9&v=4'
        },
        {
          id: 9,
          content: 'Unform library settings',
          labels: []
        }
      ]
    },
    {
      title: 'Done',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Record class on deploy and CI with React Native',
          labels: []
        },
        {
          id: 12,
          content: 'Record tests and deploy ReactJS',
          labels: ['#54e1f7']
        },
        {
          id: 13,
          content:
            'Record Class "Internationalization of Node.js, ReactJS and React Native applications"',
          labels: ['#7159c1']
        }
      ]
    }
  ];
}
