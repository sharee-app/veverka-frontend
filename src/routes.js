import Homepage from './Home.svelte';
import Profile from './Profile.svelte';
import SignIn from './SignIn.svelte';

const routes = [
  {
    name: '/',
    component: Homepage,
  },
  {
    name: 'profile',
    component: Profile,
  },
  {
    name: 'login',
    component: SignIn,
  },
];

export { routes };
