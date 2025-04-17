'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap() {
  useEffect(() => {
    const loadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('kakao-map');
        if (!container) return;

        const options = {
          center: new window.kakao.maps.LatLng(37.5384, 126.7369),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        new window.kakao.maps.Marker({
          map,
          position: options.center,
        });
      });
    };

    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script');
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=216f4dec592e079802b6e64affeb8848&autoload=false`;
      script.async = true;
      script.onload = () => {
        if (window.kakao && window.kakao.maps) {
          loadKakaoMap();
        }
      };
      document.head.appendChild(script);
    } else {
      loadKakaoMap();
    }
  }, []);

  return (
    <div
      id="kakao-map"
      style={{ width: '100%', height: '360px', marginTop: '16px', borderRadius: '8px', backgroundColor: '#eee' }}
    />
  );
}
