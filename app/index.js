

const checkVowelsOfWord = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowel) => word.includes(vowel));
};

checkVowelsOfWord("word");

export default checkVowelsOfWord;
