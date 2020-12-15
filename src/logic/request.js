
export const getSpaceShips = async () => {

    var spaceShips = [];
    var page = 1;
    var response = await fetchResultGet('https://swapi.dev/api/starships/?page=' + page);

    while (response['status'] === 'ok' && response['next'] !== null)
    {
        spaceShips = [...spaceShips, ...response['results']];
        page++;
        response = await fetchResultGet('https://swapi.dev/api/starships/?page=' + page);
    }

     return spaceShips;
}

async function fetchResultGet(endpoint, header){

    var data = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...header
        }
    }).then(response => response.json())
        .then(response => {
            response['status'] = 'ok';
            return response;
        })
        .catch(error => {
            return error;
        });

    return data;
}