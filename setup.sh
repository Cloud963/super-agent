#!/bin/bash
echo "Super Agent Setup - AIOX + Claude Subagents"
echo "============================================"

if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js v18+ required"
    exit 1
fi

echo "[1/5] Init git submodules..."
git submodule add https://github.com/Cloud963/aiox-core.git aiox-core 2>/dev/null
git submodule add https://github.com/Cloud963/awesome-claude-code-subagents.git claude-subagents 2>/dev/null
git submodule update --init --recursive

echo "[2/5] Installing root deps..."
npm install

echo "[3/5] Setting up AIOX Core..."
cd aiox-core && npm install 2>/dev/null; cd ..

echo "[4/5] Setting up Dashboard..."
cd dashboard && npm install && cd ..

echo "[5/5] Generating agents registry..."
node integration/orchestrator.js --init

echo "Setup Complete! Run: npm run dev"
