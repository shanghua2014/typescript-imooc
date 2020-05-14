function abc(data) {
    console.log("abs");
    console.log(data.x);
    return data.x + data.y;
}
abc({ x: 1, y: 2 });
