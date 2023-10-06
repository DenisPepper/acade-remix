import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'My Remix App' },
    { name: 'description', content: 'Remix study project' },
  ];
};

export default function Index() {
  return <h1>Hello Remix!</h1>;
}

//Этот компонент будет отрисован по адресу корневого роута /