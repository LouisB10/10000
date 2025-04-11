export interface Player {
  id: string;
  name: string;
  score: number;
  isActive: boolean;
}

export interface Dice {
  value: number;
  isSelected: boolean;
}

export interface GameState {
  players: Player[];
  currentPlayer: string;
  dice: Dice[];
  roundScore: number;
  gameStatus: 'waiting' | 'playing' | 'finished';
}

export interface GameSettings {
  maxPlayers: number;
  targetScore: number;
  minPlayers: number;
} 