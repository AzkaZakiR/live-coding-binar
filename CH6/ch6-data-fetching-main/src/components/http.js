export async function updateUserPlaces(places) {
    const response = fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'content-type': 'application/json',
        }
    });

    const resData = (await response).json();

    if (!response.ok) {
        throw new Error("Failed to update uesr data")
    }

    return resData.message;
}