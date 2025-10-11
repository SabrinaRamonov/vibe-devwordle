// CS Vocabulary Word List (5-letter words)
export const CS_WORDS = [
  'ARRAY', 'CLASS', 'STACK', 'QUEUE', 'GRAPH', 'TUPLE', 'INDEX',
  'CACHE', 'DEBUG', 'LOGIC', 'QUERY', 'TOKEN', 'PARSE', 'BYTES',
  'INPUT', 'PIXEL', 'PROXY', 'SHELL', 'WHILE', 'THROW', 'CATCH',
  'ASYNC', 'AWAIT', 'FETCH', 'MERGE', 'PATCH', 'SCOPE', 'TRAIT',
  'UNION', 'MIXIN', 'YIELD', 'CODEC', 'REGEX', 'MUTEX', 'HEAP',
  'NODES', 'LOOPS', 'CONST', 'FLOAT', 'CLONE', 'BUILD', 'TRUNK',
  'ROUTE', 'GUARD', 'EVENT', 'STATE', 'PROPS', 'HOOKS', 'REDUX',
  'FIBER', 'VNODE', 'STORE', 'SLICE', 'THUNK', 'SAGA'
];

export const getRandomWord = () => {
  return CS_WORDS[Math.floor(Math.random() * CS_WORDS.length)];
};

export const isValidWord = (word) => {
  return CS_WORDS.includes(word.toUpperCase());
};