import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Browse from "./pages/Browse";
import { useState } from "react";

function App() {
  const [user] = useState({
    name: "ayberk ",
    id: 1,
    avatar:
      "https://occ-0-7335-3467.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfjwXqIYd3kCEU6KWsiHSHvkft8VhZg0yyD50a_pHXku4dz9VgxWwfA2ontwogStpj1NE9NJMt7sCpSKFEY2zmgqqQfcw1FMWwB9.png?r=229",
  });

  const [activeProfile, setActiveProfile] = useState(null);
  return (
    <>
      <Switch>
        <Route ecaxt path='/'>
          {user ? <Redirect to='/welcome' /> : <Redirect to='/login' />}
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/welcome'>
          <Welcome setActiveProfile={setActiveProfile} />
        </Route>
        <Route path='/browse'>
          <Browse user={user} activeProfile={activeProfile} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
