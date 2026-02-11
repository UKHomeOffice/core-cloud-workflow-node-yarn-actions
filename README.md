# core-cloud-workflow-node-yarn-actions

This repository contains actions for a full Nodejs yarn workflow

- `Node setup` - to set up node and install dependencies 
- `Node audit` - to ensure that no vulnerable packages are in use
- `Node lint` - to lint code to ensure quality
- `Node test` - to use automated testing to ensure code works
- `Node build` - to build any code artifacts
- `Node publish` - to publish any artifacts to a node repository

There are also two workflows that combine several of actions into self contained actions

- `validation` - will run the audit, lint and testing actions
- `build-publish` - will build and publish any artifacts

## Pre-requisites

- Valid `package.json` and `package-lock.json`
- Valid `yarn run lint` command
- Valid `yarn run test` command
- Valid `yarn run build` command

## Usage

Workflows can be used as

```yml
jobs:
    validation:
        uses: UKHomeOffice/core-cloud-workflow-node-yarn-actions/.github/workflows/validation.yml
        with:
            working_directory: "."
            node_version: "24"
            audit_level: "low"
            post_install_script: ""

    build-publish:
        uses: UKHomeOffice/core-cloud-workflow-node-yarn-actions/.github/workflows/build-publish.yml
        with:
            working_directory: "."
            node_version: "24"
            should_publish: false
            registry_url: ""
        secrets:
            node_access_token: ${{ secrets.NODE_ACCESS_TOKEN }}
```

The actions can be used in similar manner as well