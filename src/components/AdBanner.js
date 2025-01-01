import React, { useEffect } from 'react';

/* global adsbygoogle */ // Declara adsbygoogle como uma variável global

const AdBanner = () => {
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div style={{ margin: '20px 0' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot="YYYYYYYYYY"
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default AdBanner;
