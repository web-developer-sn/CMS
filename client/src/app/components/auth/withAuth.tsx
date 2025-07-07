"use client";
import { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation";

type WithAuthProps = {
  [key: string]: any;
};

const withAuth = <P extends WithAuthProps>(WrappedComponent: ComponentType<P>) => {
  const HOC = (props: P) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {

      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
    }, [router]);

    if (isAuthenticated === null) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withAuth;
