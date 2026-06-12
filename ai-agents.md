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

### zsh

This is an example configuration @schmijos uses.

The assumption here is that there is a trade-off between security and comfort.
Because the normal approval-based approach doesn't give any more real security
we go explicitly for the unsafe but comfortable setting in the agents.
For real security we have _safehouse_.

Only Claude offers a better trade-off with it's security reviewing agentic-hook called
[auto-mode](https://www.anthropic.com/engineering/claude-code-auto-mode)
since [May 2026](https://code.claude.com/docs/en/whats-new/2026-w21).

```zsh
safe() {
    case "$PWD/" in
      "$HOME/p"/*) ;;
      *)
        printf 'Not under %s (PWD=%s). Continue? [y/N] ' "$HOME/p" "$PWD"
        read -r reply
        [[ "$reply" == [yY]* ]] || return 1
        ;;
    esac

  safehouse \
    --workdir="$PWD" \
    --add-dirs-ro="$HOME/p" \
    --add-dirs-ro="$HOME/.gitconfig" \
    --add-dirs-ro="$HOME/.gitignore" \
    -- "$@";
}
claude()   { safe claude --permission-mode auto "$@"; }
codex()    { safe codex --dangerously-bypass-approvals-and-sandbox "$@"; }
amp()      { safe amp --dangerously-allow-all "$@"; }
gemini()   { NO_BROWSER=true safe gemini --yolo "$@"; }
```
