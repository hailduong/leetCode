function countStudents(students: number[], sandwiches: number[]): number {
  // Circular: 0; square: 1
  // num of studen = num of sandwitches students = [1,1,0,0] sandwiches = [0,1,0,1]
  const count = students.length


  // Interate until the remain student[] is has the same value and is different from  sandwiches[0]
  while (sandwiches.length > 0) {


    // If student[0] === sandwiches[0] > they'll take it
    if (students[0] === sandwiches[0]) {
      sandwiches.shift()
      students.shift()
    } else {
      // Otherwise, student move to student[end]
      students.push(students[0])
      students.shift()
    }

    const allStudenLikeOneKind = (new Set(students)).size === 1
    const allDontLikeTheTop = students[0] !== sandwiches[0]

    if (allStudenLikeOneKind && allDontLikeTheTop) {
      break
    }

  }


  // Return number of student unable to eat
  return students.length
};
