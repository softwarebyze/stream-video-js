#!/bin/bash
set -euo pipefail

OUTPUT_DIR="../stream-video-js/packages/client/src/gen/coordinator"
CHAT_DIR="../../../chat"

rm -rf $OUTPUT_DIR

( cd $CHAT_DIR ; make openapi ; go run ./cmd/chat-manager openapi generate-client --language ts --spec ./releases/v2/video-clientside-api.yaml --output $OUTPUT_DIR )

yarn lint:client:coordinator