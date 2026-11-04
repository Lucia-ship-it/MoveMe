// Unsigned macOS apps (especially arm64) show "is damaged and can't be opened".
// An ad-hoc signature fixes the broken bundle signature without an Apple developer account.
const { execFileSync } = require("child_process");
const path = require("path");

exports.default = async function (context) {
    if (context.electronPlatformName !== "darwin") return;
    const app = path.join(context.appOutDir, `${context.packager.appInfo.productFilename}.app`);
    execFileSync("codesign", ["--force", "--deep", "--sign", "-", app], { stdio: "inherit" });
};
