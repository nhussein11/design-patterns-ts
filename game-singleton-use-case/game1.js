// A Game Class that uses the Leaderboard Singleton
import Leaderboard from './leaderboard';
export class Game1 {
    constructor() {
        this.leaderboard = new Leaderboard();
    }
    addWinner(position, name) {
        this.leaderboard.addWinner(position, name);
    }
}
