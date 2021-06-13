import React from 'react';

export const PlusCircle = (): React.ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="32" width="32">
      <circle cx="12" cy="12" r="12" fill="#fff" fillRule="evenodd" clipRule="evenodd" />
      <path
        fill="#0070f3"
        fillRule="evenodd"
        d="M12.82 6.61a.805.805 0 00-.42-.68.819.819 0 00-1.22.68v4.57H6.61a.797.797 0 00-.6.23c-.16.15-.25.37-.25.59 0 .22.09.43.25.59.16.15.38.24.6.23h4.57v4.57c0 .29.16.55.41.7.25.14.56.14.81 0s.41-.41.41-.7v-4.57h4.57c.22.01.44-.07.6-.23.16-.15.25-.37.25-.59 0-.22-.09-.43-.25-.59a.837.837 0 00-.6-.23h-4.57l.01-4.57zm-9.31-3.1c4.69-4.69 12.28-4.69 16.97 0s4.69 12.28 0 16.97-12.28 4.69-16.97 0-4.68-12.28 0-16.97z"
        clipRule="evenodd"
      />
    </svg>
  );
};
