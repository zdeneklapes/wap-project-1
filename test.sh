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
        echo "Error: Jest is not installed."
        echo "Run './test.sh install' first to install dependencies, then try './test.sh' again."
        exit 1
    fi

    # Run tests
    npm run test || {
        echo "Tests failed. Check the error messages above."
        exit 1
    }
}

# Parse arguments
if [[ "${1:-}" == "install" ]]; then
    install_deps
else
    run_tests
fi
