import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <header style={{ padding: '1rem', background: '#333', color: 'white' }}>
        <h2>My Gaming Marketplace</h2>
        <nav>
          {/* Navigation links will go here later */}
        </nav>
      </header>

      {/* The Outlet is where your pages (like Home) will render */}
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}