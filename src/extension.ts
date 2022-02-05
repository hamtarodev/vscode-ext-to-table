import * as vscode from 'vscode';
import { getViewContent } from './utils/webViewContent';
import * as path from 'path';

// sample commit
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ToTable" is now active!');
	let disposable = vscode.commands.registerCommand('ToTable.viewTable', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			let doc = editor.document;
			const documentText = doc.getText();
			const extensionPath = context.extensionPath;

			const panel = vscode.window.createWebviewPanel('toTableView', 'To Table', vscode.ViewColumn.Two, {
				enableScripts: true,

				localResourceRoots: [
					vscode.Uri.file(path.join(extensionPath, "dist"))
				]		
			});
			panel.webview.html = getViewContent(documentText, extensionPath);
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
