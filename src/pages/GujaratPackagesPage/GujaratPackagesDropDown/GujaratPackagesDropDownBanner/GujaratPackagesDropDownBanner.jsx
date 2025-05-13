import React from 'react';
import { useParams } from 'react-router-dom';
import { Banner } from '../../../../components/Banner/Banner'; 

const GujaratPackagesDropDownBanner = () => {
  const { pathName } = useParams();

  if (!pathName) return null;

  const title = pathName
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div>
      <Banner Title={title} />
    </div>
  );
};

export default GujaratPackagesDropDownBanner;
