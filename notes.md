| Array Used      | doublerAppend Time | doublerInsert Time |
|-----------------|--------------------|--------------------|
| tinyArray       | 96.1 μs            | 35.7 μs            |
| smallArray      | 104.1 μs           | 44.6 μs            |
| mediumArray     | 127.1 μs           | 162.5 μs           |
| largeArray      | 466.1 μs           | 9.1127 ms          |
| extraLargeArray | 3.6103 ms          | 992.6108 ms        |

The function doublerAppend() has a constant time complexity or O(1). The function doublerInsert()
has a linear time complexity or O(n). We can see this represented in the table above by the gradule increase of the former and the sharp increase of the latter. This is NOT to be confused with the dramatic increase of a quadratic function, instead we see that, in the case of the doublerInsert(), an increase in
the array by a factor of 10 results in an increase in runtime by a factor of 100, between the largeArray and extraLargeArray, in particular.

Array.unshift() adds an element to the beginning of an array. Adding an element at the beginning of an array means the new element will have an index of 0, therefore, the index of every other element must be incremented by 1, resulting in a time complexity of O(n).