import React from 'react';
export const BasePage: React.FC = ({ children }) => {
  return (
    <div>
      <header></header>
      <div>
        <aside className="sidebar"></aside>
        <main>
            {children}
        </main>
      </div>
    </div>
  );
};
