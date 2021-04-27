import Homepage from './Home.svelte';
import Profile from './Profile.svelte';
import SignIn from './SignIn.svelte';

const isUserLoggedIn = () => {
    return true;
};

const routes = [
  {
    name: '/',
    component: Homepage,
  },
  {
    name: 'profile',
    component: Profile,
    onlyIf: { guard: isUserLoggedIn, redirect: '/login' },
  },
  {
    name: 'login',
    component: SignIn,
  },
  {
    name: "/:username",
    component: Profile
  }
];

export { routes };
