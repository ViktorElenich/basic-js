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
  constructor(isDirect = true) {
    this.isDirect = isDirect !== false; // true — прямой, false — реверс
  }

  encrypt(message, key) {
    return this.#process(message, key, true);
  }

  decrypt(message, key) {
    return this.#process(message, key, false);
  }

  #process(input, key, isEncrypt) {
    if (input === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const text = String(input).toUpperCase();
    const k = String(key).toUpperCase();
    const A = 'A'.charCodeAt(0);

    let ki = 0;
    const out = [];

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const code = ch.charCodeAt(0);

      if (code >= 65 && code <= 90) { // только латиница
        const m = code - A;
        const kch = k[ki % k.length].charCodeAt(0) - A;
        const c = isEncrypt ? (m + kch) % 26 : (m - kch + 26) % 26;
        out.push(String.fromCharCode(A + c));
        ki++;
      } else {
        out.push(ch); // прочие символы не трогаем
      }
    }

    const result = out.join('');
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
