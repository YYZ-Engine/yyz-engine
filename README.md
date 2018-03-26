
YYZ Engine
==========

This is a project directed by zpallin, executed by ychoy (for learning).

What will be covered
--------------------

With some luck, you will become more familiar with:

1. Build
2. Software Scaffolding
3. TDD
4. CI/CD
5. Concurrency
6. Data Structures

How it will be administered
---------------------------

I will write issues here and you will need to fulfill them to the best of your ability. Issues can only be closed when I approve them.

Technologies
------------

We will use the following technologies (and perhaps others):

1. Javascript
2. Ruby
3. Bash
4. Docker
6. Vagrant
7. Postgres
8. Mongo

I am thinkng about having you do work with a lower level language, maybe Java. I am not particularly knowledgeable in Java so it may be a better idea for me to learn some before I teach you, but we will figure it out as we go.

The above technologies for sure I plan to teach you more about.

Git flow
--------

Here is the flow I will prefer to use:

### Summary

Each issue will get its own branch and all work will be done there. Do not commit anything directly to master (unless it is this initial commit). All changes will be reviewed before they are merged. Branches must be merged through github.com's pull request tool. All merged branches must be approved. Branches also must be rebased on top of any changes in master.

### Creating Branches

Each branch will be named after the issue, i.e. `issue-#-summary`. The summary attached to the branch name does not need to be the full issue summary, but enough detail to give you idea of what is in the branch without looking directly at the github issues.

Example:
```
git checkout -b issue-1-first-issue
```

### Commit Messages

Commit messages should include the issue number so that github can pick up the commits in the issue page.

```
issue #1 this is how it should look
```

### Rebasing

In a nutshell, rebasing simply replays your current branch's changes on top of another branch that is decended from the same root. This helps keep a clean set of changes in history. Here is [the link](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) to git's rebasing documentation.

A metaphor: Imagine you have a stack of white plates. I have green plates while you have red plates and we are both stacking our plates at the same time. This means the red plates will be mixed with the green plates on top of the white plates. What we want to do is "rebase" the plates so that it is white, then green, then red. That is what rebasing does to your commits. 

Please rebase to `origin/master` before doing a pull request so that your most recent changes in a branch are stacked together.

```
git rebase origin/master
```

### Pull Requests

Do not merge until you have approval.
