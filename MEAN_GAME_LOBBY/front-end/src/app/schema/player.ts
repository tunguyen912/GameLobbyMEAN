export class Player{
    _id:string;
    player:string;
    rank:string;
    score:string;
    time:string; // could change because of timer
    game_history:[string];
    favorite : string;
    status:string;
    joinable :string; //default is avaliable because when create there is no possible way that it's fill with data yet
}