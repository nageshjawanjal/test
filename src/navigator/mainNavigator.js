import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '@home/Home';
import MovieList from '@movieList/MovieList';
import MovieDetails from '@movieDetails/MovieDetails';

import {HOME_KEY, MOVIE_LIST_KEY, MOVIE_DETAILS_KEY} from '@abcd/Routes';

const AppNavigator = createStackNavigator({
  [HOME_KEY]: {
    screen: Home,
  },
  [MOVIE_LIST_KEY]: {
    screen: MovieList,
  },
  [MOVIE_DETAILS_KEY]: {
    screen: MovieDetails,
  },
},
{
  headerMode:'none',
  initialRouteName:HOME_KEY
}
);

export default createAppContainer(AppNavigator);