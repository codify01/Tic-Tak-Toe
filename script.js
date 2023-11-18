var turn = "O";

        function checkTurn() {

            // turn = turn == "O"? "X" : "O" ;

            if(turn == "O") {
                turn = "X";
            }else if(turn == "X") {
                turn = "O";
            }

            document.getElementById('player').innerHTML = "Player " + turn + "'s Turn";
            checkWinner();
        }
        
        function checkWinner() {
            let vc1 = document.getElementById('c1').innerHTML;
            let vc2 = document.getElementById('c2').innerHTML;
            let vc3 = document.getElementById('c3').innerHTML;
            let vc4 = document.getElementById('c4').innerHTML;
            let vc5 = document.getElementById('c5').innerHTML;
            let vc6 = document.getElementById('c6').innerHTML;
            let vc7 = document.getElementById('c7').innerHTML;
            let vc8 = document.getElementById('c8').innerHTML;
            let vc9 = document.getElementById('c9').innerHTML;

            // x will win

            if((vc1 == "X" && vc2 == "X" && vc3 == "X") || (vc4 == "X" && vc5 == "X" && vc6 == "X") || (vc7 == "X" && vc8 == "X" && vc9 == "X") || (vc1 == "X" && vc4 == "X" && vc7 == "X") || (vc2 == "X" && vc5 == "X" && vc8 == "X") || (vc3 == "X" && vc6 == "X" && vc9 == "X") || (vc1 == "X" && vc5 == "X" && vc9 == "X") || (vc3 == "X" && vc5 == "X" && vc7 == "X") ) {
                alert('X WON');
                // let Wins = "player" + turn + "Won"
                // document.getElementById('winner') = Wins;
                document.getElementById('player').innerHTML = "Player X Won";
                turn = ""
                document.getElementById('c1').innerHTML = "X";
                document.getElementById('c2').innerHTML = "X"; 
                document.getElementById('c3').innerHTML = "X";
                document.getElementById('c4').innerHTML = "X";
                document.getElementById('c5').innerHTML = "X";
                document.getElementById('c6').innerHTML = "X";
                document.getElementById('c7').innerHTML = "X";
                document.getElementById('c8').innerHTML = "X";
                document.getElementById('c9').innerHTML = "X";

            }else if((vc1 == "O" && vc2 == "O" && vc3 == "O") || (vc4 == "O" && vc5 == "O" && vc6 == "O") || (vc7 == "O" && vc8 == "O" && vc9 == "O") || (vc1 == "O" && vc4 == "O" && vc7 == "O") || (vc2 == "O" && vc5 == "O" && vc8 == "O") || (vc3 == "O" && vc6 == "O" && vc9 == "O") || (vc1 == "O" && vc5 == "O" && vc9 == "O") || (vc3 == "O" && vc5 == "O" && vc7 == "O") ) {
                alert('Player O WON');
                // let Wins = "player" + turn + "Won"
                // document.getElementById('winner') = Wins;
                document.getElementById('player').innerHTML = "Player O Won";
                turn = ""
                document.getElementById('c1').innerHTML = "O";
                document.getElementById('c2').innerHTML = "O"; 
                document.getElementById('c3').innerHTML = "O";
                document.getElementById('c4').innerHTML = "O";
                document.getElementById('c5').innerHTML = "O";
                document.getElementById('c6').innerHTML = "O";
                document.getElementById('c7').innerHTML = "O";
                document.getElementById('c8').innerHTML = "O";
                document.getElementById('c9').innerHTML = "O";

            } else {
                
            }
        }

        function reset() {
                document.getElementById('c1').innerHTML = "";
                document.getElementById('c2').innerHTML = ""; 
                document.getElementById('c3').innerHTML = "";
                document.getElementById('c4').innerHTML = "";
                document.getElementById('c5').innerHTML = "";
                document.getElementById('c6').innerHTML = "";
                document.getElementById('c7').innerHTML = "";
                document.getElementById('c8').innerHTML = "";
                document.getElementById('c9').innerHTML = "";
                document.getElementById('player').innerHTML = "Player " + turn + "'s Turn";
                let playerStatus = document.getElementById('player').innerHTML;
                if (playerStatus == "Player X Won" || "Player O Won" ) {
                    turn = "O"
                }
        }

        function cellOne() {
            document.getElementById('c1').innerHTML = turn;
            checkTurn();
        }
        function cellTwo() {
            document.getElementById('c2').innerHTML = turn;
            checkTurn();
        }
        function cellThree() {
            document.getElementById('c3').innerHTML = turn;
            checkTurn();
        }
        function cellFour() {
            document.getElementById('c4').innerHTML = turn;
            checkTurn();
        }
        function cellFive() {
            document.getElementById('c5').innerHTML = turn;
            checkTurn();
        }
        function cellSix() {
            document.getElementById('c6').innerHTML = turn;
            checkTurn();
        }
        function cellSeven() {
            document.getElementById('c7').innerHTML = turn;
            checkTurn();
        }
        function cellEight() {
            document.getElementById('c8').innerHTML = turn;
            checkTurn();
        }
        function cellNine() {
            document.getElementById('c9').innerHTML = turn;
            checkTurn();
        }