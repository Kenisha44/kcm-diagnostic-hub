export const diagnosticQuestions = [
  { id: 1, skill: 'Arithmetic', level: 'Foundation', question: 'What is 8 + 7?', choices: ['13', '14', '15', '16'], answer: '15', explanation: 'Break 7 into 2 + 5. Then 8 + 2 = 10, and 10 + 5 = 15.' },
  { id: 2, skill: 'Arithmetic', level: 'Foundation', question: 'What is 12 - 5?', choices: ['5', '6', '7', '8'], answer: '7', explanation: 'Count back 5 from 12: 11, 10, 9, 8, 7.' },
  { id: 3, skill: 'Multiplication', level: 'Foundation', question: 'What is 6 × 7?', choices: ['36', '40', '42', '48'], answer: '42', explanation: '6 groups of 7 equals 42.' },
  { id: 4, skill: 'Fractions', level: 'Pre-Algebra', question: 'Which is larger: 1/2 or 1/3?', choices: ['1/2', '1/3', 'They are equal', 'Cannot tell'], answer: '1/2', explanation: 'With the same numerator, the smaller denominator means larger pieces.' },
  { id: 5, skill: 'Decimals', level: 'Pre-Algebra', question: 'What is 0.5 as a fraction?', choices: ['1/5', '1/2', '5/100', '2/5'], answer: '1/2', explanation: '0.5 means five tenths, or 5/10, which simplifies to 1/2.' },
  { id: 6, skill: 'Algebra', level: 'Algebra 1', question: 'Solve: x + 4 = 10', choices: ['x = 4', 'x = 5', 'x = 6', 'x = 14'], answer: 'x = 6', explanation: 'Subtract 4 from both sides: x = 10 - 4 = 6.' },
  { id: 7, skill: 'Algebra', level: 'Algebra 1', question: 'Solve: 3x = 18', choices: ['x = 3', 'x = 6', 'x = 9', 'x = 15'], answer: 'x = 6', explanation: 'Divide both sides by 3: x = 18 ÷ 3 = 6.' },
  { id: 8, skill: 'Geometry', level: 'Pre-Algebra', question: 'How many degrees are in a triangle?', choices: ['90°', '120°', '180°', '360°'], answer: '180°', explanation: 'The interior angles of every triangle add up to 180 degrees.' },
  { id: 9, skill: 'Integers', level: 'Pre-Algebra', question: 'What is the opposite of -9?', choices: ['-9', '0', '9', '18'], answer: '9', explanation: 'Opposites are the same distance from zero but on different sides.' },
  { id: 10, skill: 'Order of Operations', level: 'Pre-Algebra', question: 'Calculate: 4 + 3 × 2', choices: ['10', '11', '14', '20'], answer: '10', explanation: 'Multiply first: 3 × 2 = 6. Then add 4 + 6 = 10.' },
  { id: 11, skill: 'Percents', level: 'Pre-Algebra', question: 'What is 10% of 80?', choices: ['4', '8', '10', '18'], answer: '8', explanation: '10% means one tenth. 80 ÷ 10 = 8.' },
  { id: 12, skill: 'Ratios', level: 'Pre-Algebra', question: 'Simplify the ratio 6:9.', choices: ['1:2', '2:3', '3:2', '6:3'], answer: '2:3', explanation: 'Divide both parts by 3. 6 ÷ 3 = 2 and 9 ÷ 3 = 3.' },
  { id: 13, skill: 'Exponents', level: 'Algebra 1', question: 'What is 2³?', choices: ['5', '6', '8', '9'], answer: '8', explanation: '2³ means 2 × 2 × 2, which equals 8.' },
  { id: 14, skill: 'Integers', level: 'Pre-Algebra', question: 'What is -3 + 8?', choices: ['-11', '-5', '5', '11'], answer: '5', explanation: 'Start at -3 and move 8 steps right on the number line.' },
  { id: 15, skill: 'Algebra', level: 'Algebra 1', question: 'Solve: 2x + 1 = 9', choices: ['x = 3', 'x = 4', 'x = 5', 'x = 8'], answer: 'x = 4', explanation: 'Subtract 1 to get 2x = 8. Divide by 2 to get x = 4.' },
  { id: 16, skill: 'Fractions', level: 'Pre-Algebra', question: 'What is 1/4 + 1/4?', choices: ['1/8', '1/4', '1/2', '2/8'], answer: '1/2', explanation: 'One fourth plus one fourth equals two fourths, and 2/4 simplifies to 1/2.' },
  { id: 17, skill: 'Geometry', level: 'Pre-Algebra', question: 'Area of a rectangle with length 5 and width 3?', choices: ['8 square units', '10 square units', '15 square units', '30 square units'], answer: '15 square units', explanation: 'Area = length × width, so 5 × 3 = 15.' },
  { id: 18, skill: 'Absolute Value', level: 'Pre-Algebra', question: 'What is the value of |−6|?', choices: ['-6', '0', '6', '12'], answer: '6', explanation: 'Absolute value means distance from zero, so it is always nonnegative.' },
  { id: 19, skill: 'Decimals', level: 'Pre-Algebra', question: 'Which is larger: 0.7 or 0.07?', choices: ['0.7', '0.07', 'They are equal', 'Cannot tell'], answer: '0.7', explanation: '0.7 is seven tenths. 0.07 is seven hundredths.' },
  { id: 20, skill: 'Percents', level: 'Pre-Algebra', question: 'What is 50% of 30?', choices: ['10', '12', '15', '20'], answer: '15', explanation: '50% means half. Half of 30 is 15.' }
];

export function getRecommendedLevel(score) {
  if (score >= 85) return 'Algebra 1 Ready';
  if (score >= 65) return 'Pre-Algebra Strengthening';
  if (score >= 45) return 'Foundation + Pre-Algebra Review';
  return 'Math Foundations Reset';
}
