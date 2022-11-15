import { SafeAreaView } from 'react-native';
import GameBoard from './components/GameBoard';
import store from './store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <GameBoard/>
      </Provider>
    </SafeAreaView>
  );
}
