#!/usr/bin/env bash

set -euo pipefail

echo "Simple Interest Calculator"

read -r -p "Enter principal amount: " principal
read -r -p "Enter rate of interest (% per year): " rate
read -r -p "Enter time period (years): " time

simple_interest="$(awk -v p="$principal" -v r="$rate" -v t="$time" 'BEGIN {printf "%.2f", (p * r * t) / 100}')"
total_amount="$(awk -v p="$principal" -v si="$simple_interest" 'BEGIN {printf "%.2f", p + si}')"

echo "Simple Interest: $simple_interest"
echo "Total Amount: $total_amount"
