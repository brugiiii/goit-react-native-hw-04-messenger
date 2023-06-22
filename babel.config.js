module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "~/src": "./src",
            "~/icons": "./src/icons",
            "~/assets": "./src/assets",
            "~/contexts": "./src/contexts",
            "~/screens": "./src/screens",
            "~/styles": "./src/styles",
            "~/routes": "./src/routes",
            "~/services": "./src/services",
            "~/hooks": "./src/hooks",
            "~/shared": "./src/shared",
            "~/components": "./src/components",
          },
        },
      ],
    ],
  };
};
