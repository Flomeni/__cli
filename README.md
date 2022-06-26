# Nodejs Boilerplate CLI

    Command line interface that acts as an automated tool for generating boilerplates for Nodejs. Utilizes built-in BoilerPlateSchema's that guide generator's scaffolding process. Developer can provide his own BoilerPlateSchema to make output close to the needs. 

## Overview 

    This cli is a base cli setup that can be used as a base class for any multi-functional cli-apps that would help developer to automate his day-to-day routine, e.g. scaffolding schemas to generate components for web or back-end applications, deployment, publishing, 3-rd party API utilization etc.

##   CLI prompts
CLI prompts introduce user interaction into CLI execution. The prompts are displayed before the execution of the CLI, which then uses the response as the value for the option. This lets users direct the operation of the CLI without requiring in-depth knowledge of the full spectrum of available options.

The CLI schematic might, for example, ask the user for the type of app to scaffold, its pass and then put it in place of the default path "./". To define such a prompt, add an x-prompt property to the schema for the variable.

Similarly, you can add a prompt to let the user decide whether the CLI uses APOLLO when executing its RUN action.

## Installation

    1) cd path/to/root
    2) npm run install
    3) reload terminal, if it didnt work - reboot pc

## Usage

    TBD