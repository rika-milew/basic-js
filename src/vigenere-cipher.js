const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encrypted = '';
    let result = '';
    let index = 0; 
    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      if (this.alphabet.includes(letter)) {
        const alphabetIndex = this.alphabet.indexOf(letter);
        const keyLetter = key[index % key.length];
        const keyIndex = this.alphabet.indexOf(keyLetter);
        const resultIndex = (alphabetIndex + keyIndex) % 26;
        encrypted += this.alphabet[resultIndex];
        index++;
      } else {
        encrypted += letter;
      }
    }
    result = encrypted.split('');
    if (this.direct) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let decrypted = '';
    let result = '';
    let index = 0; 
    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      if (this.alphabet.includes(letter)) {
        const alphabetIndex = this.alphabet.indexOf(letter);
        const keyLetter = key[index % key.length];
        const keyIndex = this.alphabet.indexOf(keyLetter);
        const resultIndex = (alphabetIndex - keyIndex + 26) % 26;
        decrypted += this.alphabet[resultIndex];
        index++;
      } else {
        decrypted += letter;
      }
    }
    result = decrypted.split('');
    if (this.direct) {
      return result.join('');
    } else {
      return result.reverse().join('');
    }
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
