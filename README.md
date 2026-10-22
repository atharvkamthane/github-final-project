complete emotion detector using python
# Simple Interest Calculator

A command-line calculator that computes simple interest and the total amount for a principal, annual interest rate, and time period. The calculator is implemented in Bash.

## Project Details

- **Project name:** Simple Interest Calculator
- **Language:** Bash
- **CI linting:** flake8
- **Unit testing:** nose
- **Automation:** GitHub Actions
- **Pipeline task definitions:** Tekton in `.tekton/tasks.yml`

## Formula

**Simple Interest = (Principal × Rate × Time) / 100**

Where:
- **Principal** is the initial amount of money.
- **Rate** is the annual interest rate in percent.
- **Time** is the time period in years.

**Total Amount = Principal + Simple Interest**

## Run the calculator

```bash
bash simple-interest.sh
```

Enter the principal amount, annual rate of interest, and time in years when prompted.

## Run linting and unit tests locally

Use Python 3.9 for compatibility with the pinned nose 1.3.7 test runner.

```bash
python -m pip install -r requirements-dev.txt
flake8 tests
nosetests -v
```

The unit tests exercise the Bash calculator with sample inputs and verify its calculated simple-interest and total-amount outputs.

## Example

For a principal of ₹10,000, an annual interest rate of 5%, and a time period of 2 years:

- Simple Interest = (10,000 × 5 × 2) / 100 = ₹1,000
- Total Amount = ₹11,000
