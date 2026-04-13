import React from 'react';
import HelperText from '../components/HelperText';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet ligula scelerisque, auctor odio at, dapibus tellus. Ut et mauris euismod, cursus orci ut, consectetur sem. Praesent et mauris ligula. Nunc vel nisl ac nibh auctor placerat. Vivamus vel sapien nec ante commodo efficitur quis quis nisi. Vestibulum ut volutpat felis. Integer sit amet dictum libero. Cras posuere neque libero, eget fringilla est auctor at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec euismod tortor sagittis nisi dignissim pharetra. In egestas sodales ante. Donec nec mollis ex, luctus blandit ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur congue molestie ipsum, ac porta odio scelerisque sed. Nullam non pellentesque ante.'

const HelperTextPage = () => {
  return (
    <div>
      <h1 className='title'>HelperText</h1>

      <div className='section-container'>
        <HelperText
          helperText={text}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
        />
      </div>
    </div>
  )
}

export default HelperTextPage;
