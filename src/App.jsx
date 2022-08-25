//Tailwind
//react router dom
// formik
// yup
//json-server - npm

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import LogIn from './layout/login/LogIn';
import EditClient from './layout/page/EditClient';
import Machining from './layout/page/Machining';

import Starting from './layout/page/Starting';
import NewClient from './layout/page/NewClient';
import ShowRemovable from './layout/page/ShowRemovable';
import ShowFixed from './layout/page/ShowFixed';
import ShowClient from './layout/page/ShowClient';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}>
          <Route index element={<Starting />} />
        </Route>

        <Route path="/clients" element={<Layout />}>
          <Route index element={<NewClient />} />
          <Route path="showremovable" element={<ShowRemovable />} />
          <Route path="showfixed" element={<ShowFixed />} />
          <Route path="machining" element={<Machining />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path=":id" element={<ShowClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
