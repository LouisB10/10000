import pool from '../utils/database';
import type { Player } from '../types/game';

export const playerService = {
  // Créer un nouveau joueur
  async createPlayer(username: string, email: string, passwordHash: string): Promise<Player> {
    const query = `
      INSERT INTO players (username, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, username, email, created_at, total_games_played, total_games_won, highest_score
    `;
    const values = [username, email, passwordHash];
    
    const result = await pool.query(query, values);
    return result.rows[0];
  },

  // Récupérer un joueur par son email
  async getPlayerByEmail(email: string): Promise<Player | null> {
    const query = 'SELECT * FROM players WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0] || null;
  },

  // Récupérer un joueur par son ID
  async getPlayerById(id: string): Promise<Player | null> {
    const query = 'SELECT * FROM players WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
  },

  // Mettre à jour les statistiques d'un joueur
  async updatePlayerStats(playerId: string, gameWon: boolean, score: number): Promise<void> {
    const query = `
      UPDATE players 
      SET 
        total_games_played = total_games_played + 1,
        total_games_won = total_games_won + $1,
        highest_score = GREATEST(highest_score, $2)
      WHERE id = $3
    `;
    await pool.query(query, [gameWon ? 1 : 0, score, playerId]);
  }
}; 