//your JS code here. If required.
  document.getElementById('submit').addEventListener('click', function() {
        const player1 = document.getElementById('player-1').value;
        const player2 = document.getElementById('player-2').value;
    
        if (!player1 || !player2) {
            alert("Please enter names for both players!");
            return;
        }
    
        document.querySelector('.message').textContent = `${player1}, you're up`;
        document.getElementById('game').classList.remove('hidden');
    
        let currentPlayer = player1;
        let player1Turn = true;
        const board = document.querySelectorAll('.cell');
    
        board.forEach(cell => {
            cell.addEventListener('click', function() {
                if (cell.textContent === '') {
                    cell.textContent = player1Turn ? 'X' : 'O';
                    player1Turn = !player1Turn;
                    currentPlayer = player1Turn ? player1 : player2;
                    document.querySelector('.message').textContent = `${currentPlayer}, you're up`;
    
                    checkWinner(player1, player2);
                }
            });
        });
    });
    
    function checkWinner(player1, player2) {
        const cells = document.querySelectorAll('.cell');
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
    
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                const winner = cells[a].textContent === 'X' ? player1 : player2;
                document.querySelector('.message').textContent = `${winner} congratulations you won!`;
                cells.forEach(cell => cell.style.pointerEvents = 'none');
                return;
            }
        }
    }