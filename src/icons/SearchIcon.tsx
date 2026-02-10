import React from 'react';

function SearchIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.15 0c4.494 0 8.148 3.654 8.148 8.15a8.113 8.113 0 01-1.992 5.322l6.435 6.429A.644.644 0 0120.282 21a.663.663 0 01-.46-.188l-6.434-6.435a8.093 8.093 0 01-5.239 1.915C3.654 16.292 0 12.637 0 8.142 0 3.649 3.66 0 8.15 0zm0 15.005a6.863 6.863 0 006.855-6.856 6.859 6.859 0 00-6.856-6.855 6.86 6.86 0 00-6.855 6.855 6.859 6.859 0 006.855 6.856z"
        // fill="#667085"
        fill="currentColor"
      />
    </svg>
  );
};

export default SearchIcon;
