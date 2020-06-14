import React from 'react';

export default function Alert({ alert }) {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <p>
          <i className="fa fa-info-circle"></i>
          {alert.msg}
        </p>
      </div>
    )
  );
}
