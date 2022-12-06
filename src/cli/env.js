const parseEnv = () => {
    for (const [key, value] of Object.entries(process.env)) {
        if (key.includes('RSS_')) {
            console.log(`${key}=${value}`);
        }
      }
};

parseEnv();