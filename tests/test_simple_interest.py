import subprocess
import unittest
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SCRIPT = PROJECT_ROOT / "simple-interest.sh"


def run_calculator(principal, rate, years):
    inputs = f"{principal}\n{rate}\n{years}\n"
    return subprocess.run(
        ["bash", str(SCRIPT)],
        input=inputs,
        text=True,
        capture_output=True,
        check=True,
        timeout=10,
    ).stdout


class SimpleInterestTests(unittest.TestCase):
    def test_standard_calculation(self):
        output = run_calculator(1000, 5, 2)
        self.assertIn("Simple Interest: 100.00", output)
        self.assertIn("Total Amount: 1100.00", output)

    def test_fractional_interest(self):
        output = run_calculator(1500, 2.5, 3)
        self.assertIn("Simple Interest: 112.50", output)
        self.assertIn("Total Amount: 1612.50", output)

    def test_zero_rate(self):
        output = run_calculator(2500, 0, 4)
        self.assertIn("Simple Interest: 0.00", output)
        self.assertIn("Total Amount: 2500.00", output)


if __name__ == "__main__":
    unittest.main()
