const quizData = {
  bfs: {
    easy: [
      {
        question: "What data structure is used in BFS?",
        options: ["Stack", "Queue", "Array", "Tree"],
        answer: "Queue"
      },
      {
        question: "What is the time complexity of BFS in a graph with V vertices and E edges?",
        options: ["O(V+E)", "O(V*E)", "O(V^2)", "O(E^2)"],
        answer: "O(V+E)"
      },
      {
        question: "BFS is suitable for finding the ____ path in an unweighted graph.",
        options: ["Longest", "Shortest", "Random", "Cycle"],
        answer: "Shortest"
      },
      {
        question: "Which traversal starts from a selected node and explores neighbors first?",
        options: ["DFS", "BFS", "Inorder", "Postorder"],
        answer: "BFS"
      },
      {
        question: "What happens when BFS visits a node?",
        options: ["It pushes it to stack", "It pushes it to queue", "It deletes it", "It skips it"],
        answer: "It pushes it to queue"
      }
    ],
    medium: [
      {
        question: "BFS can be used to detect cycles in a ____ graph.",
        options: ["Binary", "Directed", "Undirected", "Tree"],
        answer: "Undirected"
      },
      {
        question: "Which of the following is true for BFS?",
        options: ["It uses recursion", "It may not visit all nodes", "It explores level by level", "It backtracks frequently"],
        answer: "It explores level by level"
      },
      {
        question: "Which node is processed last in BFS?",
        options: ["Root", "Leaf", "Deepest Node", "Last added to queue"],
        answer: "Last added to queue"
      },
      {
        question: "BFS is mostly used in which application?",
        options: ["Sorting", "Pathfinding", "Matrix Multiplication", "Tree Construction"],
        answer: "Pathfinding"
      },
      {
        question: "What is the auxiliary space complexity of BFS?",
        options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
        answer: "O(n)"
      }
    ],
    hard: [
      {
        question: "BFS in an adjacency matrix graph runs in?",
        options: ["O(n)", "O(n^2)", "O(V+E)", "O(VE)"],
        answer: "O(n^2)"
      },
      {
        question: "Which condition helps BFS avoid infinite loops in cyclic graphs?",
        options: ["Using queue", "Marking visited nodes", "Stack usage", "Recursion"],
        answer: "Marking visited nodes"
      },
      {
        question: "What is the worst-case time complexity for BFS in a dense graph?",
        options: ["O(V)", "O(V^2)", "O(V+E)", "O(log V)"],
        answer: "O(V^2)"
      },
      {
        question: "Can BFS be used in a disconnected graph?",
        options: ["Yes", "No", "Only in Trees", "Only DAG"],
        answer: "Yes"
      },
      {
        question: "Which one of the following is not a property of BFS?",
        options: ["Shortest path in unweighted graphs", "Greedy algorithm", "Level order traversal", "Queue based"],
        answer: "Greedy algorithm"
      }
    ],
    boss: [
      {
        question: `What will be the output of the following BFS code snippet on a graph with 3 nodes connected linearly?

Graph:
0 - 1 - 2

Code:
queue = [0];
visited = [false, false, false];

while(queue.length) {
  let node = queue.shift();
  if(!visited[node]) {
    visited[node] = true;
    console.log(node);
    // add neighbors to queue
  }
}

Options:`,
        options: ["0 1 2", "2 1 0", "0 2 1", "1 0 2"],
        answer: "0 1 2"
      }
    ]
  },

  dfs: {
    easy: [
      {
        question: "Which data structure is used in DFS?",
        options: ["Queue", "Stack", "Heap", "Tree"],
        answer: "Stack"
      },
      {
        question: "DFS is useful for finding which of the following?",
        options: ["Shortest path", "Cycles", "Balanced tree", "Heap"],
        answer: "Cycles"
      },
      {
        question: "DFS traversal starts with ____.",
        options: ["Root", "Leaf", "Any Node", "Visited Node"],
        answer: "Any Node"
      },
      {
        question: "Which is a key feature of DFS?",
        options: ["Backtracking", "Sorting", "Greedy steps", "Memory efficient"],
        answer: "Backtracking"
      },
      {
        question: "Time complexity of DFS in a graph is?",
        options: ["O(n)", "O(n^2)", "O(V+E)", "O(log n)"],
        answer: "O(V+E)"
      }
    ],
    medium: [
      {
        question: "DFS is preferred when?",
        options: ["We want the shortest path", "We want deep paths", "We want fast search", "We use queues"],
        answer: "We want deep paths"
      },
      {
        question: "DFS can be implemented using?",
        options: ["Only stack", "Only recursion", "Stack or recursion", "None"],
        answer: "Stack or recursion"
      },
      {
        question: "DFS may enter infinite loop when?",
        options: ["Graph is cyclic", "Visited nodes not tracked", "Graph is sparse", "Edges are too many"],
        answer: "Visited nodes not tracked"
      },
      {
        question: "DFS is used in which problem?",
        options: ["Binary search", "Cycle detection", "Sorting", "Matrix multiplication"],
        answer: "Cycle detection"
      },
      {
        question: "What traversal is similar to DFS?",
        options: ["Level Order", "Postorder", "Inorder", "Preorder"],
        answer: "Preorder"
      }
    ],
    hard: [
      {
        question: "DFS of a graph with 10 nodes and 0 edges will run in?",
        options: ["O(1)", "O(10)", "O(100)", "O(log 10)"],
        answer: "O(10)"
      },
      {
        question: "Which of these are DFS variants?",
        options: ["Inorder", "Postorder", "Preorder", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "Recursive DFS uses how much space in worst case (for n nodes)?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
        answer: "O(n)"
      },
      {
        question: "DFS is not suitable for?",
        options: ["Cycle detection", "Maze solving", "Finding shortest path in weighted graph", "Finding components"],
        answer: "Finding shortest path in weighted graph"
      },
      {
        question: "Which is true for DFS?",
        options: ["Queue based", "May not find optimal path", "Always finds shortest", "Never backtracks"],
        answer: "May not find optimal path"
      }
    ],
    boss: [
      {
        question: `Given this graph and DFS from node 0, what is the output?

Graph:
0 - 1 - 2

function dfs(node) {
  if(visited[node]) return;
  visited[node] = true;
  console.log(node);
  for (let i of adj[node]) {
    dfs(i);
  }
}

Visited = [false, false, false]

Options:`,
        options: ["0 1 2", "2 1 0", "0 2 1", "1 2 0"],
        answer: "0 1 2"
      }
    ]
  },

  astar: {
    easy: [
      {
        question: "A* algorithm is based on which concept?",
        options: ["Greedy", "Divide & Conquer", "Heuristics", "Backtracking"],
        answer: "Heuristics"
      },
      {
        question: "A* uses which function?",
        options: ["f(n) = g(n) + h(n)", "f(n) = h(n) - g(n)", "f(n) = g(n)", "f(n) = h(n)"],
        answer: "f(n) = g(n) + h(n)"
      },
      {
        question: "g(n) means?",
        options: ["Heuristic", "Estimated cost", "Actual cost from start", "Goal value"],
        answer: "Actual cost from start"
      },
      {
        question: "h(n) should be ____ to be admissible.",
        options: ["Underestimate", "Overestimate", "Random", "Zero"],
        answer: "Underestimate"
      },
      {
        question: "Which structure is used in A*?",
        options: ["Stack", "Queue", "Priority Queue", "List"],
        answer: "Priority Queue"
      }
    ],
    medium: [
      {
        question: "A* gives optimal path if?",
        options: ["h(n) is admissible", "g(n) is constant", "Graph is cyclic", "Nodes are sorted"],
        answer: "h(n) is admissible"
      },
      {
        question: "If h(n) is zero, A* becomes?",
        options: ["DFS", "Dijkstra", "Greedy", "UCS"],
        answer: "Dijkstra"
      },
      {
        question: "Which of the following is not true about A*?",
        options: ["It guarantees shortest path", "It is complete", "It is always faster than BFS", "It uses heuristics"],
        answer: "It is always faster than BFS"
      },
      {
        question: "What if h(n) > actual cost?",
        options: ["Still optimal", "Faster", "May miss best path", "Always better"],
        answer: "May miss best path"
      },
      {
        question: "Time complexity of A* is?",
        options: ["O(1)", "Exponential", "Linear", "Constant"],
        answer: "Exponential"
      }
    ],
    hard: [
      {
        question: "Which type of graph is best for A*?",
        options: ["Weighted with heuristic", "Unweighted", "Cyclic", "Tree"],
        answer: "Weighted with heuristic"
      },
      {
        question: "A* works better when?",
        options: ["Heuristic is zero", "Heuristic is accurate", "Cost is high", "Nodes are less"],
        answer: "Heuristic is accurate"
      },
      {
        question: "In A*, which node is expanded first?",
        options: ["Lowest g(n)", "Lowest h(n)", "Lowest f(n)", "Random"],
        answer: "Lowest f(n)"
      },
      {
        question: "Which is NOT required in A*?",
        options: ["g(n)", "h(n)", "f(n)", "DFS stack"],
        answer: "DFS stack"
      },
      {
        question: "Heuristic should be ____ for A* to be consistent.",
        options: ["Random", "Admissible", "Monotonic", "Exponential"],
        answer: "Monotonic"
      }
    ],
    boss: [
      {
        question: `If A* has:

g(A) = 2, h(A) = 4  
g(B) = 1, h(B) = 5  
f(n) = g(n) + h(n)

Which node will be selected first?

Options:`,
        options: ["A", "B", "Both same", "Cannot say"],
        answer: "A"
      }
    ]
  }
};
