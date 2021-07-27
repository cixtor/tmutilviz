#!/bin/bash
FILENAME="src/App.jsx"

if [[ ! -e "${FILENAME}" ]] ; then \
	echo "${FILENAME} does not exist"
	exit 1
fi

HEAD=$(head -n10 "${FILENAME}")
TAIL=$(tail -n30 "${FILENAME}")

{
	echo "${HEAD}"
	tmutil listbackups | while read -r LINE ; do
		echo "      \"${LINE}\","
	done
	echo "${TAIL}"
} 1> "$FILENAME"
