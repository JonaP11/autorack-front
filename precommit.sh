#!/bin/bash

# ------ Variables

CLR_RED=[31m
CLR_GRN=[32m
CLR_CYN=[36m
CLR_NC=[0m

# ------ Functions

run_cmd_exit_on_err() {
  if ! $1; then
    echo "${CLR_RED}Error @ $2${CLR_NC}"
    read -p "Press enter to continue." -r
    exit 1
  fi
}

# ------ Main

echo "${CLR_CYN}Linting the code...${CLR_NC}"
run_cmd_exit_on_err "npm run lint" "Code linting"

echo "${CLR_CYN}Linting the code (css)...${CLR_NC}"
run_cmd_exit_on_err "npm run lint:css" "Code linting (css)"

echo "${CLR_CYN}Running the tests...${CLR_NC}"
run_cmd_exit_on_err "npm run test -- --watchAll=false" "Code testing"

echo "--- ${CLR_GRN}All checks passed.${CLR_NC} ---"
read -p "Press enter to continue." -r
