import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Menu from './components/Menu';

// Layout component with Header and Footer
function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

// Home page component
function HomePage() {
  return (
    <>
      <Hero />
      <MenuHighlights />
      <ReservationForm />
    </>
  );
}

// Create root route with layout
const rootRoute = createRootRoute({
  component: Layout,
});

// Create home route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

// Create menu route
const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/menu',
  component: Menu,
});

// Create gallery route
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: Gallery,
});

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute, menuRoute, galleryRoute]);

// Create router
const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
