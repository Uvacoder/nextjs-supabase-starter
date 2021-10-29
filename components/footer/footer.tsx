import React from 'react';
import { footerData } from '@/libs/.';

const Footer = (): React.ReactElement => {
  return (
    <>
      <footer className="select-none">
        <div className="mx-auto max-w-xl flex flex-wrap gap-10 justify-between sm:flex-col">
          {footerData.map((value, index) => (
            <ul key={index}>
              <li>{value.title}</li>
              {value.items.map((value1, index1) => (
                <li key={index1}>
                  <a href={value1.url} target="_blank" rel="noreferrer">
                    {value1.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
      <style jsx>{`
        footer {
          background: #fafafa;
          border-top: 1px solid #eaeaea;
          padding: 36px 24px 24px 24px;
        }
        ul,
        a {
          margin: 0;
          font-size: 14px;
          color: #666;
        }
        a:hover {
          text-decoration: underline;
        }
        li:first-child {
          color: #000;
        }
        li:before {
          content: none;
        }
      `}</style>
    </>
  );
};

export default Footer;
