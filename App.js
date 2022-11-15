import { SafeAreaView } from 'react-native';
import Player from './components/Player';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <Player />
      </Provider>
    </SafeAreaView>
  );
}
