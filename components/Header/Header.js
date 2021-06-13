import React from 'react';
import Link from 'next/link';
import { HeaderWrapper, MenuButton, Logo, CartButton } from './styles';

const Header = () => (
  <HeaderWrapper>
    <MenuButton>
      <i />
      <i />
      <i />
    </MenuButton>
    <Logo>
      <Link href="/">
        <a>
          <svg fill="#6415B7" height="13" viewBox="0 0 136 13" width="136" xmlns="http://www.w3.org/2000/svg"><path d="M103.968.001c3.93 0 6.752 2.868 6.752 6.413v.036c0 3.545-2.858 6.449-6.788 6.449s-6.75-2.868-6.75-6.414l-.001-.035c0-3.545 2.857-6.449 6.787-6.449zM14.254.215v7.052c0 2.03 1.037 3.08 2.747 3.08s2.747-1.014 2.747-2.991V.217h2.801V7.25c0 3.776-2.165 5.627-5.584 5.627-3.42 0-5.511-1.87-5.511-5.538V.215h2.8zm65.878-.18c1.74 0 3.24.501 4.485 1.4l.245.186-1.455 2.067c-1.128-.767-2.238-1.23-3.312-1.23-1.01 0-1.569.426-1.631.981l-.006.106v.035c0 .82.545 1.087 2.747 1.64 2.498.636 3.94 1.506 4.034 3.527l.005.213v.037c0 2.476-1.928 3.866-4.676 3.866a8.32 8.32 0 0 1-4.131-1.09 1.26 1.26 0 0 1-.684-1.118c0-.702.58-1.27 1.296-1.27.189 0 .375.041.545.12l.125.065c.885.546 1.824.869 2.904.869 1.082 0 1.76-.397 1.832-1.056l.006-.119v-.036c0-.696-.436-1.051-2.566-1.586-2.486-.622-4.117-1.293-4.216-3.585l-.005-.227v-.035c0-2.263 1.856-3.76 4.458-3.76zM24.95.216h5.811c1.616 0 2.869.445 3.704 1.262.657.644 1.034 1.534 1.084 2.597l.006.248v.035c0 1.875-.917 3.063-2.353 3.706l-.19.081 1.943 2.31c.272.339.455.623.455 1.05 0 .765-.654 1.261-1.326 1.261-.578 0-.976-.249-1.289-.601l-.091-.109-2.725-3.378h-1.17V6.26h1.77c1.301 0 2.07-.647 2.138-1.619l.005-.141v-.035c0-1.12-.762-1.722-2.016-1.774l-.182-.004h-2.778V11.4c0 .764-.617 1.368-1.398 1.368-.735 0-1.325-.535-1.392-1.235l-.006-.133V.216h5.811zm93.648 0c1.616 0 2.869.445 3.704 1.262.709.694 1.09 1.672 1.09 2.845v.035c0 1.957-.999 3.165-2.543 3.787l1.944 2.31c.272.339.454.623.454 1.05 0 .765-.655 1.261-1.327 1.261-.635 0-1.053-.301-1.38-.71l-2.723-3.378h-1.173V6.26h1.772c1.363 0 2.143-.71 2.143-1.76v-.035c0-1.173-.836-1.778-2.197-1.778h-2.779V11.4c0 .764-.617 1.368-1.398 1.368-.78 0-1.397-.604-1.397-1.368V.216zM92.723 3.782l-.001 7.614c0 .757-.626 1.371-1.4 1.371-.773 0-1.4-.614-1.4-1.371h-.001V3.782h2.802zM0 .216h5.202c2.954 0 4.772 1.667 4.87 4.099l.005.21v.036c0 2.807-2.17 4.3-4.917 4.378l-.23.003H3.863v-2.44H5.02c1.337 0 2.144-.746 2.215-1.743l.005-.144v-.036c0-1.175-.8-1.83-2.094-1.884l-.18-.004H2.801L2.8 11.396c0 .758-.626 1.371-1.4 1.371-.728 0-1.326-.62-1.394-1.323L0 11.31V.216h5.202zm37.646 0h5.203c2.954 0 4.772 1.666 4.87 4.099l.005.21v.036c0 2.807-2.17 4.3-4.918 4.378l-.23.003H41.51v-2.44h1.155c1.338 0 2.144-.746 2.215-1.743l.005-.144v-.036c0-1.175-.8-1.83-2.094-1.884l-.18-.004h-2.164l-.001 8.705c0 .758-.626 1.371-1.4 1.371-.728 0-1.326-.62-1.394-1.323l-.006-.133V.216h5.203zm97.417 0v2.44h-6.821v7.586h5.575c.688 0 1.246.545 1.246 1.22 0 .674-.558 1.22-1.246 1.22h-8.357L125.459.216h9.604zm-65.313 0v2.44h-6.822v7.586h5.575c.688 0 1.247.545 1.247 1.22a1.23 1.23 0 0 1-1.12 1.214l-.127.006h-8.358V.216h9.605zm-17.608 0v9.972l5.075-.001c.704 0 1.274.559 1.274 1.247 0 .646-.502 1.176-1.144 1.24l-.13.006h-7.875V.216h2.8zm51.79 2.314c-2.256 0-3.82 1.746-3.82 3.884v.036c0 2.138 1.6 3.92 3.856 3.92 2.257 0 3.822-1.747 3.822-3.885V6.45c0-2.138-1.601-3.92-3.858-3.92zM63.99 5.185h4.115c.689 0 1.247.546 1.247 1.22a1.23 1.23 0 0 1-1.12 1.214l-.127.006H63.99v-2.44h4.115zm65.314 0h4.115c.689 0 1.247.546 1.247 1.22a1.23 1.23 0 0 1-1.119 1.214l-.127.006h-4.116v-2.44h4.115zM96.599.213v2.53H86.045V.213h10.554z" fillRule="nonzero" /></svg>
        </a>
      </Link>
    </Logo>
    <CartButton>
      <Link href="/cart-items">
        <a>
          <img src="./images/icon-cart.svg" alt="장바구니" />
        </a>
      </Link>
    </CartButton>
  </HeaderWrapper>
);

export { Header };
