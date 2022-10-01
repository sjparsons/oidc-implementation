# OpenID Connect (OIDC) Reference Implementation

This repo is an attempt to provide a reference implementation of the [OpenID Connect 1.0 specification](https://openid.net/specs/openid-connect-core-1_0.html) in NodeJS.

Key Components:

* [`authorization-server`](./packages/authorization-server) - Authorization Server is an OpenID Provider (OP)
* [`auth-flow-server`](./packages/auth-flow-server) - A server-side client for the Authorization Code Flow; a Relying Party (RP)
* [`auth-flow-client`](./packages/auth-flow-client) - A browser app client of the `auth-flow-server` for the Authorization Code Flow
* [`implicit-flow-client`](./packages/implicit-flow-client) - An SPA client for the Implicit Flow; a Relying Party (RP)

We implement `authorization-server`, an OpenID Provider (OP) that supports both the Authorization Code Flow and the Implicit Flow. In the
Authorizxation Code Flow, we have a server, `auth-flow-server` that acts as a Relying Party (RP) and we also have an `auth-flow-client` that is a client side website that interacts with the `auth-flow-server`. In the Implicit Flow, we have an `implicit-flow-client` whic is a SPA client that acts as a Relying Party and interacts directly with the `authorization-server`.

