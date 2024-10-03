export const fetchActivities = async (filter) => {
    let url;
    console.log(filter)
    if (!filter) {
        url = '/api/random';
    } else {
        url = `/api/filter?type=${filter.toLowerCase()}`;
    }

    const response = await fetch(url);

    console.log(response);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
};