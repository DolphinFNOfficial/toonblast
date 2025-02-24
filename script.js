document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 600;

    const gameData = {
        score: 0,
        level: 1,
        // Add more game data as needed
    };

    function init() {
        loadLevel(gameData.level);
        updateScore();
    }

    function loadLevel(level) {
        // Fetch level data from JSON file
        fetch(`levels/level${level}.json`)
            .then(response => response.json())
            .then(data => {
                // Initialize level with data
            })
            .catch(error => console.error("Error loading level:", error));
    }

    function updateScore() {
        document.getElementById("score").textContent = `Score: ${gameData.score}`;
        document.getElementById("level").textContent = `Level: ${gameData.level}`;
    }

    function restartGame() {
        gameData.score = 0;
        gameData.level = 1;
        init();
    }

    document.getElementById("restart").addEventListener("click", restartGame);

    init();
});
