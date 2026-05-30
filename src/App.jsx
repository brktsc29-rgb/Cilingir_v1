import { Routes, Route } from 'react-router-dom';
import CilingirLandingView from './CilingirLandingView';
import EnLandingView from './EnLandingView';
import DistrictPage from './DistrictPage';
import { ALL_PAGES } from './districts';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CilingirLandingView />} />
      <Route path="/en" element={<EnLandingView />} />
      {ALL_PAGES.map(p => (
        <Route key={p.path} path={`/${p.path}`} element={<DistrictPage page={p} />} />
      ))}
      <Route path="*" element={<CilingirLandingView />} />
    </Routes>
  );
}
