import { Suspense, lazy } from "react";

const LazySaltBadge = lazy(() => import('./SaltBadge'))

const LazyLoadedSaltbadge = () => (
  <Suspense fallback={'Loading salt badge...'}>
      <LazySaltBadge />
  </Suspense>
)

export default LazyLoadedSaltbadge