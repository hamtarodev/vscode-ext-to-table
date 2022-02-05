import * as vscode from 'vscode';

// sample commit
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ToTable" is now active!');
	let disposable = vscode.commands.registerCommand('ToTable.viewTable', () => {
		vscode.window.showInformationMessage('Hello World from ToTable!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
