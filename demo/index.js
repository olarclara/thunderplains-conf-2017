const Graph = function () {
  this.vertices = {};
};

Graph.prototype.add = function (name, edges) {
  edges = edges || null;
  this.vertices[name] = edges;
};

Graph.prototype.length = function (u, v) {
  return (this.vertices[u][v]);
};


Graph.prototype.Dijkstra = function (source) {
  let Q = {}, dist = {}, prev = {};

  for (let vertex in this.vertices) {
    dist[vertex] = Infinity;
    prev[vertex] = undefined;
    Q[vertex] = this.vertices[vertex];
  }

  dist[source] = 0;

  while (!_isEmpty(Q)) {
    let u = _distanceFromVertex(Q, dist);
    delete Q[u];

    for (let neighbor in this.vertices[u]) {
      let alt = dist[u] + G.length(u, neighbor);

      if (alt < dist[neighbor]) {
        dist[neighbor] = alt;
        prev[neighbor] = u;
      }
    }
  }
  return dist;
};


function _isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function _distanceFromVertex(Q, dist) {
  var minimumDistance = Infinity;
  var nodeWithMinimumDistance;

  for (let node in Q) {
    if (dist[node] <= minimumDistance) {
      minimumDistance = dist[node];
      nodeWithMinimumDistance = node;
    }
  }
  return nodeWithMinimumDistance;
}

const G = new Graph();
G.add('Amelia', { John: 1, Rose: 3, Lucas: 3, Matt: 2 })
G.add('John', { Rose: 1, Matt: 3, Charles: 2 })
G.add('Rose', { Amelia: 3, Lucas: 1, John: 2 })
G.add('Lucas', { Matt: 3, John: 2, Rose: 2 })
G.add('Matt', { Amelia: 1, John: 3, Rose: 2, Lucas: 1 })
G.add('Charles', { John: 2 })

console.log(G.Dijkstra('John'));