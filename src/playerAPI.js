const PlayerAPI = {
    players: [
        { id: 1, name: "Rohit Sharma", position: "Opener" },
        { id: 2, name: "Shikhar Dhawan", position: "Opener" },
        { id: 3, name: "Virat Kohli", position: "One Down" },
        { id: 4, name: "M S Dhoni", position: "Keeper" },
        { id: 5, name: "Kedar Jadhav", position: "All rounder" },
        { id: 6, name: "Hardik Pandya", position: "All rounder" },
        { id: 7, name: "Ravindra Jadeja", position: "All rounder" },
        { id: 8, name: "Yajuvendra Chahal", position: "Spinner" },
        { id: 9, name: "Kuldeep Yadav", position: "Spinner" },
        { id: 10, name: "Jaspritt Bumrah", position: "Fast Bowler" },
        { id: 11, name: "Umesh Yadav", position: "Fast Bowler" }  
    ],
    all: function(){return this.players;},
    get: function(id){
        const isPlayer = p => p.id === id;
        return this.players.find(isPlayer);
    }
}

export default PlayerAPI;