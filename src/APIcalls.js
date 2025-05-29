const fetchData = (path) => {
  return fetch(`https://rancid-tomatillos-api-l5bh.onrender.com/api/v1/movies${path}`)
}

export { fetchData };
