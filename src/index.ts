const config: import("semantic-release").Options = {
  branches: [
    "main",
    {
      name: "beta",
      prerelease: true,
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    ["@semantic-release/npm", { tarballDir: "pack" }],
    ["@semantic-release/github", { assets: "pack/*.tgz" }],
    [
      "@semantic-release/git",
      {
        assets: "CHANGELOG.md",
      },
    ],
  ],
};
module.exports = config;
