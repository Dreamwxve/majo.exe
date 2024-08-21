export const chars = {
 // uppercase
 A: "∀",
 B: "𐐒",
 C: "Ɔ",
 E: "Ǝ",
 F: "Ⅎ",
 G: "פ",
 H: "H",
 I: "I",
 J: "ſ",
 L: "˥",
 M: "W",
 N: "N",
 P: "Ԁ",
 R: "ᴚ",
 T: "⊥",
 U: "∩",
 V: "Λ",
 Y: "⅄",

 // lowercase
 a: "ɐ",
 b: "q",
 c: "ɔ",
 d: "p",
 e: "ǝ",
 f: "ɟ",
 g: "ƃ",
 h: "ɥ",
 i: "ᴉ",
 j: "ɾ",
 k: "ʞ",
 m: "ɯ",
 n: "u",
 p: "d",
 q: "b",
 r: "ɹ",
 t: "ʇ",
 u: "n",
 v: "ʌ",
 w: "ʍ",
 y: "ʎ",

 // numbers
 1: "Ɩ",
 2: "ᄅ",
 3: "Ɛ",
 4: "ㄣ",
 5: "ϛ",
 6: "9",
 7: "ㄥ",
 8: "8",
 9: "6",
 0: "0",

 // special chars
 ".": "˙",
 ",": "'",
 "'": ",",
 '"': ",,",
 "`": ",",
 "<": ">",
 ">": "<",
 "∴": "∵",
 "&": "⅋",
 _: "‾",
 "?": "¿",
 "!": "¡",
 "[": "]",
 "]": "[",
 "(": ")",
 ")": "(",
 "{": "}",
 "}": "{",

 // Cyrillic uppercase
 А: "∀",
 Б: "ܦ",
 В: "ꓭ",
 Г: "⅃",
 Д: "ჩ",
 Е: "Ǝ",
 З: "Ɛ",
 Й: "И̯",
 К: "ꓘ",
 Л: "Ѵ",
 М: "ꟽ",
 П: "ⵡ",
 Р: "Ԁ",
 С: "Ͻ",
 Т: "ꓕ",
 У: "ʎ",
 Ц: "ŉ",
 Ч: "Ⴙ",
 Ш: "ᗰ",
 Ь: "ᑫ",
 Э: "Є",
 Ю: "Ꙕ",
 Я: "ᖉ",

 // Cyrillic lowercase
 а: "ɐ",
 б: "ܦ",
 в: "ʚ",
 г: "⅃",
 д: "ჩ",
 е: "ǝ",
 з: "ԑ",
 й: "и̯",
 к: "ʞ",
 л: "ѵ",
 м: "ᥕ",
 п: "⊔",
 р: "d",
 с: "ɔ",
 т: "ꓕ",
 у: "ʎ",
 ц: "ŉ",
 ч: "h",
 ш: "m",
 ь: "৭",
 э: "є",
 ю: "ꙕ",
 я: "ʁ",
};

/**
 * Flips the given text.
 * @param {string} text The text to flip.
 * @returns {string} The flipped text.
 */
export const flipText = (text) => {
 let result = "";
 for (let i = text.length - 1; i >= 0; i--) {
  const char = text[i];
  const flipped = chars[char];
  result += flipped ? flipped : char;
 }
 return result;
};
