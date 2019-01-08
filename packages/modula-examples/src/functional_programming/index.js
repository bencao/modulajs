import fs from 'fs';
import React from 'react';

import Model from './counter_model';
import Component from './counter_component';

const Description = () => (
  <div>
    <p>
      Do you love functional programming? We do! That&apos;s why we have some
      builtin support for FP in modulajs.
    </p>
    <p>
      This example demonstrate a more functional way of writing modulajs model
      code.
    </p>
  </div>
);

export default {
  Model,
  Component,
  Description,
  title: 'Functional Programming',
  slug: 'examples-functional-programming',
  sources: {
    'Counter Model': fs.readFileSync(`${__dirname}/counter_model.js`, 'utf8'),
    'Counter Component': fs.readFileSync(
      `${__dirname}/counter_component.js`,
      'utf8'
    )
  }
};
