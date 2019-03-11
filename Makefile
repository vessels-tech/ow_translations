#
# OW Translations
# OW Translation manager
#

PATH := node_modules/.bin:$(PATH)
dir = $(shell pwd)
NPM_VERSION_NUMBER := $(shell node ./tools/getVersionNumber.js)


all: parse build push publish update

build:
	yarn run build

clean:
	rm -rf ${dir}/src/common/*

lazy_build:
	yarn run lazy_build

parse:
	node ./lib/parser.js

publish:
	@echo 'Publishing $(NPM_VERSION_NUMBER) to NPM!'
	npm publish
	git tag $(NPM_VERSION_NUMBER)
	git push origin $(NPM_VERSION_NUMBER)

push: 
	git commit -am "update translations" ; git push ; git log | head -1

update:
	cd ${dir}/../ow_client && yarn add ow_translations
	cd ${dir}/../ow_firebase/functions && yarn add ow_translations

.PHONY: build parse