import Queue from "./Queue.js";

function knightMoves(start, end) {
  const knightPossibleMoves = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  const queue = new Queue();
  const visitedNodes = {};

  queue.enqueue([start]);

  while (queue.read()) {
    const path = queue.dequeue();
    const node = path[path.length - 1];

    if (node[0] === end[0] && node[1] === end[1]) return path;

    for (const knightMove of knightPossibleMoves) {
      const x = node[0] + knightMove[0];
      const y = node[1] + knightMove[1];

      if (x >= 0 && x < 8 && y >= 0 && y < 8 && !visitedNodes[`[${x}, ${y}]`]) {
        visitedNodes[`[${x}, ${y}]`] = true;
        queue.enqueue([...path, [x, y]]);
      }
    }
  }

  return null;
}

function printKnightMoves(start, end) {
  const path = knightMoves(start, end);
  let string = `The knight made it in ${path.length - 1} moves! Here's the knight's path:`;

  for (const node of path) string += ` [${node}]`;

  console.log(string);
}

printKnightMoves([0, 0], [3, 3]);
printKnightMoves([3, 3], [0, 0]);
printKnightMoves([0, 0], [7, 7]);
