import React, { useEffect, useRef } from 'react';
import './styles/custom-overrides.scss';

const CustomJumpNavStyle = () => {
  const markerRef = useRef(null);

  useEffect(() => {
    const rootContainer = markerRef.current?.closest('.page__account-settings');
    if (!rootContainer) {
      return undefined;
    }

    rootContainer.classList.add('custom-account-page-layout');
    rootContainer.setAttribute('data-plugin-slot-id', 'custom_account_jump_nav_styles_slot');

    return () => {
      rootContainer.classList.remove('custom-account-page-layout');
      rootContainer.removeAttribute('data-plugin-slot-id');
    };
  }, []);

  return <span ref={markerRef} className="d-none" aria-hidden="true" />;
};

export default CustomJumpNavStyle;
