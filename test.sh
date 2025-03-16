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
    # Check if Jest is installed
    if [[ ! -f "node_modules/.bin/jest" ]]; then
        npm install
    fi

    # Run tests
    echo "Running tests..."
    npm run test || {
        echo "Tests failed. Check the error messages above."
        exit 1
    }
    echo "Tests passed."
}

# Parse arguments
if [[ "${1:-}" == "install" ]]; then
    install_deps
else
    run_tests
fi
