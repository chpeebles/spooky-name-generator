const fetchSpookyWordsText = async () => {
  const spookyWordsReq = await fetch('words.txt');

  return spookyWordsReq;
};

export const getSpookyWords = async () => {
  let spookyWords = [] as string[];

  await fetchSpookyWordsText()
    .then(async (res) => {
      const wordsText = await res.text();
      const wordsList = wordsText.split('\n').sort();

      spookyWords = wordsList;
    })
    .catch((err) => console.error('Error fetching spooky words:', err));

  return spookyWords;
};

getSpookyWords();
