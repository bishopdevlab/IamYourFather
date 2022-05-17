import * as vscode from 'vscode';

let myStatusBarItem: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {
	const myCommandId = 'extension.iamYourFather';
	subscriptions.push(vscode.commands.registerCommand(myCommandId, () => {
		const father = getFatherByCurrentElement(vscode.window.activeTextEditor);
		if (father) {
			vscode.window.showInformationMessage(`Parent: ${father}`, {modal: true});
		}
	}));

	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	myStatusBarItem.command = myCommandId;
	subscriptions.push(myStatusBarItem);

	subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));

	updateStatusBarItem();
}

function updateStatusBarItem(): void {
	const father = getFatherByCurrentElement(vscode.window.activeTextEditor);
	if (father !== '') {
		myStatusBarItem.text = `$(notebook-open-as-text) Parent: ${father}`;
		myStatusBarItem.show();
	}
	else {
		myStatusBarItem.hide();
	}
}

function getFatherByCurrentElement(editor: vscode.TextEditor | undefined): string {
	let father = '';
	let document = editor?.document as vscode.TextDocument;
	if (document) {
		if (!editor?.selection.isEmpty) {
			var position = editor?.selection.active;
			if (position) {
				// Searching logics
				let keywordsOfElementName = 'Name';

				var range = new vscode.Range(0, 0, position?.line, position?.character);
				var text = document.getText(range);
				var reversedLines = text.split("\r\n").reverse();

				var lineOfElementName = reversedLines.find(e => e.includes(keywordsOfElementName));
				var elementName = lineOfElementName?.substring(lineOfElementName?.indexOf("'") + 1, lineOfElementName?.indexOf("'", lineOfElementName?.indexOf("'") + 1));

				if (elementName) {
					father = elementName;
				}
			}
		}
	}
	return father;
}

function getSelectedWords(editor: vscode.TextEditor | undefined): string {
	let words = '';
	if (editor) {
		let document = editor?.document as vscode.TextDocument;
		if (document) {
			const range = document.getWordRangeAtPosition(editor.selection.active);
			if (range) {
				words = document.getText(range);
			}
		}
	}
	return words;
}

function getNumberOfSelectedLines(editor: vscode.TextEditor | undefined): number {
	let lines = 0;
	if (editor) {
		lines = editor.selections.reduce((prev, curr) => prev + (curr.end.line - curr.start.line), 0);
	}
	return lines;
}

export function deactivate() {}
