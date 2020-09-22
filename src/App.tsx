import React from 'react';
import { Client } from 'boardgame.io/react';
import {SetGame} from './Game';
import {SetBoard} from './Board';

const App = Client({ board: SetBoard, game: SetGame });

export default App;
