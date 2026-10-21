const { execFileSync } = require('node:child_process');
const path = require('node:path');

const scriptPath = path.join(__dirname, '..', 'simple-interest.sh');

function runCalculator(principal, rate, years) {
  const input = `${principal}\n${rate}\n${years}\n`;
  return execFileSync('bash', [scriptPath], {
    input,
    encoding: 'utf8',
  });
}

describe('Simple Interest Calculator', () => {
  test('calculates standard simple interest', () => {
    const output = runCalculator(1000, 5, 2);
    expect(output).toContain('Simple Interest: 100.00');
    expect(output).toContain('Total Amount: 1100.00');
  });

  test('calculates fractional interest', () => {
    const output = runCalculator(1500, 2.5, 3);
    expect(output).toContain('Simple Interest: 112.50');
    expect(output).toContain('Total Amount: 1612.50');
  });

  test('handles zero interest rate', () => {
    const output = runCalculator(2500, 0, 4);
    expect(output).toContain('Simple Interest: 0.00');
    expect(output).toContain('Total Amount: 2500.00');
  });
});
