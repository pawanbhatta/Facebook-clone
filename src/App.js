import './App.css';
import {Header, Feed, SidebarLeft, Widgets, Login} from './Components';
import {useStateValue} from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  console.log('user', user);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header profile="https://www.pawanbhatta.com.np/wp-content/uploads/2020/08/pawan.v1-1017x1024.jpg" />

          <div className="app__body">
            <SidebarLeft />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
