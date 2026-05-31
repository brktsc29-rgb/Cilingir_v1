import React, { Suspense, lazy } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import CilingirLandingView from './CilingirLandingView';
import { ALL_PAGES } from './districts';
import { BG } from './shared';

const EnLandingView  = lazy(() => import('./EnLandingView'));
const DistrictPage   = lazy(() => import('./DistrictPage'));
const BlogListView   = lazy(() => import('./BlogListView'));
const BlogPostView   = lazy(() => import('./BlogPostView'));
const FiyatlarView   = lazy(() => import('./FiyatlarView'));
const NotFoundView   = lazy(() => import('./NotFoundView'));

const Fallback = () => (
  <div style={{ background: BG, minHeight: '100vh' }} />
);

function BlogPostRoute() {
  const { slug } = useParams();
  return <BlogPostView slug={slug} />;
}

export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<CilingirLandingView />} />
        <Route path="/en" element={<EnLandingView />} />
        <Route path="/fiyatlar" element={<FiyatlarView />} />
        <Route path="/blog" element={<BlogListView />} />
        <Route path="/blog/:slug" element={<BlogPostRoute />} />
        {ALL_PAGES.map(p => (
          <Route key={p.path} path={`/${p.path}`} element={<DistrictPage page={p} />} />
        ))}
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Suspense>
  );
}
