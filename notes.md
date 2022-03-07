| Array Used      | doublerAppend Time | doublerInsert Time |
|-----------------|--------------------|--------------------|
| tinyArray       | 96.1 μs            | 35.7 μs            |
| smallArray      | 104.1 μs           | 44.6 μs            |
| mediumArray     | 127.1 μs           | 162.5 μs           |
| largeArray      | 466.1 μs           | 9.1127 ms          |
| extraLargeArray | 3.6103 ms          | 992.6108 ms        |

The function doublerAppend() has a linear time complexity or O(n). The function doublerInsert() has a quadratic time complexity or O(n^2).

doublerAppend() scaled better. One thing of note, however, is that doublerInsert() started out faster when the smaller arrays were passed to it, oddly enough.

Array.unshift() adds an element to the beginning of an array. Adding an element at the beginning of an array means the new element will have an index of 0, therefore, the index of every other element must be incremented by 1, leading to a less efficient runtime when compared to Array.push(), which simply adds a new element to the end of the array.

doublerInsert() is slower because of the nature of Array.unshift(), as compared to Array.push(), mentioned above.

Both functions have a space complexity O(1).