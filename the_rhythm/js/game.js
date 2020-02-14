$(document).ready(() => {

    class Game {
        constructor() {
            this.model = new Model();
            this.view = new View();
            this.controller = new Controller();
        }

        init() {
            this.model.init(this.view, this.init());
        }

    }

    let game = new Game();
    try{
        game.init();
    } catch (e) {
        console.log('Initialisation error' + e);
    }
});