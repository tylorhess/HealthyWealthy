// Take Home Quiz 1
// purpose: clear, modular, maintainable code; adapt quickly; change easily; structure and modularity of code

// input: (food OR exercise), (id OR name), timestamp
// output: "graph" of blood sugar over the course of the day		Tylor: day? week? month? year?
//	   AND "graph" of glycation over the day

// eating/exercising increases/decreases blood sugar
// food: (glycemic index) / (120 minutes) = blood sugar increase per minute
// 		Tylor: accomodate non-linear foods?
// exercise: - (exercise index) / (60 minutes) = blood sugar decrease per minute
//		Tylor: accomodate non-linear exercise?
// glycation: if (blood sugar > 150)
// 		glycation++ each minute above 150
// default: if (neither food nor exercise is affecting your blood sugar)
//		approach 80 linearly at a rate of 1 per minute

// design decision: discrete (vs. continuous)

console.log('msg');