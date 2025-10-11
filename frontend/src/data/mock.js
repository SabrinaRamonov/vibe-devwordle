// CS Vocabulary Word List (1000+ 5-letter words)
export const CS_WORDS = [
  // Programming Fundamentals
  'ARRAY', 'CLASS', 'STACK', 'QUEUE', 'GRAPH', 'TUPLE', 'INDEX',
  'CACHE', 'DEBUG', 'LOGIC', 'QUERY', 'TOKEN', 'PARSE', 'BYTES',
  'INPUT', 'PIXEL', 'PROXY', 'SHELL', 'WHILE', 'THROW', 'CATCH',
  'ASYNC', 'AWAIT', 'FETCH', 'MERGE', 'PATCH', 'SCOPE', 'TRAIT',
  'UNION', 'MIXIN', 'YIELD', 'CODEC', 'REGEX', 'MUTEX', 'HEAP',
  'NODES', 'LOOPS', 'CONST', 'FLOAT', 'CLONE', 'BUILD', 'TRUNK',
  'ROUTE', 'GUARD', 'EVENT', 'STATE', 'PROPS', 'HOOKS', 'REDUX',
  'FIBER', 'VNODE', 'STORE', 'SLICE', 'THUNK', 'SAGA',
  
  // Data Types & Structures
  'TABLE', 'LISTS', 'TREES', 'TRIE', 'DEQUE', 'BLOOM', 'BTREE',
  'HASHI', 'DATUM', 'FIELD', 'STASH', 'FRAME', 'SHARD', 'BLOCK',
  'CHUNK', 'CELLS', 'ATLAS', 'GRIDS', 'CHAIN', 'LINES', 'RANKS',
  'LEVEL', 'DEPTH', 'WIDTH', 'EDGES', 'PATHS', 'CYCLE', 'LEAF',
  'ROOTS', 'PIVOT', 'JOINT', 'SPLIT', 'SPINE', 'LAYER', 'STRIP',
  
  // Algorithms & Operations
  'SORTS', 'MERGE', 'QUICK', 'HEAP', 'SHELL', 'RADIX', 'COUNT',
  'BLOOM', 'HASH', 'PRUNE', 'SPLIT', 'JOINS', 'UNION', 'DIFF',
  'SLICE', 'CHUNK', 'BATCH', 'GROUP', 'FOLD', 'MAPS', 'SCAN',
  'ROUND', 'FLOOR', 'TRUNC', 'CLAMP', 'LERPS', 'BEZIR', 'CUBIC',
  'BEZIR', 'CURVE', 'SPLINE', 'MORPH', 'BLEND', 'ALPHA', 'DELTA',
  
  // Programming Languages
  'CPLUS', 'CSHARP', 'SCALA', 'SWIFT', 'GROOV', 'JULIA', 'PERL',
  'FORTH', 'COBOL', 'ALGOL', 'PROLOG', 'CAML', 'OCAML', 'FORTH',
  'BASIC', 'BASH', 'LISP', 'CLIPS', 'SIMUL', 'FORTR', 'PASC',
  
  // Commands & Functions
  'PRINT', 'WRITE', 'READS', 'OPENS', 'CLOSE', 'SAVES', 'LOADS',
  'SEEKS', 'FLUSH', 'CLEAR', 'RESET', 'START', 'STOPS', 'PAUSE',
  'BREAK', 'CONTI', 'EXITS', 'ABORT', 'RAISE', 'WARNS', 'ERROR',
  'FAILS', 'ASSRT', 'CHECKS', 'VALID', 'TESTS', 'MOCKS', 'STUBS',
  'TRACE', 'WATCH', 'TRACK', 'PROBE', 'SNIFF', 'AUDIT', 'SWEEP',
  
  // Web & Network
  'HTTPS', 'WEBSOC', 'GRPC', 'RESTF', 'GRAPHQ', 'OAUTH', 'SAML',
  'PORTS', 'HOSTS', 'PEERS', 'NODES', 'LINKS', 'ROUTE', 'HOPS',
  'PINGS', 'TRACE', 'FETCH', 'POSTS', 'PATCH', 'DELME', 'OPTS',
  'HEADS', 'BODYS', 'FORMS', 'MULTI', 'JSONS', 'XMLS', 'YAMLS',
  'TOML', 'PROTOB', 'AVROS', 'THRIFT', 'MSGPK', 'CBOR', 'BSON',
  
  // Security & Crypto
  'CRYPT', 'HASHA', 'SALTS', 'NONCE', 'TOKEN', 'OAUTH', 'CERTS',
  'KEYS', 'PRIVA', 'PUBLIC', 'SIGNS', 'VAULT', 'LOCKS', 'SEAL',
  'GUARD', 'FENCE', 'WALLS', 'GATES', 'MASKS', 'ROLES', 'PERMS',
  'GRANT', 'ALLOW', 'DENYS', 'ADMIN', 'USERS', 'GROUP', 'OWNER',
  
  // File Types & Extensions
  'DOTJS', 'DOTTS', 'DOTPY', 'DOTGO', 'DOTRS', 'DOTJL', 'DOTEX',
  'DOTSH', 'DOTMD', 'DOTCSS', 'DOTSQL', 'DOTXML', 'DOTJSN', 'DOTYML',
  'DOTENV', 'DOTLOG', 'DOTCFG', 'DOTINI', 'DOTBAK', 'DOTTMP', 'DOTZIP',
  
  // Database Terms
  'JOINS', 'WHERE', 'LIMIT', 'ORDER', 'GROUP', 'UNION', 'INTER',
  'MINUS', 'CROSS', 'INNER', 'OUTER', 'LEFTS', 'RIGHT', 'FULLS',
  'SELEC', 'INSER', 'UPDAT', 'DELET', 'ALTER', 'CREAT', 'DROPS',
  'VIEWS', 'INDEX', 'PKEY', 'FKEY', 'UNIQ', 'NULLS', 'DEFAU',
  'CHECK', 'CONSTR', 'SEQUE', 'TRIG', 'PROCS', 'FUNCS', 'TRANS',
  'COMMI', 'ROLLB', 'LOCKS', 'ISOLA', 'DIRTY', 'PHANT', 'MVCC',
  
  // Cloud & DevOps
  'CLOUD', 'KUBEZ', 'DOCKE', 'SWARM', 'MESOS', 'NOMAD', 'FLEET',
  'HELM', 'CHART', 'PODS', 'REPLI', 'SERVS', 'INGRE', 'EGRES',
  'CONFI', 'SECRE', 'VOLUM', 'MOUNT', 'BINDS', 'ENVIR', 'TAGS',
  'LABEL', 'ANNOT', 'SCALE', 'AUTOZ', 'LOADB', 'PROXY', 'MESH',
  'ISTIO', 'ENVOY', 'NGINX', 'TRAEF', 'CADDY', 'HAPRX', 'VARNZ',
  
  // Version Control
  'GITUB', 'GITLB', 'BITBU', 'CLONE', 'FETCH', 'PULLS', 'PUSHS',
  'COMMI', 'BRANC', 'MERGZ', 'REBAS', 'CHERRY', 'STASH', 'DIFFS',
  'PATCH', 'BLAME', 'BISEC', 'REFLO', 'TAGS', 'REMOT', 'ORIGI',
  'UPSTR', 'FORKS', 'HEADS', 'TREES', 'BLOBS', 'REFER', 'HOOKS',
  
  // Testing & Quality
  'TESTS', 'SPECS', 'SUITS', 'CASES', 'ASSRT', 'EXPEC', 'MOCKS',
  'STUBS', 'SPIES', 'FAKES', 'DUMMZ', 'FIXTU', 'SETUP', 'TDWN',
  'COVER', 'REPOR', 'LINTS', 'STYLE', 'FORMA', 'SMELL', 'DEBTS',
  'SONAR', 'CODEQ', 'METRC', 'COMPL', 'CYCLO', 'COGNI', 'DUPLI',
  
  // Architecture & Design
  'SOLID', 'GRAPS', 'FACADE', 'PROXY', 'ADAPT', 'BRIDG', 'COMPO',
  'DECOR', 'FLYWE', 'FACTO', 'SINGL', 'BUILD', 'PROTO', 'POOLS',
  'STRAT', 'TEMPL', 'VISIT', 'OBSER', 'MEDIA', 'MEMEM', 'STATE',
  'CHAIN', 'COMMA', 'INTER', 'ITERA', 'NULLOB', 'SPECZ', 'SERVI',
  
  // Performance & Optimization
  'SPEED', 'BENCH', 'PROFI', 'FLAME', 'TRACE', 'METRICS', 'GAUGE',
  'TIMER', 'COUNT', 'HISTO', 'SUMMA', 'QUANT', 'PERCE', 'RATES',
  'THROU', 'LATEN', 'JITTER', 'DELAY', 'DRIFT', 'SKEWS', 'PEAKS',
  'SURGE', 'SPIKE', 'BURST', 'CHOKE', 'STALL', 'BLOCK', 'WAIT',
  
  // Concurrency & Parallelism
  'THREAD', 'FIBER', 'COROU', 'ASYNC', 'AWAIT', 'SPAWN', 'JOINS',
  'LOCKS', 'MUTEX', 'SEMAP', 'BARRI', 'LATCH', 'FUTUE', 'PROMI',
  'CHANS', 'PIPES', 'QUEUE', 'STREA', 'FLOWS', 'BACKP', 'BUFFS',
  'POOLS', 'WORKE', 'EXECS', 'SCHED', 'CORES', 'CPUS', 'CORES',
  
  // Memory Management
  'HEAPS', 'STACK', 'ARENA', 'POOLS', 'ALLOC', 'DEALL', 'FREED',
  'LEAKS', 'FRAGM', 'SLABS', 'BUDDY', 'PAGES', 'FRAME', 'SEGMS',
  'WORDS', 'BYTES', 'ALIGN', 'PADDS', 'PACKS', 'DENSE', 'SPARS',
  
  // Compiler & Interpreter
  'LEXER', 'PARSE', 'ASTEE', 'TOKEN', 'NODES', 'EXPRS', 'STMTS',
  'DECLS', 'TYPES', 'INFER', 'CHECK', 'BINDS', 'SCOPE', 'LIFET',
  'BORRO', 'MOVES', 'COPYS', 'CLONE', 'DROPS', 'DESTR', 'FINAL',
  'OPTIM', 'INLIN', 'UNROL', 'VECTO', 'SIMD', 'LLVM', 'IREPS',
  
  // Operating Systems
  'KERNE', 'USERZ', 'PROCS', 'TASKS', 'JOBSS', 'DAMON', 'SERVS',
  'INITS', 'BOOTS', 'LOADS', 'RUNLV', 'MOUNTS', 'FILESZ', 'INODE',
  'DENTY', 'SUPER', 'EXTEN', 'SYMLN', 'HARDL', 'PIPES', 'FIFOS',
  'SOCKE', 'DEVIC', 'DRIVE', 'PARTI', 'VOLUM', 'RAIDS', 'SWAPS',
  
  // Graphics & UI
  'PIXEL', 'VOXEL', 'TEXTU', 'SHADE', 'VERTE', 'MESHE', 'POLYG',
  'PRIME', 'QUAD', 'TRIS', 'STRIP', 'FANS', 'BATCH', 'ATLAS',
  'SPRITE', 'TILES', 'LAYER', 'ZINDE', 'CANVA', 'CONTX', 'FRAME',
  'VIEWS', 'WINDO', 'MODAL', 'TOAST', 'ALERT', 'POPOV', 'TOOLZ',
  
  // Networking Protocols
  'TCPIP', 'UDPPP', 'ICMPS', 'IGMPS', 'OSPFS', 'BGPPP', 'RIPPP',
  'DHCPS', 'DNSS', 'FTPS', 'SMTPS', 'POP3S', 'IMAPS', 'SNMPS',
  'LDAPS', 'NTPS', 'TFTPS', 'TELNT', 'RLOGIN', 'RSHEL', 'SSHSS',
  
  // Data Formats
  'JSONS', 'XMLS', 'YAMLS', 'TOMLS', 'CSVS', 'TSVS', 'SSVS',
  'PROTOB', 'AVROS', 'PARQU', 'ORCCC', 'ARROW', 'FEATH', 'PICKL',
  'MSGPK', 'CBORS', 'BSONS', 'UBJSN', 'SMILE', 'IONNN', 'THRIFT',
  
  // ML & AI Terms
  'MODEL', 'TRAIN', 'INFER', 'EPOCS', 'BATCH', 'GRADS', 'LEARN',
  'WEIGH', 'BIASE', 'LAYER', 'DENSE', 'CONVO', 'RECUR', 'LSTMS',
  'GRUS', 'TRANS', 'ATTEN', 'EMBED', 'ENCOD', 'DECOD', 'LATEN',
  'LOGIT', 'SOFTM', 'RELUS', 'TANHS', 'SIGMO', 'SWISH', 'GELUS',
  
  // Math & Statistics
  'NORMS', 'MEANS', 'MODES', 'MEDIA', 'STDEV', 'VARIA', 'SKEWS',
  'KURTO', 'QUANT', 'PERCE', 'RANKS', 'ZSCORE', 'TTEST', 'ANOVA',
  'REGRE', 'CORRE', 'COVAR', 'EIGEN', 'VECTO', 'MATRI', 'TENSO',
  
  // Bit Operations
  'BITSS', 'SHIFT', 'LEFTS', 'RIGHT', 'ANDED', 'ORED', 'XORED',
  'NOTSS', 'FLIPD', 'SETED', 'CLEAR', 'TESTE', 'POPCN', 'CLZEE',
  'CTZEE', 'BSWAP', 'ROTAT', 'MASKS', 'FLAGS', 'ENUMS', 'UNION',
  
  // System Calls
  'FORKS', 'EXECS', 'WAITS', 'KILLS', 'SIGNA', 'OPENS', 'READS',
  'WRITE', 'CLOSE', 'LSEEK', 'STATS', 'FSTAT', 'CHMOD', 'CHOWN',
  'MKDIR', 'RMDIR', 'UNLIN', 'SYMLN', 'READL', 'PIPES', 'DUPS',
  
  // Error Handling
  'ERROR', 'FAILS', 'CRASH', 'PANIC', 'ABORT', 'FAULT', 'TRAP',
  'SEGFA', 'BUSEE', 'DIVBY', 'OVERF', 'UNDERF', 'STKOV', 'HEAPO',
  'NULLP', 'DANGLE', 'MEMLK', 'DEADL', 'RACEC', 'STARV', 'LIVLK',
  
  // Logging & Monitoring
  'LOGSZ', 'INFOS', 'DEBUG', 'WARNS', 'ERROR', 'FATAL', 'TRACE',
  'AUDIT', 'ACCES', 'EVENT', 'METRI', 'ALERT', 'ALARM', 'PAGES',
  'DASHB', 'CHART', 'GRAPH', 'TREND', 'ANOM', 'SPIKE', 'DRIFT',
  
  // API & Integration
  'RESTZ', 'SOAPS', 'GRPCS', 'WEBHO', 'CALLB', 'POLLL', 'STREA',
  'PUSHH', 'PULLS', 'PUBSU', 'TOPIC', 'QUEUE', 'CHANN', 'PIPES',
  'FANOUT', 'FANIN', 'SPLTR', 'MERGR', 'FILTR', 'MAPPR', 'REDUC',
  
  // Configuration
  'CONFS', 'SETNG', 'OPTNS', 'FLAGS', 'ENVSS', 'PROPS', 'ATTRS',
  'METAS', 'TAGS', 'LABEL', 'ANNOT', 'HINTS', 'MARKS', 'BADGE',
  
  // Time & Date
  'EPOCH', 'TIMES', 'DATES', 'STAMP', 'ZONE', 'OFFST', 'DRIFT',
  'SYNCS', 'CLOCK', 'TICK', 'TIMER', 'DELAY', 'SLEEP', 'PAUSE',
  'MILLS', 'MICRO', 'NANOS', 'SECS', 'MINS', 'HOURS', 'DAYS',
  
  // Encoding & Compression
  'GZIPS', 'BZIP2', 'LZMA', 'ZSTD', 'SNAPP', 'LZFFF', 'BROTL',
  'BASED', 'HEX64', 'UTF8S', 'ASCII', 'LATIN', 'CODEC', 'TRANS',
  
  // Mobile & Embedded
  'ARMSS', 'THUMB', 'MIPSS', 'RISCV', 'SPARC', 'POWER', 'X86SS',
  'FLASH', 'EEPRO', 'NVRAM', 'SDRAM', 'CACHE', 'PIPEZ', 'BUSSS',
  
  // Functional Programming
  'MONAD', 'FUNCT', 'PUREZ', 'CURRY', 'APPLY', 'COMPO', 'PIPEZ',
  'MAPSS', 'FILTR', 'REDUC', 'FOLDS', 'SCANS', 'ZIPSS', 'UNFOL',
  'LIFTS', 'FLATS', 'BINDS', 'JOINS', 'SEQUE', 'LAZYS', 'EAGER',
  
  // Reactive Programming
  'RXJSS', 'OBSRV', 'SUBJE', 'STREA', 'OPERA', 'MAPSS', 'FILTR',
  'MERGE', 'COMBI', 'WITHZ', 'DEBOU', 'THROT', 'DISTI', 'BUFFS',
  
  // Code Generation
  'CODEG', 'TEMPZ', 'MACRO', 'METAP', 'REFLE', 'INTROS', 'ANALY',
  'SYNTH', 'TRANS', 'REWRITE', 'OPTIM', 'INLIN', 'EXPAN', 'SUBST',
  
  // Additional CS Terms
  'OMEGA', 'THETA', 'SIGMA', 'ALPHA', 'GAMMA', 'DELTA', 'KAPPA',
  'LAMBD', 'PRIMZ', 'COMPS', 'FACTO', 'FIBO', 'EUCLID', 'DIJKS',
  'BELLM', 'FLOYD', 'KRUSK', 'PRIMS', 'ASTAR', 'MINIS', 'MAXS',
  'GREEY', 'BRUTE', 'HEURIS', 'MONTE', 'CARLO', 'MARKO', 'BAYES',
  
  // Software Development
  'AGILE', 'SCRUM', 'SPRIN', 'RETRO', 'DAILY', 'STAND', 'REVIE',
  'PULLS', 'ISSUE', 'TICKE', 'STORY', 'EPICS', 'TASKS', 'BUGSS',
  'FEATS', 'HOTFX', 'RELEAS', 'DEPLO', 'STAGE', 'PRODS', 'CANAY',
  
  // Patterns & Practices
  'CLEAN', 'DRYYY', 'SOLID', 'YAGNI', 'KISS', 'GRASP', 'COUP',
  'COHES', 'ENCAP', 'ABSTR', 'INHER', 'POLYM', 'INTER', 'MIXIN',
  
  // Tools & Utilities
  'MAKES', 'CMAKE', 'NINJA', 'BAZEL', 'GRADS', 'MAVEN', 'GRADL',
  'CARGO', 'BUNDL', 'WEBPK', 'ROLLP', 'VITEZ', 'ESBLD', 'PARCE',
  'BABEL', 'TSCSS', 'FLOW', 'ESLNT', 'PRETY', 'STYLT', 'JEST',
  
  // Misc Technical
  'NONCE', 'IDIOM', 'MEMES', 'GLYPH', 'RUNES', 'CARET', 'TILDE',
  'SLASH', 'PIPES', 'AMPER', 'ASTER', 'HASHS', 'DOLRS', 'PERCE',
  'BRACE', 'PAREN', 'ANGLE', 'SQUAR', 'QUOTE', 'TICKS', 'GRAVE'
];

export const getRandomWord = () => {
  return CS_WORDS[Math.floor(Math.random() * CS_WORDS.length)];
};

export const isValidWord = (word) => {
  return CS_WORDS.includes(word.toUpperCase());
};