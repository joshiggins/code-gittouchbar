import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let sync = vscode.commands.registerCommand('gittouchbar.sync', () => {
		vscode.commands.executeCommand('git.sync')
	});

	context.subscriptions.push(sync);
}

export function deactivate() {}
