const getWorkouts = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
    return res.json();
}

export default getWorkouts;