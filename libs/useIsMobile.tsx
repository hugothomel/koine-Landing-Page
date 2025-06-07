'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const isClient = typeof window === 'object';

export const useIsMobile = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(isClient && window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [pathname]);

  return isMobile;
};

export const useIsSmallMobile = () => {
  const pathname = usePathname();
  const [isSmallMobile, setIsSmallMobile] = useState(isClient && window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      const newIsSmallMobile = window.innerWidth <= 480;
      setIsSmallMobile(newIsSmallMobile);
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [pathname]);

  return isSmallMobile;
};

export const useIsVerySmallMobile = () => {
  const pathname = usePathname();
  const [isVerySmallMobile, setIsVerySmallMobile] = useState(isClient && window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      const newIsVerySmallMobile = window.innerWidth <= 375;
      setIsVerySmallMobile(newIsVerySmallMobile);
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [pathname]);

  return isVerySmallMobile;
};
