---
entry number: ""
title: Diameter Finding Algorithms
date: 2026-09-16
tags:
  - Distributed-Algorithms
  - Algoposting
summary:
status: draft
draft: true
---
---

# Exact Diameter:

The original paper that proposes the algorithm was for APSP. The diameter computation is a side product. The algorithm uses BFS in a pipelined fashion, but each BFS starts one time slot later to prevent congestion at any node. 

> [!Algorithm]
> ```
> 1    Compute a spanning tree T of G
> 2    Send a pebble P to traverse T
> 3    while P traverses T:
> 4 	     if P visits a node u for the first time:
> 5          wait for one time slot and then start a BFS from node u
> ```

## Analysis

### Congestion:

Suppose a node $u$ starts it's BFS at time $t_u$. Then, a node $w$ gets involved in the corresponding BFS at time $t_u + d(u , w)$ . Now if we consider any node $v$ with $t_v > t_u$ , then $t_v \geq t_u + d(u,v) + 1$ , since the pebble needs atleast $d(u,v)$ time to get to $v$ . Using triangle inequality, the time at which $w$ is involved in $v$'s BFS will be 
$$ 
t_v + d(v,w) \geq t_u +d(u,v) + 1+ d(v,w) \geq t_u + d(u,w) + 1 > t_u + d(u,w)
$$
which is strictly greater than a time node $u$'s BFS reaches $w$. 

### Round Complexity:

All BFS stop atmost $D$ time slots after they were started. Therefore, the running time of the algorithm is determined by 
- Time to build the spanning tree - $O(D)$
- Time to traverse $T$ - $O(n)$
- Time needed for the last BFS - $O(D)$

Total time complexity: $O(D)$ 

Note that this is near optimal since the lower bound for APSP and diameter both are log factors away from $O(n)$. 

### Message Complexity:

The spanning tree $T$ can be computed using $O(m)$ messages. The pebble takes $O(1)$ message per node, while the pipelined BFS takes $O(mn)$ messages, since each node sends messages to all its neighbours for every BFS and there will be total $n$ BFS. 

Total message complexity: $O(mn)$ or $O(n^3)$ 

### Memory Complexity:
