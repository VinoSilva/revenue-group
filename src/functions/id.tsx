export function generateUniqueId() {
    const randomNumber = Math.floor(Math.random() * 100000);
    const now = Date.now();

    return `${randomNumber}${now}`;
}