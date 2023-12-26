import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript'

export default function Poker_hands() {
    const codesnippet = `
    function parseCard(card) {
        const values = '23456789TJQKA';
        return { value: values.indexOf(card[0]), suit: card[1] };
      }
      
      function getHandRank(hand) {
        const cards = hand.split(' ').map(parseCard);
        // Sort the cards by their values
        cards.sort((a, b) => b.value - a.value);
      
        const values = cards.map(card => card.value);
        const suits = cards.map(card => card.suit);
      
        const isFlush = suits.every(suit => suit === suits[0]);
        const isStraight = values[0] - values[4] === 4 && new Set(values).size === 5;
      
        const valueCounts = values.reduce((obj, value) => {
          obj[value] = (obj[value] || 0) + 1;
          return obj;
        }, {});
      
        const valueCountsLength = Object.keys(valueCounts).length;
        const maxCount = Math.max(...Object.values(valueCounts));
      
        if (isFlush && isStraight) return values[0] === 12 ? 9 : 8; // Royal Flush or Straight Flush
        if (maxCount === 4) return 7; // Four of a Kind
        if (maxCount === 3 && valueCountsLength === 2) return 6; // Full House
        if (isFlush) return 5; // Flush
        if (isStraight) return 4; // Straight
        if (maxCount === 3) return 3; // Three of a Kind
        if (valueCountsLength === 3) return 2; // Two Pairs
        if (valueCountsLength === 4) return 1; // One Pair
        return 0; // High Card
      }
      
      function compareHands(hand1, hand2) {
        const rank1 = getHandRank(hand1);
        const rank2 = getHandRank(hand2);
      
        if (rank1 !== rank2) {
          return rank1 > rank2 ? 1 : 2;
        }
      
        const cards1 = hand1.split(' ').map(parseCard);
        const cards2 = hand2.split(' ').map(parseCard);
      
        cards1.sort((a, b) => b.value - a.value);
        cards2.sort((a, b) => b.value - a.value);
      
        for (let i = 0; i < 5; i++) {
          if (cards1[i].value !== cards2[i].value) {
            return cards1[i].value > cards2[i].value ? 1 : 2;
          }
        }
      
        return 0;
      }
      
      function pokerHands(arr) {
        let player1Wins = 0;
      
        for (let i = 0; i < arr.length; i++) {
          const hands = arr[i].split(' ');
          const player1Hand = hands.slice(0, 5).join(' ');
          const player2Hand = hands.slice(5).join(' ');
      
          const winner = compareHands(player1Hand, player2Hand);
          if (winner === 1) {
            player1Wins++;
          }
        }
      
        return player1Wins;
      }
      
      const testArr = [
        '8C TS KC 9H 4S 7D 2S 5D 3S AC',
        '5C AD 5D AC 9C 7C 5H 8D TD KS',
        '3H 7H 6S KC JS QH TD JC 2D 8S',
        'TH 8H 5C QS TC 9H 4D JC KS JS',
        '7C 5H KC QH JD AS KH 4C AD 4S'
      ];
      
      console.log(pokerHands(testArr)); // Output: 2
      
    `;
  return (
    <div>
        <DesignTypeScript />
        <h1>
            Poker hands 
        </h1>

        <pre>
            <code>
                {codesnippet}
            </code>
        </pre>
    </div>
  )
}
