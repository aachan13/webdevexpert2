import Food from '../views/pages/food';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Food, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;