# Contributing Guidelines

We appreciate your interest in contributing to our **DYOM Bingo project**! To ensure a smooth collaboration, we have provided some guidelines for you to follow.

# Branches

In this project, we have multiple branches for different versions, except for the main branch, which is the official version of the site. However, the main branch **may not always be the most recent version**, as we are constantly adding new features.

To determine the latest version, **check the branches available in the repository**. For example, if we have branches `1.1`, `1.2`, and `1.3`, then `1.3` would be the most recent version.

Once a version has enough features and has undergone sufficient testing, it will be merged into the main branch and published on the official website.

# Reporting Issues

If you encounter any issues with the project, please open a new issue on the Issues tab. When reporting the issue, provide a **detailed description of the problem, including steps to reproduce it**.

Feature requests and ideas are also welcome in this project, so if you have any cool ideas, feel free to share with us!

Optional issue templates are provided to help you report the issue.

# Code of Conduct

We expect all contributors to adhere to our Code of Conduct, which can be found in the [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) file located in the root directory of the project.

# Step-by-step Guide to Contributing

We're excited to have you contribute to the DYOM Bingo project with your cool new features! **To get started, follow these steps:**

1. **Review the project's Code of Conduct:** Before contributing, read and understand our [Code of Conduct](./CODE_OF_CONDUCT.md).

2. **Fork the repository:** Click the "Fork" button on the top right corner of the repository's page on GitHub to create a personal copy of the project.

3. **Clone the repository:** Clone the repository to your local machine using your preferred method.

   ```bash
   git clone https://github.com/Toriality/DYOM-Bingo.git
   ```

4. **Navigate to the cloned folder:** Navigate to the folder you just created by using the cd command.

   ```bash
   cd DYOM-Bingo
   ```

5. **Check out the latest version's branch:** Our project has multiple branches for different versions. To ensure your contributions are based on the latest version of the code, check out the latest version's branch.

   ```bash
   git checkout [branch_name]
   ```

6. **Make your changes:** Start coding!

7. **Test your changes:** Before submitting a pull request, test your changes to ensure they work as expected.

8. **Submit a pull request:** Once you're satisfied with your changes, submit a pull request. Provide a detailed description of your changes, the problem they solve, and any other relevant information.

9. **Collaborate:** Be prepared to discuss your changes with the project maintainers and other contributors. You may need to make additional changes or address feedback before your changes are merged into the main codebase.

# Contribution Recognition

We use the [all-contributors](https://allcontributors.org/docs/en/overview) specification to recognize contributors to the project. This specification allows us to see all contributors and the types of contributions they have made.

Anyone can easily add themselves as a contributor and list their contribution type using the [**all-contributors CLI**](https://allcontributors.org/docs/en/cli/overview) or the [**@all-contributors bot**](https://allcontributors.org/docs/en/bot/overview) available in our repository. Here's how to do it:

### Using the CLI

All-contributors provides a CLI for handling contributors. [You can read the full documentation here.](https://allcontributors.org/docs/en/cli/overview)

1. **Install the CLI:** Use the `yarn install` command to install the dependencies from package.json. You need to have [yarn](https://classic.yarnpkg.com/en/) installed in your machine.

2. **Add yourself as a contributor:** Use the `yarn ac:add <username> <contribution>` command to add a new contributor. Separate the contributions by commas without spaces. For example:

   ```
   yarn ac:add toriality code,doc
   ```

3. **Update:** If the add command doesn't update the README.md automatically, you can use the yarn ac:generate command to update the README.md contributor table.

4. **Make a pull request:** Finally, make a pull request with all the changes you made!

### Using the bot

You can easily add yourself or another user as a contributor using the [GitHub bot @all-contributors](https://allcontributors.org/docs/en/bot/overview). To do that, you need to comment on a PR or an issue with the following sentence:

```
@all-contributors please add @<username> for <contribution>
```

Example:

```
@all-contributors please add @Toriality for code,doc
```

Please let us know if you have any questions or issues adding your contributions using these methods!

---

### We look forward to your contributions! :wink:
