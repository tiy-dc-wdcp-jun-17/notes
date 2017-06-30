# Load bash non-login configuration
if [[ -f ~/.bashrc ]]; then
  source ~/.bashrc
fi

# Load all bash completions installed with brew, such as git
# completions.
if [[ -d /usr/local/etc/bash_completion.d ]]; then
  for ext_file in /usr/local/etc/bash_completion.d/*; do
    source $ext_file
  done
fi

# Primary Prompt String
export PS1='$(ps1_true_false_mark) $(ps1_git)${Green}\w${Reset} \n$ '

# Bash History Size. History is stored in ~/.bash_history.
# The bash command, history, will print previous command.
export HISTSIZE=10000
export HISTFILESIZE=$HISTSIZE

# Enable 256 colors in the terminal if available
if [[ `tput colors` == '256' ]]; then
  export TERM=xterm-256color
fi

# Define colors
Reset=$(tput sgr0)
Red=$(tput setaf 1)
Green=$(tput setaf 2)
Cyan=$(tput setaf 6)

ps1_true_false_mark() {
  if [[ $? == 0 ]]; then
    echo "${Green}✓${Reset}"
  else
    echo "${Red}✘${Reset}"
  fi
}

ps1_git() {
  if [[ $(type -t __git_ps1) ]]; then
    echo "${Cyan}$(__git_ps1 "[%s]:")${Reset}"
  fi
}

true  # for initial PS1
