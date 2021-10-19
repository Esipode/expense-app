
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/App.js';
reactComponents['App'] = Component0;

import Component1 from '../src/components/table/dataButtons.js';
reactComponents['DataButtons'] = Component1;

import Component2 from '../src/components/expenseWrapper.js';
reactComponents['ExpenseWrapper'] = Component2;

import Component3 from '../src/components/header.js';
reactComponents['Header'] = Component3;

import Component4 from '../src/components/table.js';
reactComponents['Table'] = Component4;

import Component5 from '../src/components/table/tableBody.js';
reactComponents['TableBody'] = Component5;

import Component6 from '../src/components/table/tableHeader.js';
reactComponents['TableHeader'] = Component6;