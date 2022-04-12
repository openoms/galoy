#!/bin/bash

echo "\
DOCKER_HOST_IP=${DOCKER_HOST_IP}
NETWORK=${NETWORK}
NODE_ENV=${NODE_ENV}

LND1_TLS=${LND1_TLS}
LND2_TLS=${LND2_TLS}
LNDONCHAIN_TLS=${LNDONCHAIN_TLS}
TLSOUTSIDE1=${TLSOUTSIDE1}
TLSOUTSIDE2=${TLSOUTSIDE2}

LND1_MACAROON=${LND1_MACAROON}
LND1_MACAROON=${LND1_MACAROON}
LND2_MACAROON=${LND2_MACAROON}
LNDONCHAIN_MACAROON=${LNDONCHAIN_MACAROON}
MACAROONOUTSIDE1=${MACAROONOUTSIDE1}
MACAROONOUTSIDE2=${MACAROONOUTSIDE2}

LND1_PUBKEY=${LND1_PUBKEY}
LND2_PUBKEY=${LND2_PUBKEY}
LNDONCHAIN_PUBKEY=${LNDONCHAIN_PUBKEY}

BITCOINDPORT=${BITCOINDPORT}
BITCOINDADDR=${BITCOINDADDR}
BITCOINDRPCPASS=${BITCOINDRPCPASS}

LND1_DNS=${LND1_DNS}
LND2_DNS=${LND2_DNS}
LNDONCHAIN_DNS=${LNDONCHAIN_DNS}
LNDOUTSIDE1ADDR=${LNDOUTSIDE1ADDR}
LNDOUTSIDE2ADDR=${LNDOUTSIDE2ADDR}

LND1_RPCPORT=${LND1_RPCPORT}
LND2_RPCPORT=${LND2_RPCPORT}
LNDONCHAIN_RPCPORT=${LNDONCHAIN_RPCPORT}
LNDOUTSIDE1RPCPORT=${LNDOUTSIDE1RPCPORT}
LNDOUTSIDE2RPCPORT=${LNDOUTSIDE2RPCPORT}

MONGODB_ADDRESS=${MONGODB_ADDRESS}
MONGODB_PASSWORD=${MONGODB_PASSWORD}

REDIS_0_INTERNAL_IP=${REDIS_0_INTERNAL_IP}
REDIS_0_PORT=${REDIS_0_PORT}
REDIS_0_DNS=${REDIS_0_DNS}
REDIS_0_SENTINEL_PORT=${REDIS_0_SENTINEL_PORT}

PRICE_ADDRESS=${PRICE_ADDRESS}
PRICE_PORT=${PRICE_PORT}

APOLLO_KEY=${APOLLO_KEY}
APOLLO_GRAPH_REF=${APOLLO_GRAPH_REF}

LOCAL=${LOCAL}
JWT_SECRET=${JWT_SECRET}

GEETEST_ID=${GEETEST_ID}
GEETEST_KEY=${GEETEST_KEY}

TWILIO_ACCOUNT_SID=${TWILIO_ACCOUNT_SID}
TWILIO_AUTH_TOKEN=${TWILIO_AUTH_TOKEN}
TWILIO_PHONE_NUMBER=${TWILIO_PHONE_NUMBER}

COMMITHASH=${COMMITHASH}
BUILDTIME=${BUILDTIME}
HELMREVISION=${HELMREVISION}


NODE_PATH=${NODE_PATH}
NODE_ENV=${NODE_ENV}
SESSION_KEYS=${SESSION_KEYS}
HOST=${HOST}
PORT=${PORT}
WALLET_NAME=${WALLET_NAME}
WALLET_LAYOUT=${WALLET_LAYOUT}
WALLET_THEME=${WALLET_THEME}
SUPPORT_EMAIL=${SUPPORT_EMAIL}
SHARE_URI=${SHARE_URI}
NETWORK=${NETWORK}
GRAPHQL_URI=${GRAPHQL_URI}
GRAPHQL_SUBSCRIPTION_URI=${GRAPHQL_SUBSCRIPTION_URI}
AUTH_ENDPOINT=${AUTH_ENDPOINT}
KRATOS_API_URL=${KRATOS_API_URL}
KRATOS_BROWSER_URL=${KRATOS_BROWSER_URL}
GALOY_AUTH_ENDPOINT=${GALOY_AUTH_ENDPOINT}
KRATOS_FEATURE_FLAG=${KRATOS_FEATURE_FLAG}
" | tee .env
