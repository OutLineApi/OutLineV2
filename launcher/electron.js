var { app, BrowserWindow, Notification, ipcMain, nativeTheme, Menu, MenuItem } = require("electron");
var express = require("express");
var server = express();
var path = require("path");
const outlineLogs = require("outline-logs");

// class cause cleaner
class electron {
    constructor() {
        this.app = app;
        this.BrowserWindow = BrowserWindow;
        this.Notification = Notification;
        this.ipcMain = ipcMain;
        this.nativeTheme = nativeTheme;
        this.Menu = Menu;
        this.MenuItem = MenuItem;
        this.logger = new outlineLogs();

        var createWin = () => {
            // Logger gonna be here at some point
            this.logger.Log.INFO("Electron is running.");
            const win = new this.BrowserWindow({
                width: 1020,
                height: 500,
                frame: false,
                titleBarStyle: "customButtonsOnHover",
                titleBarOverlay: true,
                webPreferences: {
                    enableRemoteModule: true,
                    nodeIntegration: false,
                    spellcheck: true,
                    devTools: true
                }
            });
            win.loadFile("./launcher/frontend/login.html");
            win.loadURL("http://localhost:8080/");
            // win.blurWebView.bind(); I SKIDDED DISCORD OK
            this.ipcMain.on("close-app", () => {
                win.close();
            });
            this.ipcMain.on("min-app", () => {
                win.minimize();
            });
        }

        const menu = new this.Menu();
        this.menu = menu;

        this.ipcMain.handle("dark-mode:toggle", () => {
            if (nativeTheme.shouldUseDarkColors) {
                nativeTheme.themeSource = "dark"
            } else {
                nativeTheme.themeSource = "dark"
            }
            return nativeTheme.shouldUseDarkColors
        });

        this.ipcMain.handle("dark-mode:system", () => {
            nativeTheme.themeSource = "dark"
        });

        const NOTIFICATION_TITLE = "OutLineApi"
        const NOTIFICATION_BODY = "Welcome to OutLine!"

        const showNotification = () => {
            new this.Notification({
                title: NOTIFICATION_TITLE,
                body: NOTIFICATION_BODY
            })
        }

        this.app.whenReady().then(createWin).then(showNotification)

        this.app.on("window-all-closed", () => {
            if (process.platform !== "darwin") {
                app.quit()
            }
        });

        this.app.on("activate", () => {
            if (this.BrowserWindow.getAllWindows().length === 0) {
                createWin()
            }
        });
    } // very sussy baka daddy uwu
}

var elec;
elec = new electron();