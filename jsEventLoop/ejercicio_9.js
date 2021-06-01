/*
Suppose we have some input data describing a
graph of relationships between parents and
children over multiple generations. The data
is formatted as a list of (parent, child)
pairs, where each individual is assigned a
unique integer identifier.
For example, in this diagram, 3 is a child of
1 and 2, and 5 is a child of 4:
1    2   4
\  /   / \
  3   5   8
    \ / \   \
    6   7   10
Write a function that, for two given
individuals in our dataset, returns true if
and only if they share at least one ancestor.

Sample input and output:
hasCommonAncestor(parentChildPairs, 3, 8) => false
hasCommonAncestor(parentChildPairs, 5, 8) => true
hasCommonAncestor(parentChildPairs, 6, 8) => true
hasCommonAncestor(parentChildPairs, 1, 3) => false
*/

const parentChildPairs = [[1,3], [2,3], [3,6], [5,6], [5,7], [4,5], [4,8], [8,10]];

console.log(parentChildPairs);




/* function hasCommonAncestor(A) {
	var cMap = {};
	var size = A.length;
	
	for(let i = 0; i < size; i++) {
		let [p,c] = A[i];
		if(!cMap[c]) { cMap[c] = 1; } else { cMap[c] += 1; }
	}
	
	for(let i = 0; i < size; i++) {
		let [p] = A[i];
		if(!cMap[p]) { cMap[p] = 0; };
	}
	let noparent = [], oneparent = [];

	for(k in cMap) {
		let z = (cMap[k] === 0), o = (cMap[k] === 1);
		if(z) noparent.push(+k);
		if(o) oneparent.push(+k);
	}
	return {noparent, oneparent};
} */
