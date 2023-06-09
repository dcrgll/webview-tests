'use client';

import isWebview from 'is-ua-webview';
import { useEffect, useState } from 'react';

export default function Home() {
  const [webview, setWebview] = useState(false);

  useEffect(() => {
    setWebview(isWebview(window.navigator.userAgent));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {webview ? (
        <h1>Webview</h1>
      ) : (
        <h1>
          <span className="underline">Not</span>Webview
        </h1>
      )}
    </main>
  );
}
