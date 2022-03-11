// Random selector function

const selector = (data) => {
    const randomNumber = Math.floor(Math.random() * data.length);
    return data[randomNumber];
}

export { selector };