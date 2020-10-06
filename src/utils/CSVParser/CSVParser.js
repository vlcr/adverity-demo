import Papa from 'papaparse';

async function parseFile(file) {
  return new Promise((complete, error) => {
    Papa.parse(file, { 
      complete, 
      download: true,
      error,
      header: true,
    });
  });
};

export {
  parseFile,
};