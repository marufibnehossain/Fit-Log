const getWorkouts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
}

export default getWorkouts;