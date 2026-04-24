#!/bin/bash

# start server in background
PORT=4000
HOST="http://localhost:$PORT"

echo "1. Logging in as 'alisha'..."
LOGIN_RESPONSE=$(curl -s -X POST $HOST/login -H "Content-Type: application/json" -d '{"username":"alisha"}')
echo "Response: $LOGIN_RESPONSE"

ACCESS_TOKEN=$(node -e 'console.log(JSON.parse(process.argv[1]).accessToken)' "$LOGIN_RESPONSE")
REFRESH_TOKEN=$(node -e 'console.log(JSON.parse(process.argv[1]).refreshToken)' "$LOGIN_RESPONSE")

echo ""
echo "Access Token: $ACCESS_TOKEN"
echo "Refresh Token: $REFRESH_TOKEN"

echo ""
echo "2. Getting posts with Access Token..."
curl -s -X GET $HOST/posts -H "Authorization: Bearer $ACCESS_TOKEN"
echo ""

echo ""
echo "3. Refreshing Access Token..."
REFRESH_RESPONSE=$(curl -s -X POST $HOST/token -H "Content-Type: application/json" -d "{\"token\":\"$REFRESH_TOKEN\"}")
echo "Response: $REFRESH_RESPONSE"
NEW_ACCESS_TOKEN=$(node -e 'console.log(JSON.parse(process.argv[1]).accessToken)' "$REFRESH_RESPONSE")
echo "New Access Token: $NEW_ACCESS_TOKEN"

echo ""
echo "4. Getting posts with New Access Token..."
curl -s -X GET $HOST/posts -H "Authorization: Bearer $NEW_ACCESS_TOKEN"
echo ""

echo ""
echo "5. Logging out..."
curl -s -X DELETE $HOST/logout -H "Content-Type: application/json" -d "{\"token\":\"$REFRESH_TOKEN\"}"
echo "Logged out."
