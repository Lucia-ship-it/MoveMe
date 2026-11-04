const { app, BrowserWindow, shell } = require("electron");
const path = require("path");

// Reminders only work while the app runs, so never start a second copy.
if (!app.requestSingleInstanceLock()) app.quit();

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 1050,
        height: 820,
        title: "MoveMe",
        icon: path.join(__dirname, "icon-512.png"),
        autoHideMenuBar: true,
        webPreferences: {
            // keep the break timer ticking while the window is minimized
            backgroundThrottling: false,
            contextIsolation: true,
        },
    });
    win.loadFile(path.join(__dirname, "MoveMe.html"));
    win.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: "deny" };
    });
}

app.on("second-instance", () => {
    if (!win) return;
    if (win.isMinimized()) win.restore();
    win.focus();
});

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
