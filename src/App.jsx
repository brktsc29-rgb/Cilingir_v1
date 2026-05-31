import { Routes, Route, useParams } from 'react-router-dom';
import CilingirLandingView from './CilingirLandingView';
import EnLandingView from './EnLandingView';
import DistrictPage from './DistrictPage';
import BlogListView from './BlogListView';
import BlogPostView from './BlogPostView';
import { ALL_PAGES } from './districts';

function BlogPostRoute() {
  const { slug } = useParams();
  return <BlogPostView slug={slug} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CilingirLandingView />} />
      <Route path="/en" element={<EnLandingView />} />
      <Route path="/blog" element={<BlogListView />} />
      <Route path="/blog/:slug" element={<BlogPostRoute />} />
      {ALL_PAGES.map(p => (
        <Route key={p.path} path={`/${p.path}`} element={<DistrictPage page={p} />} />
      ))}
      <Route path="*" element={<CilingirLandingView />} />
    </Routes>
  );
}
