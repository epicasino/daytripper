import React from 'react';

export default function WaypointBox({ props }) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.formatted_address}</p>
    </div>
  );
}
