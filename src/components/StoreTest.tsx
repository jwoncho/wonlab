// src/components/StoreTest.tsx
import { useStore } from '@nanostores/react';
import { activeDesktop } from '../stores/stores';

export default function StoreTest() {
  const $activeDesktop = useStore(activeDesktop);
  return <div data-testid="store-test">activeDesktop: {$activeDesktop}</div>;
}
