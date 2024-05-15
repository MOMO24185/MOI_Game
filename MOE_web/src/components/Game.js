import React, { useState } from 'react';
import Gamey from './Gamey';

const Game = () => {
  const [showGame, setShowGame] = useState(false);

  const handleFireButtonClick = () => {
    setShowGame(true);
  };

return (
<div className="self-stretch flex flex-row items-end justify-end py-0 px-5">
     <Gamey></Gamey>
</div>
)};

export default Game;