const GlobalMetaTags = () => {
  return (
    <>
      <title>레버 LEVER - 꿈이 현실이 되는 디지털 마케팅 자동화 솔루션</title>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="LEVER" />
      <meta
        name="description"
        content="매체운영, 소재제작, 성과 측정까지 당신의 디지털 마케팅, 레버가 지원합니다. AI 알고리즘+마케팅 전문가의 도움을 받아보세요. 당신의 광고는 밤낮으로 최적화됩니다."
      />
      <meta
        name="keywords"
        content="디지털마케팅,마케팅자동화,마케팅자동화솔루션,레버,LEVER,매드업,마케팅솔루션,마케팅플랫폼,퍼포먼스마케팅,마케팅대행,광고대행업체,소상공인마케팅,스타트업마케팅"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="레버 LEVER - 꿈이 현실이 되는 디지털 마케팅 자동화 솔루션"
      />
      <meta
        property="og:description"
        content="매체운영, 소재제작, 성과 측정까지 당신의 디지털 마케팅, 레버가 지원합니다. AI 알고리즘+마케팅 전문가의 도움을 받아보세요. 당신의 광고는 밤낮으로 최적화됩니다."
      />
      <meta property="og:image" content="https://lever.me/image/lever_new_logo.svg" />
      <meta property="og:url" content="https://lever.me" />

      <link rel="icon" href="./favicon_16.ico" type="image/x-icon" />
      {/* <!-- 사이트 연관채널: START --> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'Person',
            name: '레버 LEVER - 꿈이 현실이 되는 디지털 마케팅 자동화 솔루션',
            url: 'https://lever.me',
            sameAs: [
              'https://www.facebook.com/lever.platform/',
              'https://blog.naver.com/l_e_v_e_r',
              'https://www.instagram.com/lever.me/',
            ],
          }),
        }}
      ></script>
      {/* <!-- 사이트 연관채널: END --> */}

      {/* <!-- Google Tag Manager (GA4)-->*/}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5TMQ39T');`,
        }}
      ></script>
      {/* <!-- End Google Tag Manager -->*/}

      {/* <!-- Google Tag Manager (GA3) -->*/}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-N8B5L58');`,
        }}
      ></script>
      {/* <!-- End Google Tag Manager -->*/}

      {/* <!-- Google One Tap Sign In: Start -->*/}
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      {/* <!-- Google One Tap Sign In: End -->*/}
    </>
  )
}

export default GlobalMetaTags
