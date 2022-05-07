import React, { FC } from 'react';
import './styles.css';

interface ListInfoItemProps {
  label: string;
  value?: string;
}

const ListInfoItem: FC<ListInfoItemProps> = ({ label, value }) => {
  return (
    <>
      {value ? (
        <p data-testid="list-info-item" className="weather__key">
          {' '}
          {label}:
          <span data-testid="list-info-item-label" className="weather__value">
            {' '}
            {value}
          </span>
        </p>
      ) : null}
    </>
  );
};

export default ListInfoItem;
