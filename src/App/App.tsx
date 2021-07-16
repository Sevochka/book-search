import 'App/styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStores';
import { useEffect } from 'react';
import routes from 'routes';
import { ConfigurationPart } from 'components/ConfigarationPart/ConfigurationPart';

const App = observer(() => {
  const { bookStore } = useStores();
  useEffect(() => {
    bookStore.setBooks();
  }, [bookStore]);

  const routesComponents = routes.map((route) => (
    <Route {...route} key={route.path} />
  ));
  return (
    <div className="App">
      <ConfigurationPart className="configuration" />
      <Router>
        <Switch>{routesComponents}</Switch>
      </Router>
    </div>
  );
});

export { App };
