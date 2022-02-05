import * as vscode from 'vscode';
import * as path from 'path';

export const getViewContent = (data: string, extensionPath: string) => {
  const reactAppPathOnDisk = vscode.Uri.file(path.join(extensionPath, "dist", "configViewer.js"));

  const reactAppUri = reactAppPathOnDisk.with({ scheme: "vscode-resource" });

  const dataStr = data.split('\n');
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Config View</title>

      <meta http-equiv="Content-Security-Policy"
            content="default-src 'none';
                    img-src https:;
                    script-src 'unsafe-eval' 'unsafe-inline' vscode-resource:;
                    style-src vscode-resource: 'unsafe-inline';">

      <script>
        window.acquireVsCodeApi = acquireVsCodeApi;
        window.initialData = [${dataStr}];
        var process = {
          env: {
            NODE_ENV: 'production'
          }
        }
      </script>
  </head>
  <body>
      <div id="root"></div>
      <script src="${reactAppUri}"></script>
  </body>
  </html>`;
};
