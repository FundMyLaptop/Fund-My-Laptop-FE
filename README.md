# Fund-My-Laptop

Please before you push your codes to the repository make sure you pull from the repository, so the changes that have been made can be reflected on your local machine, for us to avoid merge conflicts use the git command line

```
git pull upstream develop
```

## Developers guide.

This process here should be able to guide you on how to contribute effectively to this project, follow the steps below. You should not be new to the git workflow process however if you still are, the guide should still be able to help you through the process.

## Develop is the default branch.

- All occurences of tomiwaajayi will be your own github username

- Fork the repository to generate a copy of your own.

- Clone the repository.

```
 git clone https://github.com/tomiwaajayi/Fund-My-Laptop-FE.git
```

- Make the original HNGi/Fund-My-Laptop-FE repo the remote upstream (at upstream)

```
git remote add upstream https://github.com/hngi/Fund-My-Laptop-FE.git
```

- Create a branch FROM develop, ALWAYS CREATE YOUR BRANCH FROM DEVELOP,
  the branch name should at least be meaningful, **make sure you have one story per branch (one(1) story === one(1) branch)**

```
git checkout -b (name-of-branch)
```

After changes have been made do:

```
git pull upstream develop
```

Consistently pull from the develop branch to avoid not getting your pull request merged and to avoid conflicts.
This way you can resolve conflicts from your local computer even before pushing always check what branch you are on when making changes

- Make your changes, add your changes

```
git add .
```
- then make your commits

```
git commit -m "your message"
```

  Write good commit messages, this is very important, so people reviewing can know what your fix, feature e.t.c. is doing

- Push your codes to the new branch on your forked remote upstream repository

```
git push origin (name-of-branch)
```

Make your Pull request from that branch of your repo to the develop branch of this (the HNG) repo and wait for it to be merged.

Write good commit messages, this is very important, so people reviewing can know what your fix, feature e.t.c. is doing
Your PR should carry the story / task URL (instruction from above).
if you are going to make changes to an existing code, state why you are doing so in the commit messages

it is not just about the code, user workflow matters too!!

## Commit Structure

- type: subject e.g body, footer

The title consists of the type of the message and subject.
The type is contained within the title and can be one of these types:

- feat: a new feature

- fix: a bug fix

- docs: changes to documentation

- style: formatting, missing semi colons, etc; no code change

- refactor: refactoring production code

- test: adding tests, refactoring test; no production code change

- chore: updating build tasks, package manager configs, etc; no production code change

An example of a good commit message

```
feat: Make login check for email and password
```

More detailed explanatory text, if necessary. Wrap it to about 72 characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log, shortlog and rebase` can get confused if you run the two together.
Explain the problem that this commit is solving. Focus on why you are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequenses of this change? Here's the place to explain them.

- Further paragraphs come after blank lines.

* Bullet points are okay, too
* Typically a hyphen or asterisk is used for the bullet, preceded
  by a single space, with blank lines in between, but conventions
  vary here

- If you use an issue tracker, put references to them at the bottom,
  like this:
  Resolves: #123
  See also: #456, #789
  And if your commit is just a simple thing, then make the message very short, but not just a title

### Happy hacking!!!!
