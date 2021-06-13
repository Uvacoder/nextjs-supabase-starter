import React from 'react';
import moment from 'moment';
import { definitions } from '@/supabase/.';
import { PlusCircle } from './icons';

interface Props {
  data: Array<definitions['timeline']>;
  className?: string;
}

const Timeline = ({ data, className }: Props): React.ReactElement => {
  moment.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: '1s',
      ss: '%ss',
      m: '1m',
      mm: '%dm',
      h: '1h',
      hh: '%dh',
      d: '1d',
      dd: '%dd',
      M: '1M',
      MM: '%dM',
      y: '1Y',
      yy: '%dY',
    },
  });

  const list = data.map((item) => {
    if (item.event === 'SIGN_IN')
      return {
        icon: <PlusCircle />,
        text: `You logged in via`,
        bold: item.description.charAt(0).toUpperCase() + item.description.slice(1),
        time: item.timestamp,
      };
  });

  return (
    <>
      <ul className={`m-0 text-sm relative z-10 ${className}`}>
        {list.map((item, index) => (
          <li key={index} className="flex items-center gap-3 py-2 m-0">
            {item?.icon}
            <div className="w-full flex justify-between">
              <span>
                {item?.text} <span className="font-medium">{item?.bold}</span>
              </span>
              <span style={{ color: '#999' }}>{moment(item?.time).fromNow(true)}</span>
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul::before {
          content: '';
          width: 1px;
          height: calc(100% - 64px);
          transform: translateY(32px);
          position: absolute;
          left: 14px;
          background: #eaeaea;
          z-index: -1;
        }
        li::before {
          content: none;
        }
      `}</style>
    </>
  );
};

export default Timeline;
