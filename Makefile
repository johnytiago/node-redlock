DOCKER_ORG = docker.pkg.github.com/gmsllc

.PHONY: login
login:
	@echo $(DOCKER_REGISTRY_PASS) | docker login $(DOCKER_ORG) --username $(DOCKER_REGISTRY_USER) --password-stdin

.PHONY: publish
publish: COMMAND = npm publish
publish: command
