import React from 'react';

export default function WaypointBox({ props }) {
  return (
    <div className='bg-dirt rounded-md p-1 text-white mb-3'>
      <p className="text-base">{props.name}</p>
      <p className="text-base">{props.formatted_address}</p>
    </div>
  );
}
