# Day 7 - Prefix Sum and Pivot Index

## Problems Solved

### 1. Prefix Sum for Range Queries

Create a prefix sum array to find the sum of elements between two indices efficiently. After building the prefix array, each range sum query can be answered in `O(1)` time.

### 2. Pivot Index in an Array

Find the index where the sum of all elements on the left is equal to the sum of all elements on the right. The optimized solution uses the total sum and a running left sum.

## What I Learned

- How to build a prefix sum array.
- How to calculate a range sum using prefix sums.
- How prefix sums reduce repeated range-sum calculations.
- How to find a pivot index using left sum and right sum.
- How to optimize a brute-force `O(n²)` approach to `O(n)`.