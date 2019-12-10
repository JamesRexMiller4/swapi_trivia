export const getData = () => {
  return fetch('https://swapi.co/api/films/')
      .then(res => {
        if (!res.ok) {
          throw Error('Error resolving movies fetch');
        }
        return res.json();
      });
}