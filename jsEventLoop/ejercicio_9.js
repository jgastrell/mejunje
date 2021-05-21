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
