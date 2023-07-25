export const fetchRouteData = async (points) => {
  const url = `http://router.project-osrm.org/route/v1/driving/${points.join(';')}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch route data.');
  }
};
