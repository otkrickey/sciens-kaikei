import { useEffect, useState } from "react";
import * as Realm from "realm-web";

export function useApp() {
  const [app, setApp] = useState<Realm.App>();
  const [isLoading, setIsLoading] = useState(true);
  // Run in useEffect so that App is not created in server-side environment
  const APP_ID = process.env.NEXT_PUBLIC_APP_ID;
  if (!APP_ID) {
    throw new Error(
      "NEXT_PUBLIC_APP_ID must be defined in your .env.local file"
    );
  }
  useEffect(() => {
    try {
      const realmApp = Realm.getApp(APP_ID);
      setApp(realmApp);
    } catch (error) {
      console.error("Error initializing Realm App:", error);
    } finally {
      setIsLoading(false); // ローディング完了
    }
  }, [APP_ID]);
  return { app, isLoading };
}
