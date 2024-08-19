export const getPointData = async () => {
    try {
        const response = await fetch('https://run.mocky.io/v3/2753b1fd-580c-4dba-90f0-df6ce97e54a9');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
      } catch (error) {
        console.error('Failed to fetch point data:', error);
        return [];
      }
  };

  

  
  export const getPolygonData = async () => {
    try {
        const response = await fetch('https://run.mocky.io/v3/afe08885-7c66-450a-b3c1-bbeed46a05a5');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Failed to fetch polygon data:', error);
        return []; 
    }
};
  