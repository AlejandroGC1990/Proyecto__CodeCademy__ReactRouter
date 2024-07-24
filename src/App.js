import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Root from "./components/root";

// create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index path="" element={<HomePage />} />
      <Route path=":type" element={<HomePage />} />
      <Route path=":type/:id" element={<PetDetailsPage />} />
    {/* <Route path="" element={} />  */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
