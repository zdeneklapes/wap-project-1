#!/bin/bash

# Enable strict mode for better error handling
set -euo pipefail

# Function to install dependencies
install_deps() {
    echo "Installing dependencies..."
    npm install
}

# Function to run tests
run_tests() {
	npm run test
}

# Parse arguments
if [[ "${1:-}" == "install" ]]; then
    install_deps
else
    run_tests
fi
