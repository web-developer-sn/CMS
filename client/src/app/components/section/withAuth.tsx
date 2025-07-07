import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Wrapper: React.FC = (props) => {
    const router = useRouter();
    
    useEffect(() => {
      const token = localStorage.getItem('token'); // Check for token in localStorage
      if (!token) {
        router.push('/login'); // Redirect if no token
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
