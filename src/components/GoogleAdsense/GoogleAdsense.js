import React from 'react';

export default class GoogleAdsense extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
        return (
            <div className='ad'>
                  {/* my_first_ad */}
                <ins className='adsbygoogle'
                    style={{ display: 'block' }}
                    data-ad-client='ca-pub-6465808802652675'
                    data-ad-slot='5319325699'
                    data-ad-format='auto'
                    data-full-width-responsive="true"></ins>

            </div>  

      );

  }
}