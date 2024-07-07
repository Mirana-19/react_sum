import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

export const App = () => (
  <>
    <Sum a={2} b={3}>
      Sum of
    </Sum>
    <Sum a={-5} b={5}>
      <span style={{ color: 'red' }}>
        Sum <strong>of</strong>
      </span>
    </Sum>
    <Sum a={0} b={5} className="main" dark />
    <Sum a={2} b={3} />
    <Sum a={0} b={0} />

    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
