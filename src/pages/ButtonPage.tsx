import React from 'react';
import Button from '../components/Button';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';

const ButtonPage = () => {
  return (
    <div>
      <h1 className='title'>Button</h1>

      <section className='section-container'>
        <Button
          label='Button'
          startIcon={ArrowLeftIcon}
          endIcon={ArrowRightIcon}
        />
      </section>

      <section className='section-container'>
        <Button
          label='Button'
          variant='secondary'
          startIcon={ArrowLeftIcon}
          endIcon={ArrowRightIcon}
        />
      </section>

      <section className='section-container'>
        <Button
          label='Button'
          variant='tertiary'
          startIcon={ArrowLeftIcon}
          endIcon={ArrowRightIcon}
        />
      </section>
    </div>
  );
};

export default ButtonPage;
