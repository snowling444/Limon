import React from 'react';
import {render} from 'react-dom';

import Routers from './routers';
import './main.css';
import './post.css';
import 'highlight.js/styles/dark.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<Routers />,document.getElementById('root'));
