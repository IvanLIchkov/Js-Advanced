function solve(cards) {
    function createCard(face, suit) {
        const faces = [
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'J',
            'Q',
            'K',
            'A',

        ];

        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
        if(faces.includes(face) === false) {
            if (suits.hasOwnProperty(suit) === false) {
                throw new Error();
            }
            throw new Error();
        }
        return {
            face,
            suit,
            toString() {
                return `${face}${suits[suit]}`;
            }
        };
    }
    const arr = [];
    for (const card of cards) {
        let suit = card.slice(-1)
        let face = card.slice(0,-1);
        let generatedCard;
        try {
             generatedCard = createCard(face, suit);
        }catch (err){
            console.log(`Invalid card: ${card}`);
            return;
        }
        arr.push(generatedCard);
    }
    console.log(arr.join(" "));
}
solve(['AS', '10D', 'KH', '2C']);
solve(['5S', '3D', 'QD', '1C']);
