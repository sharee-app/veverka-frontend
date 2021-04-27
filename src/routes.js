import Homepage from './Home.svelte';
import Profile from './Profile.svelte';

const routes = [
  {
    name: '/',
    component: Homepage,
  },
  {
    name: 'profile',
    component: Profile,
  },
];

export { routes };
