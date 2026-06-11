# AI Agents

Using AI coding angents like [Claude Caude](https://code.claude.com/docs/),
[OpenCode](https://opencode.ai/) or [Codex](https://openai.com/codex/) is
encouraged at Renuo.

But when using it you **must** make sure to do so in a safe way!

> LLMs are probabilistic - **1%** chance of disaster makes it a matter of ***when***, not ***if***. 
>
> https://agent-safehouse.dev/

We recommend two tools for this:

## [nono](https://nono.sh)

MacOS and Linux.

### Install

```
brew install nono
```

### Use
```
nono run --profile claude --allow-cwd -- claude
```

## [agent-safehouse](https://agent-safehouse.dev/)

MacOS only.

### Install

```
brew install eugene1g/safehouse/agent-safehouse
```

### Use

```
safehouse claude
```
