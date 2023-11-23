import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import Order from '@/pages/order';
import OrderLog from '@/pages/orderLog';
import { useApp } from '@/components/useApp';
import * as Realm from 'realm-web';

// 販売個数をカウントするアプリ
// MONGODBに登録する
// 過去の注文履歴を表示する
// 過去の注文履歴を削除できるようにする

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  const { app, isLoading } = useApp();
  // note: useEffect runs in the browser but does not run during server-side rendering
  useEffect(() => {
    // If no logged in user, log in
    if (app && !app.currentUser) {
      const anonymousUser = Realm.Credentials.anonymous();
      app.logIn(anonymousUser);
    }
  }, [app, app?.currentUser]);

  return (
    <main className={`flex flex-col items-center justify-center min-h-screen py-2 ${inter.className}`}>
      <Order />
      <OrderLog />
    </main>
  );
}
